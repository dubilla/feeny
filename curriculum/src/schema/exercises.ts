import { z } from "zod";

/**
 * Exercise payload contract, shared with the iOS app.
 * The Swift mirror lives in ios/Feeny/Core/Content/ExercisePayload.swift.
 * Any change here must ship with updated fixtures (pnpm export:fixtures) —
 * the iOS test suite decodes every fixture, so drift fails the build.
 */

/** Emoji or bundled-asset reference. No remote images in v1 (offline-first). */
export const visualSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("emoji"), value: z.string().min(1) }),
  z.object({ kind: z.literal("asset"), value: z.string().min(1) }),
]);
export type Visual = z.infer<typeof visualSchema>;

/** spokenText is what TTS reads (defaults to text). Kids aged 5 may not read `text`. */
export const promptSchema = z.object({
  text: z.string().min(1),
  spokenText: z.string().min(1).optional(),
});
export type Prompt = z.infer<typeof promptSchema>;

const choiceOptionSchema = z
  .object({
    id: z.string().min(1),
    visual: visualSchema.optional(),
    label: z.string().optional(),
  })
  .refine((o) => o.visual !== undefined || (o.label ?? "").length > 0, {
    message: "option needs a visual or a label",
  });
export type ChoiceOption = z.infer<typeof choiceOptionSchema>;

export const multipleChoiceImagePayloadSchema = z
  .object({
    prompt: promptSchema,
    options: z.array(choiceOptionSchema).min(2).max(4),
    correctOptionId: z.string().min(1),
  })
  .refine((p) => p.options.some((o) => o.id === p.correctOptionId), {
    message: "correctOptionId must reference an option",
  });

export const countObjectsPayloadSchema = z
  .object({
    prompt: promptSchema,
    /** The object rendered `count` times as a tappable scene. */
    object: visualSchema,
    count: z.number().int().min(1).max(20),
    /** Answer choices shown as a number row; must include `count`. */
    choices: z.array(z.number().int().min(0).max(20)).min(2).max(4),
  })
  .refine((p) => p.choices.includes(p.count), {
    message: "choices must include the correct count",
  });

export const exerciseSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string().min(1),
    type: z.literal("multipleChoiceImage"),
    payload: multipleChoiceImagePayloadSchema,
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal("countObjects"),
    payload: countObjectsPayloadSchema,
  }),
]);
export type Exercise = z.infer<typeof exerciseSchema>;
export type ExerciseType = Exercise["type"];
