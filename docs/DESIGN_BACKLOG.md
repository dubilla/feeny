# Feeny Design Relaunch — Backlog

> **Mission (from the VP):** Relaunch Feeny as the de facto educational app for taste-forward families. Parents should *want* their kids studying here — because the app looks and feels like it was made by people who care as much about craft as about pedagogy.

## The thesis

Feeny's bones are good: a warm, coherent palette; squishy spring interactions; no harsh feedback; a real ceremony chain (stars → egg hatch → level-up); a tuned economy. What it lacks is **an owned identity**. Today every visual is borrowed: emoji Feenlings, emoji avatars, emoji subject icons, SF Symbols chrome, an empty asset catalog, no type ramp, no spacing scale. Emoji reads as "hackathon," varies by OS version, and can never be brand. The relaunch replaces the borrowed identity layer with an owned one — without discarding the interaction soul that already works.

A relaunch is judged by a new family's first ten minutes on a real iPad. The backlog is sequenced around that funnel: the daily home screen, the face of the brand, the first-run flow — then the core loop, then the world, then the long tail of owned art.

## Design direction: "Storybook Modern"

Warm paper, ink-purple type, jewel accents, rounded geometry, characters drawn as friendly vector "stickers." The feeling: a beautifully printed children's book that came alive — not a casino, not a cereal box.

**Principles (every slice is judged against these):**
1. **Owned, not borrowed.** No emoji or stock symbol where identity lives (characters, icons, avatars, celebrations). Emoji may remain as *exercise stimuli* (semantic content) until Slice 13.
2. **Calm surface, alive on touch.** Screens are quiet and spacious at rest; energy comes from response — springs and sound — never from ambient blinking. (Sound carries extra load here: **iPads have no Taptic Engine**, so haptics are a no-op on our only target device. Motion + sound are the whole response budget.)
3. **Warm always.** No red, no guilt, no timers on screen. Wrong answers get curiosity, not correction.
4. **Parents are the taste audience.** Every screen a parent glimpses over a shoulder — home, celebrations, the parent corner — must pass the "would a designer screenshot this?" bar.
5. **One system.** Every size, color, radius, duration, and sound comes from a named token. Screens adopt tokens as they're redesigned; a lint ratchet locks it at the end (Slice 14).

**Cross-cutting rules (apply to every slice, not owned by any):**
- **Reduce Motion:** every motion token ships with a reduced variant, honored via `accessibilityReduceMotion` (the codebase currently has zero handling, and this relaunch *adds* idle loops and entrances — non-negotiable). Interactive elements get accessibility labels as screens are touched. Full VoiceOver navigation is explicitly deferred, in writing, here.
- **On-device review ritual:** this simulator renders every emoji as a "?" box and can't convey sound or feel. Every slice's DoD includes a pass on the physical iPad, not just `/tmp/feeny-*.png`.
- **Design governance:** Slice 1 produces `docs/DESIGN_LANGUAGE.md` + an exemplar screen — the UI analog of `AUTHORING.md` + exemplar unit — so later slices can fan out to agents without drifting off the bar.

## Asset strategy (decisions)

- **Characters authored as SVG, compiled to SwiftUI `Shape`.** SVG is a far better medium for drawing appeal and iterating visually; a small script compiles paths into Swift, and only the rig joints (eyes, blink, bob anchors) are hand-coded. Resolution-independent, animatable, no third-party deps. The known failure mode is *sameness* — 48 clones with different hats — so distinctiveness lives in **silhouette per family**, and rarity is spent on animation/effects, not new geometry.
- **Display typeface = a bundled OFL font, chosen by bake-off in Slice 1.** Candidates: **Fraunces** (soft/wonky axes, bookish — the literal "Storybook Modern" read) vs **Fredoka** (rounded, friendly, risks kids-app cosplay). Pick against the direction's name, on device. SF Rounded stays for body text and Dynamic Type friendliness.
- **Sound = one instrument family** (soft mallet palette), synthesized to `.caf`, prototyped in Slice 1 — it carries the "alive on touch" principle alone, so it must be taste-checked before anything depends on it. Today only three events exist (`correct`, `hatch`, `levelup`); the palette adds option-tap, wrong-answer (warm), progress-tick, and celebration layers.

---

## The slices

### [ ] 🚀 Slice 1: North Star — Subject Home sets the bar

**User Value**: The first screen a family sees every day looks like a designed product: real display typography, vector subject emblems (no 🔢/📚), a composed layout with intentional rhythm.

