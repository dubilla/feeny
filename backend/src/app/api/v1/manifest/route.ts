import { asc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { contentVersions, subjects } from "@/db/schema";

export const dynamic = "force-dynamic";

/** GET /api/v1/manifest — subject list + content versions, the app's sync entry point. */
export async function GET() {
  const rows = await db
    .select({
      id: subjects.id,
      title: subjects.title,
      sortOrder: subjects.sortOrder,
      version: contentVersions.version,
    })
    .from(subjects)
    .innerJoin(contentVersions, eq(contentVersions.subjectId, subjects.id))
    .orderBy(asc(subjects.sortOrder));

  return NextResponse.json({ subjects: rows });
}
