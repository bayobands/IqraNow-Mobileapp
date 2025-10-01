import { NextResponse } from "next/server";
import { eq, inArray, and, ilike } from "drizzle-orm";

import db from "@/db/drizzle";
import { lessons, units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const filterParam = searchParams.get("filter");

  let whereClause = [];

  if (filterParam) {
    const filter = JSON.parse(filterParam);

    // Filter by unitId directly
    if (filter.unitId) {
      whereClause.push(eq(lessons.unitId, Number(filter.unitId)));
    }

    // Filter by courseId via unit → lesson
    if (filter.courseId) {
      const unitList = await db
        .select({ id: units.id })
        .from(units)
        .where(eq(units.courseId, Number(filter.courseId)));

      const unitIds = unitList.map((u) => u.id);
      if (unitIds.length === 0) return NextResponse.json([]);

      whereClause.push(inArray(lessons.unitId, unitIds));
    }

    // Optional: filter by title
    if (filter.title) {
      whereClause.push(ilike(lessons.title, `%${filter.title}%`));
    }
  }

  const data = await db.query.lessons.findMany({
    where: whereClause.length > 0 ? and(...whereClause) : undefined,
  });

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const data = await db.insert(lessons).values({
    ...body,
  }).returning();

  return NextResponse.json(data[0]);
};