**Work**:
- Assets: font bake-off (Fraunces vs Fredoka) rendered on device, pick one, bundle via `project.yml`; draw vector emblems for Math and Reading.
- Theme: named type ramp (`display`, `title`, `heading`, `body`, `caption`), spacing scale (4/8/12/16/24/32/48), radius scale (12/16/24/32), motion tokens (with reduced variants) — used by this screen now, adopted screen-by-screen thereafter.
- Sound: synthesize the mallet palette prototype; wire option-tap sound to this screen's cards as the proof.
- UI: recompose `SubjectHomeView` — greeting block, stat chips (streak/collection/XP) as one coherent cluster, subject cards with emblem + progress; promote the gear to a quiet "For grown-ups" affordance.
- Docs: extract `docs/DESIGN_LANGUAGE.md` (principles, tokens, exemplar = this screen).
- Tests: screenshot via `ScreenshotUtility`; on-device review.

**Definition of Done**: Side-by-side before/after of Subject Home; zero emoji/SF Symbols in identity positions on this screen; the language doc exists; VP (Dan) says "that's the bar."

---

### [ ] 🚀 Slice 2: Feeny, the mascot — and the character pipeline

**User Value**: The app has a face. A designed hero character greets the kid on home, keeps them company on the skill map (replacing the generic emoji companion), and stands ready for celebrations — the beginning of character IP a parent recognizes on sight.

**Work**:
- Pipeline: build the SVG → SwiftUI `Shape` compile script (this is the pipeline all 48 Feenlings will ride; proving it on one character is the point).
- Assets: design Feeny — one strong silhouette, expressive eyes, 4 rigged states (idle-breathing, blink, wave, celebrate), reduced-motion variants.
- UI: home greeting (Feeny waves on appear), skill map companion (bobs beside current node), celebration cameo hooks (used fully in Slice 9).
- Tests: screenshots on home + map; idle animation doesn't trip UI-test timeouts; on-device review.

**Definition of Done**: Feeny visible on home and map; the SVG→Shape pipeline is documented in `DESIGN_LANGUAGE.md`; a parent shown the screen can answer "what's this app's mascot?"

---

### [ ] 🚀 Slice 3: The icon on the home screen

**User Value**: The single highest-leverage taste surface: an app icon featuring Feeny that survives sitting next to Duolingo, plus a designed static launch screen. Every TestFlight session from here on runs under the new brand.

**Work**:
- Assets: icon composed from the mascot rig, exported at all sizes into `AppIcon.appiconset`; static launch screen matching the home background (no launch animation — a daily-use app opens instantly; a cold-start bow is anti-taste by session ten).
- Tests: icon reviewed on a physical home screen next to Duolingo/Khan Kids.

**Definition of Done**: Dan looks at his real iPad home screen and doesn't wince.

---

### [ ] 🚀 Slice 4: Feenlings become real — starters + the hatch

**User Value**: The collectibles kids hatch are bespoke characters, not OS emoji. The egg-hatch ceremony — our single most shareable moment — reveals an animated creature worth the three taps.

**Work**:
- Assets: the 6 profile-starter species through the Slice 2 pipeline — two families' visual grammar established (Number Critters: geometric/round; Word Birds: winged/perched), distinct silhouettes per species.
- UI: `EggHatchView` reveal shows the vector Feenling (pop + settle; shiny = animated iridescent ring); starter picker in `ProfileCreateView` shows the three designed starters.
- Sound: hatch sequence gets the layered palette treatment (crack ×3 → pop → reveal chord).
- Data: `CollectibleCatalog` maps species → character asset, emoji retained as fallback for not-yet-drawn species (old packs must never crash — same posture as `.unsupported` exercises).
- Tests: hatch UI test green; screenshots + on-device review.

**Definition of Done**: Hatching a starter shows designed art with layered sound; zero emoji anywhere in the hatch ceremony.

---

### [ ] 🚀 Slice 5: First impressions — profiles and avatars

**User Value**: The very first screens a family ever sees ("Who's playing?", the create wizard) are designed: kids build an avatar from Feenling-style faces and colors instead of picking one of 12 emoji.

**Work**:
- Assets: avatar system on the character rig — ~8 faces × 6 palette tints (48 combos from parameters, not 48 drawings; sameness is fine here — avatars are a palette, not a cast).
- UI: `ProfilePickerView` + `ProfileCreateView` recomposed on tokens; avatar propagates to home header and map.
- Motion: picker cards breathe on focus; wizard steps slide on one curve.
- Tests: create-profile UI test updated; screenshots of picker + wizard; on-device review.

**Definition of Done**: New-family first-run touches zero emoji before the first lesson; avatar visible on home/map.

---

### [ ] 🚀 Slice 6: Placement as a story — the Warm-Up Adventure

