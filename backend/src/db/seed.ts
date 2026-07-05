import { createHash } from "node:crypto";
import { eq } from "drizzle-orm";
import { subjects as subjectSeeds } from "@feeny/curriculum";
import { db } from "./index";
import {
  bands,
  contentVersions,
  exercises,
  lessons,
  placementProbes,
  skills,
  subjects,
  units,
} from "./schema";

/**
 * Idempotent full-replace seed: content tables are rebuilt from /curriculum
 * on every run; content_versions bumps a subject's version only when its
 * content hash actually changed, so re-seeding identical content never
 * forces app clients to re-download.
 */
async function seed() {
  const hashes = new Map(
    subjectSeeds.map((s) => [s.id, createHash("sha256").update(JSON.stringify(s)).digest("hex")]),
  );

  await db.transaction(async (tx) => {
    // Delete in FK dependency order.
    await tx.delete(placementProbes);
    await tx.delete(exercises);
    await tx.delete(lessons);
    await tx.delete(units);
    await tx.delete(skills);
    await tx.delete(bands);
    await tx.delete(subjects);

    for (const seed of subjectSeeds) {
      await tx.insert(subjects).values({ id: seed.id, title: seed.title, sortOrder: seed.sortOrder });

      await tx.insert(bands).values(
        seed.bands.map((b) => ({
          id: b.id,
          subjectId: seed.id,
          bandNumber: b.bandNumber,
          title: b.title,
          description: b.description,
        })),
      );

      if (seed.skills.length > 0) {
        await tx.insert(skills).values(
          seed.skills.map((s, i) => ({
            id: s.id,
            subjectId: seed.id,
            bandId: s.bandId,
            title: s.title,
            sortOrder: i,
          })),
        );
      }

      for (const [unitIndex, unit] of seed.units.entries()) {
        await tx.insert(units).values({
          id: unit.id,
          subjectId: seed.id,
          bandId: unit.bandId,
          title: unit.title,
          icon: unit.icon,
          sortOrder: unitIndex,
        });
        for (const [lessonIndex, lesson] of unit.lessons.entries()) {
          await tx.insert(lessons).values({
            id: lesson.id,
            unitId: unit.id,
            primarySkillId: lesson.primarySkillId,
            title: lesson.title,
            sortOrder: lessonIndex,
            xpReward: lesson.xpReward,
          });
          await tx.insert(exercises).values(
            lesson.exercises.map((e, i) => ({
              id: e.id,
              lessonId: lesson.id,
              sortOrder: i,
              type: e.type,
              payload: e.payload,
            })),
          );
        }
      }

      const bandIdByNumber = new Map(seed.bands.map((b) => [b.bandNumber, b.id]));
      const probeRows = seed.placementProbes.flatMap((probe) =>
        probe.exerciseIds.map((exerciseId, i) => ({
          subjectId: seed.id,
          bandId: bandIdByNumber.get(probe.bandNumber)!,
          exerciseId,
          sortOrder: i,
        })),
      );
      if (probeRows.length > 0) {
        await tx.insert(placementProbes).values(probeRows);
      }

      const hash = hashes.get(seed.id)!;
      const existing = await tx
        .select()
        .from(contentVersions)
        .where(eq(contentVersions.subjectId, seed.id));
      if (existing.length === 0) {
        await tx.insert(contentVersions).values({ subjectId: seed.id, version: 1, contentHash: hash });
        console.log(`${seed.id}: v1 (new)`);
      } else if (existing[0].contentHash !== hash) {
        const next = existing[0].version + 1;
        await tx
          .update(contentVersions)
          .set({ version: next, contentHash: hash, publishedAt: new Date() })
          .where(eq(contentVersions.subjectId, seed.id));
        console.log(`${seed.id}: v${next} (content changed)`);
      } else {
        console.log(`${seed.id}: v${existing[0].version} (unchanged)`);
      }
    }
  });

  const counts = subjectSeeds.map((s) => {
    const lessonCount = s.units.reduce((n, u) => n + u.lessons.length, 0);
    const exerciseCount = s.units.reduce(
      (n, u) => n + u.lessons.reduce((m, l) => m + l.exercises.length, 0),
      0,
    );
    return `${s.id}: ${s.units.length} units, ${lessonCount} lessons, ${exerciseCount} exercises`;
  });
  console.log(`Seed complete — ${counts.join(" · ")}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
