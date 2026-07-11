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

## Bugs (top priority — before new initiative work)

### [x] B1: Placement result doesn't move the kid's starting spot — FIXED (2026-07-11)

**Observed (Dan, 2026-07-11, real device):** Finish the Warm-Up Adventure —
the arrival screen says "Your adventure starts in <band>!" — but the skill
map still starts the kid at the very first unit of band 1. The celebrated
placement has no visible effect on the path.

**Expected:**
- The *current* (START) node after placement is the first unit of the band
  the arrival screen named — the screen and the map must never disagree.
- Every unit *below* the placement point is **unlocked but not completed**
  (believed-right design, confirm during fix): kids can wander back to
  easier material by choice, nothing shows a checkmark they didn't earn,
  and no "completed" XP/egg credit is granted retroactively.
- Mastery seeding below placement (`SkillMastery.seededByPlacement`,
  `assumedMasteryBelowPlacement`) keeps working as-is — this bug is about
  the path pointer/locks, not the mastery model.

**Fix shape (suspected):** `ProgressEngine.unitStates` derives states from
`placementBandNumber` + completions — audit why the current pointer lands at
band 1 (likely: "current = first not-completed unit" ignores the placement
band, or the map's scroll-to-current works but states don't). States are
derived at render time, so a pure engine fix should also retroactively heal
already-affected profiles — verify with an existing mis-placed profile, not
just a fresh one.

**Definition of Done:** Place into band N (N>1) → map opens with START on
band N's first unit, bands 1..N-1 tappable-but-unchecked; engine unit tests
cover placed-at-band-1, mid-band, and top-band cases; existing profiles
self-heal on next map open.

**Resolution (2026-07-11):** Root cause was *not* the engine — `unitStates`
already put START on the placement band. The map renders behind the placement
`fullScreenCover`, so its one-shot `scrollTo(current)` `onAppear` fired while
`placementBandNumber` still defaulted to 1, then never re-ran when the cover
dismissed — the map stayed parked at band 1 with START scrolled off below.
Fix: re-center on the freshly-derived START from the cover's `onDismiss`
(deliberate token, not the incidental XP re-render); re-arm the START pulse via
`onChange(of: state)` (its `onAppear` doesn't re-fire either). Design: below
placement renamed `.golden`→`.explore` — plain warm nodes, no crown, "Warm-up
practice — play any lesson for fun," and a played-through explore unit now
earns its checkmark (completion beats the band gate). Pure-derivation states
mean existing mis-placed profiles self-heal on next map open. Covered by new
`ProgressEngineTests` (band-1 / mid / top / finished-explore) + a post-placement
map screenshot in the UI journey. **Last mile:** confirm on a real device with
a band>1 placement (sim renders all emoji as "?" and the UI test's rotating-tap
placement lands nondeterministically, usually band 1).

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

### [x] F1: Re-sequence early reading onto the OG spine — SHIPPED to prod 2026-07-11 (reading v4)

**User Value**: A kid mid-way through Fundations K or 1 places into Feeny
and lands on the *same skill family they're doing at school this month* —
the app feels like it knows their classroom.

**Scope note (2026-07-11):** the misalignment reaches band 5, not band 3 —
today digraphs live in band 5 *after* sight words/sentences (band 4), which
inverts the Fundations Level 1 order. F1 re-sequences **bands 1–5**: the
big move is pulling digraphs/glued sounds down to ~bands 3–4 and pushing
sentence work up.

**Work**: Write `curriculum/FUNDATIONS_MAP.md` covering **all three
Fundations levels** (K ≈ bands 1–3, L1 ≈ bands 3–5, L2 ≈ bands 5–6; unit →
band/skill alignment, gaps called out) so F2–F6 and placement probes cite
one source; resolve the `read-sight-words` overlap in the map doc (band 4's
one-shot sight-words unit vs F4's recurring trick-words track — decide
whether it anchors the track or is absorbed by it); re-sequence/re-skill
bands 1–5 reading units to the spine (letter-sound anchors → CVC →
digraphs → glued sounds → blends → sentences/stories); fill the 2–3 worst
gap units; re-curate reading placement probes so probe order matches the
new spine; ship ritual.

**Definition of Done**: The band 1–5 reading path reads in Fundations order
end-to-end; placement lands a mid-K kid on letter-sounds/CVC, a mid-1 kid on
digraphs/glued sounds; map doc covers K–L2 and settles the sight-words/
trick-words question for every later slice to cite.

**Resolution (2026-07-11):** `curriculum/FUNDATIONS_MAP.md` written (K–L2 →
bands 1–6, decisions of record inside). Band 4 is now Team-Up Trail
(Digraph Dive ↓ from b5, new Sticky Sounds `read-u-glued` for *all/am/an*,
Sight Word Stars as the F4 trick-words anchor); band 5 is Story Stream
(new Blend Blast `read-u-blends`, Sentence Builders + Question Quest ↑ from
b4, Story Time); Word Detective → band 6 (skill `read-vocabulary`) for
pacing. All unit/lesson/exercise ids stable; skills moved bands with their
units. Band 4/5 placement probes re-curated (all single-tap, mid-unit).
**Engine fix (advisor-caught):** placement's assumed-mastery is now also
derived at read time (`ProgressEngine.effectiveMasteries`) so skills
moved/added below a kid's placement after a re-sequence don't read as
mastery-0 and drag Power-Up Practice back to band 1 — covered by new
engine tests. Full suite green; adversarial review findings fixed
(ambiguous 🍳-as-pan probe-adjacent exercise, duplicate drum fill-blank,
stale headers). Prod-shipped same day (reading v4, packs 0b91005).

### [x] F2: Letter-keyword-sound anchors — SHIPPED to prod 2026-07-11 (reading v5)

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

**Resolution (2026-07-11):** Feeny's 26-keyword set is a decision of record
in `curriculum/FUNDATIONS_MAP.md` (ant→zebra, all short vowels, only
queen/zebra coincide with Wilson's; binding rules for 👑/🦎/🪺 ambiguity,
q/x/y format restriction, bare-leading-A/I TTS trap). Four new units open
bands 1–2: Letter Friends / More Letter Friends (b1, letter-name↔keyword,
upper/lower/mixed lessons) and Sound Friends / More Sound Friends (b2, the
three-part drill via word anchors, skill `read-letter-sounds` — existing
skills reused deliberately so anchor play feeds the same mastery the review
engine keys on). Anchor units placed first-in-band: START deliberately
pulls back to them for mid-band kids (pinned by engine test). Adversarial
review fixes applied: keyword emoji removed from unnamed distractor slots,
lesson-3 prompts no longer speak the answer letter, correct-position cycles
reshuffled, 3 letter-option exercises converted mCI→listenAndPick. Band-2
probes intentionally don't sample anchors yet (folded into F3's
re-curation, noted in map doc). Full suite green ×2. **Left:** Dan prod
seed + pack export.

