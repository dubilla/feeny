# Feeny Design Language — "Storybook Modern"

The UI analog of `AUTHORING.md`: principles, tokens, and an exemplar screen,
so any screen redesign (human or agent) lands on the same bar. The backlog
sequencing this work lives in `docs/DESIGN_BACKLOG.md`.

**The feeling:** a beautifully printed children's book that came alive.
Warm paper, ink-purple type, jewel accents, rounded geometry, characters as
friendly vector "stickers." Not a casino, not a cereal box.

**Exemplar:** `SubjectHomeView` (Slice 1). When restyling a screen, put it
next to the exemplar and ask whether they came from the same book.

## Principles (judge every screen against these)

1. **Owned, not borrowed.** No emoji or SF Symbols where identity lives —
   characters, subject emblems, stat glyphs, avatars, celebrations. Emoji may
   remain as *exercise stimuli* (semantic content) until Slice 13. Utility
   symbols (chevrons, speaker) may stay SF Symbols until a slice replaces them.
2. **Calm surface, alive on touch.** Quiet, spacious screens at rest; energy
   comes from response — springs and sound — never ambient blinking. iPads
   have no Taptic Engine, so motion + sound are the entire response budget.
3. **Warm always.** No red, no guilt, no timers. Wrong answers get curiosity
   ("hm, let's look again"), never correction.
4. **Parents are the taste audience.** Every screen a parent glimpses must
   pass "would a designer screenshot this?"
5. **One system.** Every size, color, radius, duration, and sound comes from
   a named token in `Theme` (`ios/Feeny/Core/UI/Theme.swift`). No inline
   values on redesigned screens.

## Type ramp (`Theme.*`)

Display face is **Feeny Display** — Fraunces (OFL), instanced at the display
optical size with SOFT=100 / WONK=1, renamed per OFL practice. Files +
license: `ios/Feeny/Resources/Fonts/`. Body face stays SF Rounded for
legibility and Dynamic Type friendliness.

| Token | Face | Use |
|---|---|---|
| `display(46)` | Feeny Display Semibold | Screen hero: greeting, celebration headline |
| `displayBold(26–30)` | Feeny Display Bold | Numbers with pride: XP, streak count, short shouts |
| `title(34)` | SF Rounded heavy | Card titles on unconverted screens; big CTAs |
| `heading(26)` | SF Rounded bold | Sub-headings, badges |
| `body(22)` | SF Rounded semibold | Sentences kids (or grown-ups) read |
| `caption(16)` | SF Rounded semibold | Quiet metadata; pair with `.opacity` |

Rule of thumb: Feeny Display carries *identity moments*; SF Rounded carries
*reading*. If a kid must decode the word, use SF Rounded.

## Color (`Theme.*`)

`background` warm paper · `card` white · `ink` ink-purple (text, 0.4–0.7
opacity steps for secondary) · `accent` violet (math, primary actions) ·
`teal` (reading) · `correct` green · `incorrect` warm orange (never red) ·
`gold` (XP, rewards, golden units).

## Spacing & radius

- `Theme.Space`: xxs 4 · xs 8 · s 12 · m 16 · l 24 · xl 32 · xxl 48
- `Theme.Radius`: s 12 · m 16 · l 24 (cards, option tiles) · xl 32 (hero cards)
- Ergonomic floors (never regress): touch targets ≥ 88pt, option cards ≥ 160pt.

## Motion (`Theme.Motion` — every token has a Reduce Motion variant)

| Token | Feel | Reduced |
|---|---|---|
| `press` | squishy press-down on anything tappable | quick fade |
| `settle` | elements arriving into place | short ease |
| `breathe` | ambient idle (companion bob) | **off** |
| `pulse` | attention ring on the current node | **off** |

Apply via `.motion(token, value:)` or `token.resolved(reduceMotion:)`;
`SquishyButtonStyle` already honors Reduce Motion. Idle loops must be
decorative-only, so their reduced variant is nil (they simply don't run).

**Idle-loop rule (load-bearing):** looping animations must use the
modifier form (`.animation(_, value:)` / `.motion(token, value:)`), never
imperative `withAnimation(.repeatForever)`. The imperative form registers a
transaction that never settles, so XCUITest's wait-for-idle blocks and the
UI-test runner dies mid-journey.

## Sound — one instrument: soft mallets

Synthesized by `ios/tools/synth_sounds.py` (regenerate with plain python3;
afconvert does the .caf). Marimba-ish partials, fast decay, always polite:
touch feedback ducks under narration volume.

| Event | File | Feel |
|---|---|---|
| option/card tap | `tap.caf` | single soft G5 |
| progress tick | `tick.caf` | tiny C6 |
| wrong answer | `wrong.caf` | rising C5→D5 "hm?" — curious, never a buzzer |
| small win | `celebrate.caf` | quick C-major arpeggio |
| correct / hatch / level-up | original files until their screens are redesigned |

Wiring rule: every interaction answers in motion **and** sound together.

## Owned art (`ios/Feeny/Core/UI/Emblems.swift`)

Vector emblems and glyphs drawn as SwiftUI shapes in a 100×100 design box,
colors parameterized: `SubjectEmblem` (math blocks / reading book, fallback
star), `FlameGlyph` (streak, lit/asleep), `EggGlyph` (collection).

## Character pipeline (SVG → SwiftUI `Path`)

All characters — Feeny and every Feenling to come — ride one pipeline:

1. **Author** the character as an SVG in `ios/DesignAssets/` (absolute
   M/C/L/Q/Z path commands; circles/ellipses fine; every layer needs an
   `id`). Preview it in any browser while drawing. SVG fills are
   preview-only.
2. **Compile**: `python3 ios/tools/svg2shape.py ios/DesignAssets/feeny.svg
   ios/Feeny/Core/UI/Characters/FeenyPaths.swift FeenyPaths` → a generated
   enum of unit-normalized `Path` layers (checked in, never hand-edited).
3. **Rig** by hand in the character's View (`FeenyMascot.swift`): color each
   layer from Theme tokens, attach joints (blink squash, wing shoulder
   rotation, breathe scale, hop offset). Rig states so far: `idle`, `wave`,
   `celebrate` — all with Reduce Motion stand-ins (still poses, no loops).

Distinctiveness budget (from the backlog): silhouette varies per *family*;
species within a family vary by palette/detail; rarity is spent on animation
and effects, never new geometry. Feeny's silhouette (egg body + sprout) is
reserved for the mascot.

## Review ritual

Screenshots via `ScreenshotUtility` (`/tmp/feeny-*.png`, portrait +
landscape) are the working loop, but **the simulator renders every emoji as
"?" and carries no sound or feel** — every slice's definition of done
includes a pass on the physical iPad.

## Deliberately deferred

Full VoiceOver navigation (labels land screen-by-screen), haptics (no Taptic
Engine on iPad), dark mode (warm-paper identity is light-first), launch
animation (a daily app opens instantly).