**User Value**: A brand-new kid's first five minutes (placement quiz) feels like Feeny personally showing them around — mascot guide, designed interludes, a warm "You're all set!" arrival — instead of a 🧭-emoji quiz.

**Work**:
- UI: `PlacementFlowView` recomposed on tokens — Feeny as guide through askAge/intro/interlude/done stages; designed arrival moment. (Deliberately decoupled from band motifs — arrival gets the biome treatment later, in Slice 11.)
- Sound: interlude cheers from the palette.
- Tests: placement UI test green; screenshots per stage; on-device review.

**Definition of Done**: First-run placement contains zero emoji; arrival celebrates the kid's starting *place* by name, never a band number.

---

### [ ] 🚀 Slice 7: The quiet states

**User Value**: The unglamorous moments a design lead actually audits: first launch offline (bundled packs), content loading, sync-failed on the skill map, empty collection. Each gets a designed, warm, Feeny-voiced state instead of default spinners and silence.

**Work**:
- UI: designed loading state (home + map), sync-failed state on `SkillMapView`, offline-on-bundled-packs posture (invisible to kids, honest in the parent corner), empty-collection encouragement in `CollectionView`.
- Copy: one voice pass across all state copy (kid-facing = warm/simple; parent-facing = confident/plain).
- Tests: states exercised via `-feenyReset` + network-off run; screenshots; on-device review.

**Definition of Done**: Airplane-mode first-run start-to-lesson never shows a stock spinner, raw error, or dead end.

---

### [ ] 🚀 Slice 8: Lesson player craft pass

**User Value**: The core loop — where kids spend 80% of their time — feels hand-finished: composed prompt bar, satisfying progress fill, option cards with designed press/correct/try-again states, choreographed transitions between exercises instead of hard swaps.

**Work**:
- UI: recompose `LessonPlayerView` chrome (progress bar with fill animation, prompt bar + `SpeakerButton` as one unit); audit all six exercise views onto tokens; feedback banner redesigned (correct = warm celebration strip, wrong = curious "let's look again" strip).
- Motion: exercise-to-exercise transition (slide + settle on one curve); replace `DispatchQueue.asyncAfter` sequencing hacks with explicit animation phases where they drive visuals.
- Sound: option-tap, correct, warm wrong-answer, progress-tick — every answer responds in motion + sound together.
- Tests: `PlayLessonUITests` full journey green; `ScreenshotUtility` extended to capture each exercise type; on-device review (stimuli emoji render only on device).

**Definition of Done**: All six exercise types reviewed on device; no hard cuts between exercises; every interaction answers back.

---

### [ ] 🚀 Slice 9: Celebrations worth the name

**User Value**: Lesson-complete and level-up become the moments parents catch over a shoulder — Feeny cameos, designed star choreography, XP count-up, level badge in the display face — shareable-screenshot grade.

**Work**:
- UI: `LessonCompleteView` recomposed (stars → Feeny reaction → XP tick-up as one choreography); `LevelUpView` redesigned around the display face and gold tokens; confetti palette pulled from Theme.
- Motion/sound: one celebration timeline system (reused by placement arrival and future moments); level-up gets the "big" layered sound.
- Tests: ceremony-chain UI test (stars → hatch → level-up ordering preserved); screenshots; on-device review.

**Definition of Done**: A cold viewer shown only the level-up screen can name the app's aesthetic; ceremony chain unbroken.

---

### [ ] 🚀 Slice 10: The skill map becomes a path

**User Value**: The map reads as a journey: a drawn path connecting designed nodes (locked/current/done/golden), correct in both orientations, with the path segment "drawing in" when a unit completes — no more floating circles with padlocks positioned by pixel-nudge.

**Work**:
- UI: real path layout replacing the magic-number winding (`SkillMapView.swift` hand-tuned offsets); designed node states; `UnitDetailSheet` restyled on tokens.
- Motion: tokenized current-node pulse; path draw-in on unit completion (reduced-motion variant: fade).
- Tests: map UI test on both orientations; screenshots per state; on-device review.

**Definition of Done**: No layout magic numbers; path renders correctly portrait and landscape; node states legible at a glance without symbols.

---

### [ ] 🚀 Slice 11: Band biomes

**User Value**: Each band is a *place* — Counting Cove looks like a cove, Number Meadow like a meadow — an environmental wash and motif per band, and placement arrival (Slice 6) upgraded to land you *somewhere*. Progress feels like travel.

**Work**:
- Assets: motif + wash per band — a content project (8 bands × 2 subjects), run through the pipeline like a content drop, exemplar-first then fan-out.
- UI: band headers and map background take the environment treatment; placement arrival shows the kid's starting biome.
- Tests: screenshots per band; on-device review.

