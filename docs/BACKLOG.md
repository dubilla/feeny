# Feeny — Product Backlog

The non-design backlog: curriculum, adaptivity, and platform work. (Visual
identity work lives in `docs/DESIGN_BACKLOG.md`; the two proceed in
parallel.) Every item is a vertical slice — it ships only when a kid or
parent experiences something new.

**Content-slice ship ritual** (applies to every curriculum slice below):
author → `unitSeedSchema.parse` green → `pnpm seed` local → fixture decode +
full suite → curate/verify placement probes → Dan runs the prod seed →
`pnpm export:packs` against prod → commit bundled packs.

---

## Initiative 1: Weave Fundations into the reading path

**Why now:** Feeny's reading bands teach generic phonics in a plausible
order. Most K–3 classrooms (including ours) run Wilson **Fundations®** — an
Orton-Gillingham program with a very specific spine: letter-keyword-sound
anchors → CVC with phoneme tapping → digraphs & bonus letters → glued
sounds → blends → syllable types, plus a parallel "trick words" track of
high-frequency irregulars. When the app's sequence matches the classroom's,
each reinforces the other; when it fights the classroom, parents notice.

**Guardrail (IP):** Fundations is Wilson Language Training's proprietary
program. We align to the *publicly documented scope & sequence* and to
general OG practice. We never copy Wilson materials — not their card art,
their exact keyword set, or their trade dress — and the name never appears
in kid-facing copy. Parent-facing copy says the honest generic thing:
"follows the phonics sequence used in most classrooms (Orton-Gillingham
style)."

### [ ] F1: Re-sequence early reading onto the OG spine

**User Value**: A kid mid-way through Fundations K or 1 places into Feeny
and lands on the *same skill family they're doing at school this month* —
the app feels like it knows their classroom.

**Work**: Write `curriculum/FUNDATIONS_MAP.md` (level/unit → band/skill
alignment, gaps called out); re-sequence/re-skill bands 1–3 reading units to
the spine (letter-sound anchors → CVC → digraphs → glued sounds → blends);
fill the 2–3 worst gap units; re-curate reading placement probes so probe
order matches the new spine; ship ritual.

**Definition of Done**: The band 1–3 reading path reads in Fundations order
end-to-end; placement lands a mid-K kid on letter-sounds/CVC, a mid-1 kid on
digraphs/glued sounds; map doc exists for every later slice to cite.

### [ ] F2: Letter-keyword-sound anchors

**User Value**: The core OG move — "a, apple, /ă/" — becomes playable:
every letter gets an anchor unit where the kid hears letter → keyword →
sound and picks/matches by ear, matching the daily card drill from class
(with our own keyword set, ready for owned art in design slice 13).

**Work**: Define Feeny's 26-keyword set (our words, kid-illustratable,
stimuli-emoji-fallback friendly); author anchor units across bands 1–2
using `listenAndPick`/`multipleChoiceImage` with spoken prompts that model
the three-part drill ("A says /ă/, like apple"); TTS-speakability pass per
AUTHORING.md rules (no bare phonemes TTS mangles — spell sounds in words);
ship ritual.

**Definition of Done**: All 26 letters have anchor coverage; every prompt
passes the spoken-prompt rules; a pre-reader can solve every anchor exercise
by ear alone.

### [ ] F3: Digraphs, bonus letters, and glued sounds

**User Value**: The distinctive Level-1 material — wh/ch/sh/th/ck digraphs,
bonus letters (ff/ll/ss), and glued sounds (all/am/an, -ang/-ing/-ong/-ung,
-ank/-ink/-onk/-unk) — exists as its own named units on the path, not
smeared into generic "word families."

**Work**: Author digraph units (hear-it/find-it via `listenAndPick`,
build-it via `fillBlankWordBank`), bonus-letter and glued-sound units
(substitution-tested per the fill-blank rules); place them per the F1 map;
ship ritual.

**Definition of Done**: Each digraph and glued-sound family is a nameable
unit a parent can point at; all fill-blanks substitution-tested; band 2–3
placement probes updated.

### [ ] F4: Trick words track

**User Value**: The words kids are drilled on weekly ("the", "of", "said" …)
show up in Feeny as a recurring track with spaced review — the app's
Power-Up Practice starts rehearsing exactly what school rehearses.

**Work**: First ~40 trick words sequenced per the F1 map as skills tagged
for review (`trick-words` skill family feeding the existing review-lesson
engine); recognition exercises by ear and by sight (`listenAndPick`,
`multipleChoiceImage` with word stimuli); ship ritual.

**Definition of Done**: Trick-word units live in bands 2–4; a kid who
misses trick words sees them resurface in Power-Up Practice within a
session or two.

### [ ] F5: Tap-the-sounds — phoneme segmentation exercise type

**User Value**: Fundations' signature physical move — tapping out the
sounds in a word — becomes a Feeny exercise: TTS says "cat," the kid taps
once per sound, the word builds as they tap. The one piece of the daily
drill no current exercise type can express.

**Work**: New exercise type end-to-end under the **contract rule** (one
commit: zod schema + Swift mirror + `pnpm export:fixtures` +
`docs/CONTENT_SPEC.md`; old apps skip via `.unsupported`); kid-UX per
Theme rules (≥88pt tap targets, spoken-first, warm retry); author ≥6
segmentation lessons across bands 1–3; UI-test coverage in the rotating-tap
answer loop; ship ritual.

**Definition of Done**: A pre-reader can complete a segmentation lesson by
ear; fixtures decode on old + new app posture; the type appears in
placement probes only if single-tap-solvable (else excluded by rule).

*Sequencing: F1 first (pure re-sequencing, highest leverage, no new
surface), F2–F4 in any order after it, F5 last (only contract change —
riskiest).*

---

## Later / unscoped

- Math spine alignment pass (same treatment once a math curriculum anchor
  is chosen — Bridges? Eureka? TBD by what school uses).
- Parent progress email/weekly digest (needs backend send infra).
- iPhone layout; seasonal events; collection sharing-poster (deferred from
  the design relaunch).
