import { NextResponse, type NextRequest } from "next/server";
import { eq } from "drizzle-orm";

import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// GET a single challengeOption
export async function GET(
  req: NextRequest,
  { params }: { params: { challengeOptionId: string } }
) {
  const id = Number(params.challengeOptionId);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, id),
  });

  if (!data) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(data);
}

// UPDATE a challengeOption
export async function PUT(
  req: NextRequest,
  { params }: { params: { challengeOptionId: string } }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = Number(params.challengeOptionId);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const body = await req.json();

  const data = await db
    .update(challengeOptions)
    .set({ ...body })
    .where(eq(challengeOptions.id, id))
    .returning();

  return NextResponse.json(data[0] || {});
}

// DELETE a challengeOption
export async function DELETE(
  req: NextRequest,
  { params }: { params: { challengeOptionId: string } }
) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = Number(params.challengeOptionId);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, id))
    .returning();

  if (!data[0]) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(data[0]);
}