**Definition of Done**: Two adjacent bands are visually distinct places; a kid can point at "their" place on the map.

---

### [ ] 🚀 Slice 12: The album — and the roster, in waves

**User Value**: "My Feenlings" becomes an album worth browsing: unhatched species show true silhouettes (mystery, not gray boxes), hatched ones sit proud, rarity reads at a glance — with the first full family (~12 species) in designed art and the rest arriving as content drops behind the emoji fallback.

**Work**:
- Assets: first family batch (~12 species) through the pipeline; remaining families as subsequent content drops (explicitly not blocking this slice). **Prioritize one shiny per family** — slice 4 drew commons + a rare, so the 5% jackpot tier still reveals as emoji, and the biggest ceremony beat deserves designed art first.
- UI: `CollectionView` redesign — silhouettes from the actual character path, rarity framing, family section headers with emblems, tap → detail card (name, family, rarity, hatched-on). Cap concurrent idle animations (48 animating vector views is a real perf risk — animate only on-screen cells, prefer static poses at rest).
- Tests: screenshots of mixed hatched/unhatched album; scroll perf sanity on device.

**Definition of Done**: Zero "???" gray boxes; drawn species show true silhouettes; album scrolls at 120Hz on device.

---

### [ ] 🚀 Slice 13: Owned stimuli — the top 50

**User Value**: The pictures kids actually count, match, and read — the majority of what's on screen in the core loop — start becoming ours: the 50 most-used exercise visuals replaced with drawn art in the Feenling style. (Also makes visual QA possible on this machine, where emoji renders as "?" boxes.)

**Work**:
- Data: rank stimulus emoji by frequency across content packs; the schema already supports asset visuals — no contract change.
- Assets: top-50 set through the pipeline; content packs re-exported referencing assets with emoji fallback for the long tail.
- UI: `VisualView` asset path exercised for real (it exists but has never rendered anything).
- Tests: fixture decode green; exercise screenshots now reviewable in simulator.

**Definition of Done**: A typical counting lesson on device shows majority-owned art; old packs still render via fallback.

---

### [ ] 🚀 Slice 14: The parent corner earns trust

**User Value**: The screen that sells the subscription: parents open a calm, editorial, beautifully typeset corner — this-week progress story ("Maya practiced counting to 20 and hatched 2 Feenlings"), streak health, controls — that looks like the product of a company with taste.

**Work**:
- UI: replace the stock `List` in `ParentSettingsView` with a designed layout (adult type scale — quieter, denser than kid screens); progress-story section computed from `ProgressStore` (lessons done, skills touched, Feenlings hatched, this week vs last).
- Copy: parent-voice tone pass (confident, warm, zero gamification-speak).
- Tests: parent gate + settings UI test; screenshot; on-device review.

**Definition of Done**: Parent corner passes the "would a designer screenshot this?" bar; progress story renders from real local data.

---

### [ ] 🚀 Slice 15: Lock the system + tell the world

**User Value**: The relaunch holds its shape: the last unconverted corners adopt tokens, a lint ratchet makes inline values a build failure, and the App Store/TestFlight screenshot set + copy tell the new story.

**Work**:
- UI: sweep any remaining screens onto tokens (should be near-zero by now — screens adopted as redesigned).
- Lint: CI check failing on inline `Color(red:` / literal radii / ad-hoc font sizes in `Features/`.
- Marketing: capture the new screenshot set from `ScreenshotUtility`; App Store copy pass in the parent voice.
- Tests: full suite green; final on-device walkthrough of the whole funnel.

**Definition of Done**: Lint ratchet enforced in CI; a TestFlight build carries the full identity end-to-end; screenshot set approved.

---

## Explicitly deferred (with rationale)

- **Full VoiceOver navigation**: labels land as screens are touched (cross-cutting rule); complete navigation audit is post-relaunch.
- **Haptics**: no Taptic Engine on any iPad — revisit only if iPhone ships. Motion + sound carry the response budget.
- **Dark mode**: kid usage is daytime-dominant; warm-paper identity is light-first.
- **Remaining stimuli beyond top-50, iPhone layout, seasonal events, collection sharing-poster**: post-relaunch growth work, not identity work.
- **Launch animation**: cut on taste grounds — a daily-use app opens instantly; the static designed launch screen stays.

## Sequencing logic

1–3 set the bar and put the brand's face on the product (home, mascot, icon) at maximum visibility per unit of work. 4–7 own the new-family funnel — first run, first hatch, first five minutes, including the quiet states a design lead actually audits. 8–9 finish the loop kids live in. 10–13 build out the world and start owning the stimulus layer. 14–15 close with the buyers and lock the system so it can't erode. Each slice ships independently; the app is releasable after every one.
