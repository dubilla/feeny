# Feeny curriculum authoring guide

Audience: ages 5–9, placed by ability band (1–8), NOT age. Kids in bands 1–2 usually cannot read — their exercises must be fully solvable from the spoken prompt + visuals alone.

## File format

One TypeScript file per unit at `curriculum/src/math/band{N}/unit-<slug>.ts`, exporting a single named `UnitSeed` const. Follow the exemplar: `curriculum/src/math/band3/unit-addition-within-10-a.ts`.

## ID conventions (stable slugs, never reused)

- unit: `math-u-<slug>` (e.g. `math-u-count5`)
- lesson: `math-l-<slug>-<n>` (n = 1..3)
- exercise: `math-e-<slug>-<lesson n>-<01..08>`
- option/pair/item/chip ids inside a payload: short local ids (`a`, `b`, `c`, `p1`…) — they only need to be unique within the payload.

## Structure

- 3 lessons per unit, 8 exercises per lesson, `xpReward: 10`.
- Difficulty ramps lesson 1 → 3 (introduce → practice → stretch).
- `primarySkillId` per lesson comes from the skeleton you were given.

## Exercise types & when to use them

| type | use for | notes |
|---|---|---|
| `countObjects` | counting, quantity | `count` ≤ 20; `choices` 3 numbers incl. correct, distractors ±1/±2 |
| `multipleChoiceImage` | almost anything | 2–4 options; use emoji-group visuals (e.g. `"🐸🐸🐸"`) for quantities; numeral labels OK in all bands |
| `listenAndPick` | number/shape recognition by ear | spoken text IS the stimulus ("Tap the number five!"); `prompt.text` stays short like "Listen!"; options must NOT give the answer away in text |
| `tapMatchPairs` | quantity↔numeral, shape↔object | 2–3 pairs max; left/right tile faces = visual and/or label |
| `ordering` | number order, size sequence | 3–5 items; `correctOrder` is a permutation of item ids; numeral labels fine |
| `fillBlankWordBank` | equations with a missing part | bands 3+; `template` has exactly one `___` (e.g. `"3 + ___ = 5"`); 3–4 numeric chips |

## Per-lesson type mix (rough)

3–4 workhorse (countObjects / multipleChoiceImage), 1–2 listenAndPick, 1 tapMatchPairs or ordering, plus fillBlankWordBank in bands 3+. Vary the mix between lessons; never 8 of the same type.

## Quality bar

- `spokenText` on every prompt: warm, playful, a complete sentence, reads the problem aloud for a non-reader ("Three bees are on a flower. Two more buzz over! How many bees now?").
- Rotate emoji subjects (animals, food, vehicles, nature, space) — no two consecutive exercises reuse the same emoji.
- Distribute correct answers evenly across option positions (never mostly the middle).
- Distractors must be plausible near-misses, not random.
- Band 1–2: no reading required beyond single numerals. Band 3+: short words OK ("more", "less") but the spoken prompt always carries the meaning.
- Math must be correct. Check every sum, difference, count, and sequence twice.

## Spoken-prompt rules (TTS is the narrator — write for its failure modes)

- **Never state the answer.** A `countObjects` prompt must not contain the count it asks for ("Two fluffy chicks… How many chicks?" hands the kid the answer). Same for any prompt: no number word or anchor word that equals or names the correct option.
- **No raw phoneme strings** ("k-k-k", "sss", "buh", "sh-sh-sh"): TTS reads them as letter names ("kay kay kay") or gibberish. Anchor sounds to exemplar words instead — "Which letter starts the word kite?" / "Kangaroo starts with K! Which picture starts like kangaroo?" The exemplar must start with the same **letter** as the target (not just the same sound) and must not name any option's emoji. Digraphs are spelled as letters: "S-H", "C-H".
- **One register per utterance.** A story exercise speaks the story; a symbolic exercise speaks the equation. Never both ("Ten birds sit on a fence. Two fly away. Ten take away two." — pick one).
- **Short.** One story sentence plus the question. The prompt auto-plays on every exercise and replays on stall; flourish that's fun once is noise by lesson three.

## Validate before you finish

From `curriculum/`:

```bash
npx tsx -e "import { unitSeedSchema } from './src/schema/pack'; import { myExport } from './src/math/bandN/unit-my-slug'; unitSeedSchema.parse(myExport); console.log('valid')"
```

Run this for every unit you wrote. Fix all zod errors.
