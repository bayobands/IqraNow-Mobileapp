import { NextResponse } from "next/server";
import { clerkClient as _clerkClient } from "@clerk/nextjs/server";
import { randomBytes } from "crypto";

export const runtime = "nodejs";

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });
}
function randStr(len = 8) {
  return randomBytes(len).toString("hex").slice(0, len);
}
function generatePassword() {
  const base = randomBytes(24).toString("base64url");
  return (base + "Aa1!").slice(0, 16);
}
const FIRST = ["Yusuf","Maryam","Aisha","Omar","Zayd","Fatima","Ali","Huda"];
const LAST  = ["Rahman","Farooq","Salah","Karim","Hakeem","Zahir","Tariq","Imran"];
function pick<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }

export async function POST() {
  try {
    const clerk =
      typeof _clerkClient === "function" ? await (_clerkClient as any)() : _clerkClient;

    const username = `guest_${randStr(10)}`;
    const password = "iqranow1"; // ← changed here
    const firstName = pick(FIRST);
    const lastName = pick(LAST);

    const user = await clerk.users.createUser({
      username,
      password,
      firstName,
      lastName,
      publicMetadata: { role: "guest_account", createdAsGuest: true },
    });

    const token = await clerk.signInTokens.createSignInToken({
      userId: user.id,
      expiresInSeconds: 60,
    });

    return json({ 
      token: token.token, 
      credentials: { username, password, firstName, lastName } 
    });
  } catch (err: any) {
    return json({ error: "guest_account_creation_failed", details: err }, 500);
  }
}
