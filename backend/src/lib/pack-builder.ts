import { asc, eq } from "drizzle-orm";
import { subjectPackSchema, type SubjectPack } from "@feeny/curriculum/schema";
import { db } from "@/db";
import {
  bands,
  contentVersions,
  exercises,
  lessons,
  placementProbes,
  skills,
  units,
} from "@/db/schema";

/** Assembles the full downloadable pack for a subject. Returns null if the subject doesn't exist. */
export async function buildSubjectPack(subjectId: string): Promise<SubjectPack | null> {
  const versionRows = await db
    .select()
    .from(contentVersions)
    .where(eq(contentVersions.subjectId, subjectId));
  if (versionRows.length === 0) return null;

  const [bandRows, skillRows, unitRows, probeRows] = await Promise.all([
    db.select().from(bands).where(eq(bands.subjectId, subjectId)).orderBy(asc(bands.bandNumber)),
    db.select().from(skills).where(eq(skills.subjectId, subjectId)).orderBy(asc(skills.sortOrder)),
    db.select().from(units).where(eq(units.subjectId, subjectId)).orderBy(asc(units.sortOrder)),
    db
      .select()
      .from(placementProbes)
      .where(eq(placementProbes.subjectId, subjectId))
      .orderBy(asc(placementProbes.sortOrder)),
  ]);

  const packUnits = [];
  for (const unit of unitRows) {
    const lessonRows = await db
      .select()
      .from(lessons)
      .where(eq(lessons.unitId, unit.id))
      .orderBy(asc(lessons.sortOrder));
    const packLessons = [];
    for (const lesson of lessonRows) {
      const exerciseRows = await db
        .select()
        .from(exercises)
        .where(eq(exercises.lessonId, lesson.id))
        .orderBy(asc(exercises.sortOrder));
      packLessons.push({
        id: lesson.id,
        title: lesson.title,
        primarySkillId: lesson.primarySkillId,
        sortOrder: lesson.sortOrder,
        xpReward: lesson.xpReward,
        exercises: exerciseRows.map((e) => ({ id: e.id, type: e.type, payload: e.payload })),
      });
    }
    packUnits.push({
      id: unit.id,
      bandId: unit.bandId,
      title: unit.title,
      icon: unit.icon,
      sortOrder: unit.sortOrder,
      lessons: packLessons,
    });
  }

  const bandNumberById = new Map(bandRows.map((b) => [b.id, b.bandNumber]));
  const probesByBand = new Map<number, string[]>();
  for (const probe of probeRows) {
    const bandNumber = bandNumberById.get(probe.bandId)!;
    const list = probesByBand.get(bandNumber) ?? [];
    list.push(probe.exerciseId);
    probesByBand.set(bandNumber, list);
  }

  // Parse (not just cast) so a bad DB payload fails here, not on a kid's iPad.
  return subjectPackSchema.parse({
    subjectId,
    version: versionRows[0].version,
    generatedAt: versionRows[0].publishedAt.toISOString(),
    bands: bandRows.map((b) => ({
      id: b.id,
      bandNumber: b.bandNumber,
      title: b.title,
      description: b.description,
    })),
    skills: skillRows.map((s) => ({ id: s.id, bandId: s.bandId, title: s.title, sortOrder: s.sortOrder })),
    units: packUnits,
    placementProbes: [...probesByBand.entries()]
      .sort(([a], [b]) => a - b)
      .map(([bandNumber, exerciseIds]) => ({ bandNumber, exerciseIds })),
  });
}
