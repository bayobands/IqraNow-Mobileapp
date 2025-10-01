// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * PUBLIC ROUTES (no auth):
 *   /                     (home/marketing)
 *   /courses, /courses/*  (catalog + previews)
 *   /shop, /shop/*        (browse products/items)
 *   /leaderboard          (loads and shows guest popup if signed out)
 *
 * PROTECTED ROUTES (auth required):
 *   /learn/*              (gameplay/progress)
 *   /forum/*
 *   /account/*, /user/*, /settings/*
 *   /shop/checkout/*, /checkout/*, /billing/*, /upgrade/*
 */

// ---- Account-only pages/actions (require login) ----
const isProtectedRoute = createRouteMatcher([
  "/learn(.*)",
  "/forum(.*)",
  "/account(.*)",
  "/user(.*)",
  "/settings(.*)",
  "/shop/checkout(.*)",
  "/checkout(.*)",
  "/billing(.*)",
  "/upgrade(.*)",
]);

// ---- Any URL that could initiate/complete a purchase (to hard-block on iOS UAs) ----
const BLOCKED_PATHS = [
  "/subscribe",
  "/upgrade",
  "/pro",
  "/billing",
  "/checkout",
  "/shop/checkout",
  "/pricing/checkout",
  "/api/stripe",
  "/api/user-subscription",
  "/actions/user-subscription",
];

// Helper: match path against patterns
function pathMatches(pathname: string, patterns: string[]) {
  return patterns.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

// Detect iOS (Safari/WKWebView)
function isIosUA(ua: string | null) {
  if (!ua) return false;
  return /\biPhone\b|\biPad\b|\biPod\b/i.test(ua) || /CFNetwork|Darwin/i.test(ua);
}

// Allow your wrapper to tag requests as native iOS
function isFromNativeIos(req: NextRequest) {
  const hdr = req.headers.get("x-ios-app");
  const cookie = req.cookies.get("ios_app")?.value;
  return hdr === "1" || cookie === "1";
}

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // 0) Allowlist: do NOT intercept certain APIs (guest account + webhooks)
  if (
    pathname.startsWith("/api/guest-account") ||
    pathname.startsWith("/api/clerk") ||           // Clerk webhooks (if any)
    pathname.startsWith("/api/stripe/webhook")      // Stripe webhooks (if any)
  ) {
    return NextResponse.next();
  }

  // 1) Block purchase/checkout on ANY iOS traffic (Safari + App)
  try {
    const ua = req.headers.get("user-agent");
    const isIos = isIosUA(ua) || isFromNativeIos(req);

    if (isIos && pathMatches(pathname, BLOCKED_PATHS)) {
      const url = req.nextUrl.clone();
      url.pathname = "/ios-purchases-unavailable";
      url.search = "";
      return NextResponse.redirect(url, { status: 302 });
    }
  } catch (e) {
    console.error("💥 Middleware iOS block error:", e);
    // fail open for non-blocked routes
  }

  // 2) Clerk auth protection ONLY for account-based routes
  try {
    if (isProtectedRoute(req)) {
      await auth.protect(); // redirects to Clerk sign-in if not logged in
    }
  } catch (err) {
    console.error("💥 Middleware auth error:", err);
    // Fallback: send guests to a public page
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // All app routes except static files and _next
    "/((?!.+\\.[\\w]+$|_next).*)",
    // APIs still pass through (allowlist above skips guest-account/webhooks)
    "/(api|trpc)(.*)",
  ],
};
