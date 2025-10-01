import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

export const GET = async () => {

    const data = await db.query.courses.findMany();

    return NextResponse.json(data);
}

export const POST = async (req: Request) => {


    const body = await req.json();

    const data = await db.insert(courses).values({
        ...body,
    }).returning();

    return NextResponse.json(data[0]);
};