"use client";

import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignUpButton,
  SignInButton,
  SignedIn,
  useSignIn,
  useClerk,
} from "@clerk/nextjs";
import Image from "next/image";
import { Loader, Lock, Copy } from "lucide-react";
import Link from "next/link";
import { MobileVersePopup } from "@/components/MobileVersePopup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type GuestCreds = { username: string; password: string; firstName?: string; lastName?: string };

export default function Home() {
  const router = useRouter();
  const { isLoaded, signIn } = useSignIn();
  const { setActive } = useClerk();

  const [creating, setCreating] = useState(false);
  const [showCreds, setShowCreds] = useState<GuestCreds | null>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      if (/iPad|iPhone|iPod/.test(ua)) {
        setIsIOS(true);
      }
    }
  }, []);

  // Create a full guest account (username + password) and sign in
  const onCreateGuestAccount = async () => {
    if (creating) return;
    setCreating(true);
    try {
      if (!isLoaded || !signIn) throw new Error("Clerk not loaded yet");

      const res = await fetch("/api/guest-account", { method: "POST" });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body?.token) {
        console.error("guest-account error:", body);
        throw new Error("Failed to create guest account");
      }

      const result = await signIn.create({ strategy: "ticket", ticket: body.token });
      if (!result?.createdSessionId) throw new Error("No session created");
      await setActive({ session: result.createdSessionId });

      if (body.credentials) setShowCreds(body.credentials as GuestCreds);
    } catch (e) {
      console.error(e);
      alert("Could not create a guest account. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const goUpdate = () => router.push("/user"); // your profile/security page
  const goContinue = () => {
    setShowCreds(null);
    router.push("/courses");
  };

  const copyPwd = async () => {
    try {
      if (showCreds?.password) await navigator.clipboard.writeText(showCreds.password);
    } catch {}
  };
  const copyUsername = async () => {
    try {
      if (showCreds?.username) await navigator.clipboard.writeText(showCreds.username);
    } catch {}
  };

  return (
    <>
      <MobileVersePopup />

      {/* Modal with visible username/password */}
      {showCreds && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guest-created-title"
        >
          <div className="w-full max-w-md rounded-2xl border bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b px-5 py-4">
              <div className="rounded-full bg-neutral-100 p-2 text-neutral-700">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 id="guest-created-title" className="text-base font-semibold text-neutral-900">
                  Guest account created
                </h2>
                <p className="text-xs text-neutral-500">You’re signed in. Save these details.</p>
              </div>
            </div>

            <form method="post" action="/password-save" autoComplete="on" className="px-5 py-4 space-y-3">
              {/* Password block */}
              <div className="rounded-lg border bg-neutral-50 p-3">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Password</div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  defaultValue={showCreds.password}
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <div className="mt-1 flex items-center justify-between gap-2">
                  <input
                    type="text"
                    value={showCreds.password}
                    readOnly
                    className="font-mono text-sm bg-transparent outline-none w-full"
                  />
                  <Button size="sm" variant="secondary" type="button" onClick={copyPwd}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                </div>
              </div>

              {/* Username block */}
              <div className="rounded-lg border bg-neutral-50 p-3">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Username</div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name="username"
                    autoComplete="username"
                    defaultValue={showCreds.username}
                    className="font-mono text-sm bg-transparent outline-none w-full break-all"
                  />
                  <Button size="sm" variant="secondary" type="button" onClick={copyUsername}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                </div>
              </div>

              {/* Footer actions */}
              <div className="grid grid-cols-1 gap-2 border-t pt-4 sm:grid-cols-4">
                <Button type="button" onClick={goUpdate} className="w-full">
                  Update
                </Button>
                {!isIOS && (
                  <Button type="submit" variant="secondary" className="w-full">
                    Save
                  </Button>
                )}
                <Button type="button" onClick={goContinue} variant="secondary" className="w-full">
                  Continue
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowCreds(null)}
                  variant="secondaryoutline"
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8">
          <Image
            src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542564/Quran_Icon_fl85ji.png"
            fill
            alt="hero"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Learn, Practice and Excel in Quran
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal" forceRedirectUrl="/learn" fallbackRedirectUrl="/learn">
                  <Button size="lg" variant="primaryoutline" className="w-full">
                    create account
                  </Button>
                </SignUpButton>



                <Button
                  size="lg"
                  variant="super"
                  className="w-full"
                  onClick={onCreateGuestAccount}
                  disabled={creating || !isLoaded}
                >
                  {creating ? "Creating…" : "Create Guest Account"}
                </Button>

                <Button size="lg" variant="secondaryoutline" className="w-full" asChild>
                  <Link href="/courses">Browse as Guest</Link>
                </Button>

                <p className="text-xs text-center text-neutral-500 mt-1">
                  Browsing is open. Playing lessons and checkout require an account.
                </p>
              </SignedOut>

              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">Continue Learning</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </>
  );
}
