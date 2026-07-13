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

| type | interaction | notes |
|---|---|---|
| `multipleChoiceImage` | tap 1 of 2–4 large cards (visual and/or label) | the workhorse |
| `countObjects` | scene of `count` × `object`, answer via `choices` number row | `count` ≤ 20 |
| `tapMatchPairs` | tap a left tile, then its right partner | 2–3 pairs; correct = zero mismatches |
| `listenAndPick` | audio-only stimulus, tap 1 of 2–4 cards | `spokenText` required; no giveaway text |
| `ordering` | tap tiles in sequence to fill slots | 3–5 items; correct = zero wrong taps |
| `fillBlankWordBank` | tap a chip to fill the single `___` blank | template has exactly one `___` |
| `tapTheSounds` | hear the word, tap boxes left→right (one per sound) to build & blend it | kinesthetic practice: always warm-correct, no accuracy weight, never a placement probe; `sounds[].grapheme` joined must equal `word` (digraph = one tile); no per-phoneme audio (TTS mangles isolated sounds) |

## Difficulty bands

8 ordered bands per subject spanning ~K–3, named playfully (never shown as grades). Placement + performance decide a kid's band — age is never an input.
