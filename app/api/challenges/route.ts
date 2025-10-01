import { NextResponse } from "next/server";
import { eq, and, inArray, ilike } from "drizzle-orm";

import db from "@/db/drizzle";
import { challenges, lessons, units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const filterParam = searchParams.get("filter");

  let whereClause = [];

  if (filterParam) {
    const filter = JSON.parse(filterParam);

    // Direct filter by lessonId
    if (filter.lessonId) {
      whereClause.push(eq(challenges.lessonId, Number(filter.lessonId)));
    }

    // Filter by unitId → get lesson IDs
    if (filter.unitId) {
      const lessonList = await db
        .select({ id: lessons.id })
        .from(lessons)
        .where(eq(lessons.unitId, Number(filter.unitId)));

      const lessonIds = lessonList.map((l) => l.id);
      if (lessonIds.length === 0) return NextResponse.json([]);
      whereClause.push(inArray(challenges.lessonId, lessonIds));
    }

    // Filter by courseId → get units → lessons
    if (filter.courseId) {
      const unitList = await db
        .select({ id: units.id })
        .from(units)
        .where(eq(units.courseId, Number(filter.courseId)));

      const unitIds = unitList.map((u) => u.id);
      if (unitIds.length === 0) return NextResponse.json([]);

      const lessonList = await db
        .select({ id: lessons.id })
        .from(lessons)
        .where(inArray(lessons.unitId, unitIds));

      const lessonIds = lessonList.map((l) => l.id);
      if (lessonIds.length === 0) return NextResponse.json([]);

      whereClause.push(inArray(challenges.lessonId, lessonIds));
    }

    // Optional: filter by question
    if (filter.question) {
      whereClause.push(ilike(challenges.question, `%${filter.question}%`));
    }

    // Optional: filter by type
    if (filter.type) {
      whereClause.push(eq(challenges.type, filter.type));
    }
  }

  const data = await db.query.challenges.findMany({
    where: whereClause.length > 0 ? and(...whereClause) : undefined,
  });

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const data = await db.insert(challenges).values({
    ...body,
  }).returning();

  return NextResponse.json(data[0]);
};
