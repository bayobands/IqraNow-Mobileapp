import { NextResponse } from "next/server";
import { eq, and, ilike } from "drizzle-orm";
import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const filterParam = searchParams.get("filter");

  let whereClause = [];

  if (filterParam) {
    const filter = JSON.parse(filterParam);

    if (filter.courseId) {
      whereClause.push(eq(units.courseId, Number(filter.courseId)));
    }

    if (filter.title) {
      whereClause.push(ilike(units.title, `%${filter.title}%`)); // Optional
    }
  }

  const data = await db.query.units.findMany({
    where: whereClause.length > 0 ? and(...whereClause) : undefined,
  });

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const data = await db.insert(units).values({
    ...body,
  }).returning();

  return NextResponse.json(data[0]);
};
