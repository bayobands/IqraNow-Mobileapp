import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { challenges } from "@/db/schema";

// GET a single challenge by ID
export const GET = async (
  req: Request,
  { params }: { params: { challengeId: string } }
) => {
  const id = Number(params.challengeId);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, id),
  });

  if (!data) {
    return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
  }

  return NextResponse.json(data);
};

// PUT: Update a challenge
export const PUT = async (
  req: Request,
  { params }: { params: { challengeId: string } }
) => {
  const id = Number(params.challengeId);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const body = await req.json();

  const updated = await db
    .update(challenges)
    .set({ ...body })
    .where(eq(challenges.id, id))
    .returning();

  return NextResponse.json(updated[0]);
};

// DELETE: Remove a challenge
export const DELETE = async (
  req: Request,
  { params }: { params: { challengeId: string } }
) => {
  const id = Number(params.challengeId);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await db
    .delete(challenges)
    .where(eq(challenges.id, id))
    .returning();

  if (!deleted.length) {
    return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
  }

  return NextResponse.json(deleted[0]);
};