### [x] F3: Digraphs, bonus letters, and glued sounds — DONE locally (2026-07-11); prod seed pending (Dan)

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

**Resolution (2026-07-11):** Two units, not three (advisor call: ck and
ff/ll/ss are the same "extra letters spell one ending sound" move, so no
separate bonus-letters unit/skill). Band 4 path: Digraph Dive → **More
Sound Teams** (`read-u-digraphs2`, 4 lessons: wh → ck → floss ff/ll/ss →
mixed) → Sticky Sounds → **Sing and Honk** (`read-u-gluedng`, -ng/-nk
families + audible ear contrasts fan/fang, sang/sank) → Sight Word Stars —
exact Fundations L1 order. Binding rules added to FUNDATIONS_MAP.md: wh is
spelling-only (wine–whine merger makes it inaudible in TTS), no bare-w
chips, floss endings spoken as letters, no -an/-am chips in ng/nk banks.
Band-2 probe #1 now samples the F2 anchor units. Digraph Dive 3-01 copy
de-conflicted. Review fixes: 🗑️-as-"trash" ear task → word labels,
lesson-3 answer cycle broken, "kill"-formable chip swapped. Suite green.
**Left:** Dan prod seed + pack export.

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

### [ ] F6: The decoding middle — silent-e, vowel teams, r-controlled, blends

**User Value**: A kid who finishes digraphs today jumps straight to
vocabulary-in-context — the actual learning-to-read middle is missing.
This slice gives the 6–8 year old mid-reader (Fundations L1 late → L2) a
real path: blends, silent-e/long vowels, vowel teams (ai/ee/oa…),
r-controlled vowels, and first multisyllable decoding.

**Work**: Author blend units (named in the F3 spine but no unit exists),
silent-e, vowel-team, and r-controlled units into bands 5–6 per the F1 map;
reframe band 6's "word parts" as syllable-aware decoding rather than only
prefixes/suffixes; update band 5–6 placement probes; ship ritual. No new
exercise types needed.

**Definition of Done**: A kid can travel band 5 → 6 through blends →
silent-e → vowel teams → r-controlled without a gap; each family is a
nameable unit; probes cover the new middle.

*Sequencing: F1 first (pure re-sequencing, highest leverage, no new
surface), F2–F4 in any order after it, F6 after F3 (biggest kid-value gap,
no new surface — arguably ahead of F4/F5), F5 last (only contract change —
riskiest).*

---

## Later / unscoped

- Math spine alignment pass (same treatment once a math curriculum anchor
  is chosen — Bridges? Eureka? TBD by what school uses).
- Parent progress email/weekly digest (needs backend send infra).
- iPhone layout; seasonal events; collection sharing-poster (deferred from
  the design relaunch).
