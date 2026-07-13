import { z } from "zod";
import { exerciseSchema } from "./exercises";

/**
 * Seed shapes (what /curriculum authors) and the pack envelope
 * (what GET /api/v1/subjects/:id/pack serves). The pack is assembled
 * by the backend from DB rows, but its shape is validated here so the
 * seed → DB → pack round trip can't drift.
 */

export const lessonSeedSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  primarySkillId: z.string().min(1),
  xpReward: z.number().int().positive().default(10),
  exercises: z.array(exerciseSchema).min(3).max(12),
});
export type LessonSeed = z.infer<typeof lessonSeedSchema>;

export const unitSeedSchema = z.object({
  id: z.string().min(1),
  bandId: z.string().min(1),
  title: z.string().min(1),
  icon: z.string().min(1),
  lessons: z.array(lessonSeedSchema).min(1),
});
export type UnitSeed = z.infer<typeof unitSeedSchema>;

export const bandSeedSchema = z.object({
  id: z.string().min(1),
  bandNumber: z.number().int().min(1).max(8),
  title: z.string().min(1),
  description: z.string().min(1),
});
export type BandSeed = z.infer<typeof bandSeedSchema>;

export const skillSeedSchema = z.object({
  id: z.string().min(1),
  bandId: z.string().min(1),
  title: z.string().min(1),
});
export type SkillSeed = z.infer<typeof skillSeedSchema>;

export const subjectSeedSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  sortOrder: z.number().int(),
  bands: z.array(bandSeedSchema).min(1),
  skills: z.array(skillSeedSchema),
  /** Order within this array is the path order (sortOrder derives from index). */
  units: z.array(unitSeedSchema),
  /** exerciseIds must exist within this subject's units. ~3 per band. */
  placementProbes: z.array(
    z.object({ bandNumber: z.number().int().min(1).max(8), exerciseIds: z.array(z.string()).min(1) }),
  ),
});
export type SubjectSeed = z.infer<typeof subjectSeedSchema>;

/** Wire format the app downloads and caches. */
export const subjectPackSchema = z.object({
  subjectId: z.string(),
  version: z.number().int().nonnegative(),
  generatedAt: z.string(),
  bands: z.array(bandSeedSchema),
  skills: z.array(skillSeedSchema.extend({ sortOrder: z.number().int() })),
  units: z.array(
    z.object({
      id: z.string(),
      bandId: z.string(),
      title: z.string(),
      icon: z.string(),
      sortOrder: z.number().int(),
      lessons: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          primarySkillId: z.string(),
          sortOrder: z.number().int(),
          xpReward: z.number().int(),
          exercises: z.array(exerciseSchema),
        }),
      ),
    }),
  ),
  placementProbes: z.array(
    z.object({ bandNumber: z.number().int(), exerciseIds: z.array(z.string()) }),
  ),
});
export type SubjectPack = z.infer<typeof subjectPackSchema>;

/** Types that a kid resolves in exactly one tap — the only ones eligible as placement probes. */
const SINGLE_TAP_TYPES = new Set(["multipleChoiceImage", "countObjects", "listenAndPick", "fillBlankWordBank"]);
/** Types that carry accuracy weight (everything except always-correct practice like tapTheSounds). */
const GRADED_TYPES = new Set([
  "multipleChoiceImage",
  "countObjects",
  "listenAndPick",
  "fillBlankWordBank",
  "tapMatchPairs",
  "ordering",
]);

/** Validates a seed's internal references (skill/band/probe IDs). Throws with a readable message. */
export function validateSubjectSeed(seed: SubjectSeed): SubjectSeed {
  const parsed = subjectSeedSchema.parse(seed);
  const bandIds = new Set(parsed.bands.map((b) => b.id));
  const skillIds = new Set(parsed.skills.map((s) => s.id));
  const exerciseIds = new Set(
    parsed.units.flatMap((u) => u.lessons.flatMap((l) => l.exercises.map((e) => e.id))),
  );
  const exerciseTypeById = new Map(
    parsed.units.flatMap((u) => u.lessons.flatMap((l) => l.exercises.map((e) => [e.id, e.type] as const))),
  );
  const problems: string[] = [];
  for (const skill of parsed.skills) {
    if (!bandIds.has(skill.bandId)) problems.push(`skill ${skill.id}: unknown band ${skill.bandId}`);
  }
  for (const unit of parsed.units) {
    if (!bandIds.has(unit.bandId)) problems.push(`unit ${unit.id}: unknown band ${unit.bandId}`);
    for (const lesson of unit.lessons) {
      if (!skillIds.has(lesson.primarySkillId))
        problems.push(`lesson ${lesson.id}: unknown skill ${lesson.primarySkillId}`);
      // tapTheSounds is always warm-correct, so it carries no accuracy weight
      // (see AUTHORING.md). A lesson that leans on it must still have real
      // graded work, or completing it grants perfect mastery for free.
      if (lesson.exercises.some((e) => e.type === "tapTheSounds")) {
        const graded = lesson.exercises.filter((e) => GRADED_TYPES.has(e.type)).length;
        if (graded < 2)
          problems.push(`lesson ${lesson.id}: has tapTheSounds but only ${graded} graded exercises (need ≥2)`);
      }
    }
  }
  for (const probe of parsed.placementProbes) {
    for (const id of probe.exerciseIds) {
      if (!exerciseIds.has(id)) {
        problems.push(`placement probe band ${probe.bandNumber}: unknown exercise ${id}`);
      } else if (!SINGLE_TAP_TYPES.has(exerciseTypeById.get(id)!)) {
        // Probes must be answerable in one tap — a multi-tap type can't cleanly
        // signal a right/wrong placement decision.
        problems.push(
          `placement probe band ${probe.bandNumber}: ${id} is ${exerciseTypeById.get(id)}, not single-tap`,
        );
      }
    }
  }
  const allIds = [
    ...parsed.units.map((u) => u.id),
    ...parsed.units.flatMap((u) => u.lessons.map((l) => l.id)),
    ...exerciseIds,
  ];
  const dupes = allIds.filter((id, i) => allIds.indexOf(id) !== i);
  if (dupes.length > 0) problems.push(`duplicate ids: ${[...new Set(dupes)].join(", ")}`);
  if (problems.length > 0) {
    throw new Error(`Invalid seed for subject ${parsed.id}:\n  ${problems.join("\n  ")}`);
  }
  return parsed;
}
