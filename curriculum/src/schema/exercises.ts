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

/** A tile face: visual and/or short label. */
const tileFaceSchema = z
  .object({
    visual: visualSchema.optional(),
    label: z.string().optional(),
  })
  .refine((t) => t.visual !== undefined || (t.label ?? "").length > 0, {
    message: "tile needs a visual or a label",
  });
export type TileFace = z.infer<typeof tileFaceSchema>;

/** Tap a left tile then its right partner. 2–3 pairs (≤6 tiles for young kids). */
export const tapMatchPairsPayloadSchema = z.object({
  prompt: promptSchema,
  pairs: z
    .array(z.object({ id: z.string().min(1), left: tileFaceSchema, right: tileFaceSchema }))
    .min(2)
    .max(3),
});

/**
 * Audio-first: the spoken text IS the stimulus ("Tap the word cat"), so
 * spokenText is required and the UI shows no meaningful prompt text.
 */
export const listenAndPickPayloadSchema = z
  .object({
    prompt: promptSchema.extend({ spokenText: z.string().min(1) }),
    options: z.array(choiceOptionSchema).min(2).max(4),
    correctOptionId: z.string().min(1),
  })
  .refine((p) => p.options.some((o) => o.id === p.correctOptionId), {
    message: "correctOptionId must reference an option",
  });

/** Tap tiles in sequence to fill ordered slots. */
export const orderingPayloadSchema = z
  .object({
    prompt: promptSchema,
    items: z
      .array(z.object({ id: z.string().min(1), visual: visualSchema.optional(), label: z.string().optional() }))
      .min(3)
      .max(5),
    correctOrder: z.array(z.string().min(1)).min(3).max(5),
  })
  .refine(
    (p) =>
      p.correctOrder.length === p.items.length &&
      new Set(p.correctOrder).size === p.items.length &&
      p.items.every((i) => p.correctOrder.includes(i.id)),
    { message: "correctOrder must be a permutation of item ids" },
  );

/** Sentence/equation with one blank; tap a chip from the bank to fill it. */
export const fillBlankWordBankPayloadSchema = z
  .object({
    prompt: promptSchema,
    /** Display template containing exactly one `___` blank. */
    template: z.string().refine((t) => t.split("___").length === 2, {
      message: "template must contain exactly one ___ blank",
    }),
    bank: z.array(z.object({ id: z.string().min(1), label: z.string().min(1) })).min(2).max(4),
    correctChipId: z.string().min(1),
  })
  .refine((p) => p.bank.some((c) => c.id === p.correctChipId), {
    message: "correctChipId must reference a bank chip",
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
  z.object({
    id: z.string().min(1),
    type: z.literal("tapMatchPairs"),
    payload: tapMatchPairsPayloadSchema,
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal("listenAndPick"),
    payload: listenAndPickPayloadSchema,
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal("ordering"),
    payload: orderingPayloadSchema,
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal("fillBlankWordBank"),
    payload: fillBlankWordBankPayloadSchema,
  }),
]);
export type Exercise = z.infer<typeof exerciseSchema>;
export type ExerciseType = Exercise["type"];
