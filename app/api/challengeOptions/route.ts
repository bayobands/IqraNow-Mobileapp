import { NextResponse } from "next/server";
import { and, eq, ilike, inArray } from "drizzle-orm";
import db from "@/db/drizzle";
import {
  challengeOptions,
  challenges,
  lessons,
  units,
  courses,
} from "@/db/schema";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const filterParam = searchParams.get("filter");

  let whereClause = [];

  if (filterParam) {
    const filter = JSON.parse(filterParam);

    if (filter.text) {
      whereClause.push(ilike(challengeOptions.text, `%${filter.text}%`));
    }

    if (filter.challengeId) {
      whereClause.push(eq(challengeOptions.challengeId, Number(filter.challengeId)));
    }

    // Filter by lessonId → get challenges
    if (filter.lessonId) {
      const challengeList = await db
        .select({ id: challenges.id })
        .from(challenges)
        .where(eq(challenges.lessonId, Number(filter.lessonId)));

      const challengeIds = challengeList.map(c => c.id);
      if (challengeIds.length === 0) return NextResponse.json([]);
      whereClause.push(inArray(challengeOptions.challengeId, challengeIds));
    }

    // Filter by unitId → get lessons → challenges
    if (filter.unitId) {
      const lessonList = await db
        .select({ id: lessons.id })
        .from(lessons)
        .where(eq(lessons.unitId, Number(filter.unitId)));

      const lessonIds = lessonList.map(l => l.id);
      if (lessonIds.length === 0) return NextResponse.json([]);

      const challengeList = await db
        .select({ id: challenges.id })
        .from(challenges)
        .where(inArray(challenges.lessonId, lessonIds));

      const challengeIds = challengeList.map(c => c.id);
      if (challengeIds.length === 0) return NextResponse.json([]);

      whereClause.push(inArray(challengeOptions.challengeId, challengeIds));
    }

    // Filter by courseId → get units → lessons → challenges
    if (filter.courseId) {
      const unitList = await db
        .select({ id: units.id })
        .from(units)
        .where(eq(units.courseId, Number(filter.courseId)));

      const unitIds = unitList.map(u => u.id);
      if (unitIds.length === 0) return NextResponse.json([]);

      const lessonList = await db
        .select({ id: lessons.id })
        .from(lessons)
        .where(inArray(lessons.unitId, unitIds));

      const lessonIds = lessonList.map(l => l.id);
      if (lessonIds.length === 0) return NextResponse.json([]);

      const challengeList = await db
        .select({ id: challenges.id })
        .from(challenges)
        .where(inArray(challenges.lessonId, lessonIds));

      const challengeIds = challengeList.map(c => c.id);
      if (challengeIds.length === 0) return NextResponse.json([]);

      whereClause.push(inArray(challengeOptions.challengeId, challengeIds));
    }
  }

  const data = await db.query.challengeOptions.findMany({
    where: whereClause.length ? and(...whereClause) : undefined,
  });

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const inserted = await db
    .insert(challengeOptions)
    .values({ ...body })
    .returning();

  return NextResponse.json(inserted[0]);
};
