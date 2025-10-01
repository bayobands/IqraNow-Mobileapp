// app/api/webhooks/clerk/route.ts
import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { userProgress, userSubscription, challengeProgress } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.type === "user.deleted") {
    const clerkUserId = body.data.id;

    try {
      // Delete challenge progress
      await db.delete(challengeProgress).where(eq(challengeProgress.userId, clerkUserId));

      // Delete user subscription if applicable
      await db.delete(userSubscription).where(eq(userSubscription.userId, clerkUserId));

      // Delete user progress
      await db.delete(userProgress).where(eq(userProgress.userId, clerkUserId));

      console.log(`Cleaned up data for deleted user ${clerkUserId}`);
    } catch (error) {
      console.error("Failed to delete user data:", error);
    }
  }

  return NextResponse.json({ status: "ok" });
}
