# Feeny content spec

The exercise JSON contract between the backend and the iPad app.

- **Source of truth:** zod schemas in `curriculum/src/schema/exercises.ts` (+ `pack.ts` for the pack envelope).
- **Swift mirror:** `ios/Feeny/Core/Content/ExercisePayload.swift`.
- **Contract tests:** `pnpm export:fixtures` writes one canonical JSON per exercise type to `curriculum/fixtures/exercises/`. The iOS test target bundles these files and must decode every one. **Any schema change must update fixtures and the Swift mirror in the same PR.**

## Shape

An exercise on the wire:

```json
{ "id": "math-e-add10-a1-03", "type": "multipleChoiceImage", "payload": { … } }
```

- `id` — stable slug, never reused with a different meaning (on-device progress references it).
- `type` — discriminator. Unknown types must be decoded as `.unsupported` by the app and skipped by the lesson player (old app + new pack must never crash).
- `payload` — per-type body, see zod schemas.

## Shared primitives

- `prompt: { text, spokenText? }` — `spokenText` (default: `text`) is read aloud via TTS; kids aged 5 may not read `text`.
- `visual: { kind: "emoji" | "asset", value }` — no remote images in v1; packs stay pure JSON and offline-safe.

## Exercise types (v1)

| type | interaction |
|---|---|
| `multipleChoiceImage` | tap 1 of 2–4 large cards (visual and/or label) |
| `countObjects` | scene of `count` × `object`, answer via `choices` number row |

Slice 2 adds: `tapMatchPairs`, `listenAndPick`, `ordering`, `fillBlankWordBank`.

## Difficulty bands

8 ordered bands per subject spanning ~K–3, named playfully (never shown as grades). Placement + performance decide a kid's band — age is never an input.
