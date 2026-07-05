import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * Content tables use human-readable slug PKs (e.g. "math-l-add10-a1").
 * On-device progress records reference these IDs, so slugs are never
 * reused with a different meaning — only retired.
 */

export const subjects = pgTable("subjects", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const bands = pgTable("bands", {
  id: text("id").primaryKey(),
  subjectId: text("subject_id").notNull().references(() => subjects.id),
  bandNumber: integer("band_number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const skills = pgTable("skills", {
  id: text("id").primaryKey(),
  subjectId: text("subject_id").notNull().references(() => subjects.id),
  bandId: text("band_id").notNull().references(() => bands.id),
  title: text("title").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const units = pgTable("units", {
  id: text("id").primaryKey(),
  subjectId: text("subject_id").notNull().references(() => subjects.id),
  bandId: text("band_id").notNull().references(() => bands.id),
  title: text("title").notNull(),
  icon: text("icon").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const lessons = pgTable("lessons", {
  id: text("id").primaryKey(),
  unitId: text("unit_id").notNull().references(() => units.id),
  primarySkillId: text("primary_skill_id").notNull().references(() => skills.id),
  title: text("title").notNull(),
  sortOrder: integer("sort_order").notNull(),
  xpReward: integer("xp_reward").notNull(),
});

export const exercises = pgTable("exercises", {
  id: text("id").primaryKey(),
  lessonId: text("lesson_id").notNull().references(() => lessons.id),
  sortOrder: integer("sort_order").notNull(),
  type: text("type").notNull(),
  /** Validated against the zod schemas in @feeny/curriculum before insert; opaque here. */
  payload: jsonb("payload").notNull(),
});

export const placementProbes = pgTable("placement_probes", {
  id: serial("id").primaryKey(),
  subjectId: text("subject_id").notNull().references(() => subjects.id),
  bandId: text("band_id").notNull().references(() => bands.id),
  exerciseId: text("exercise_id").notNull().references(() => exercises.id),
  sortOrder: integer("sort_order").notNull(),
});

/** Survives seed truncation; version bumps only when a subject's content hash changes. */
export const contentVersions = pgTable("content_versions", {
  subjectId: text("subject_id").primaryKey(),
  version: integer("version").notNull(),
  contentHash: text("content_hash").notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull().defaultNow(),
});
