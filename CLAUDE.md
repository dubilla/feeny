# Feeny — iPad learning app for kids 5–9

Duolingo-inspired: per-subject skill paths (Math, Reading), **ability bands 1–8, never age/grade**, adaptive placement, XP/levels/collectibles. Full plan: `~/.claude/plans/wild-riding-ocean.md`.

## Layout

- `curriculum/` — content as TypeScript seeds. `src/schema/exercises.ts` is the **source of truth** for the 6 exercise types (zod). `AUTHORING.md` = authoring rules. One file per unit under `src/{math,reading}/band{N}/`.
- `backend/` — Next.js (App Router) + Drizzle + Postgres, **port 3100** (3000 is taken by another app). Read-only content API: `/api/v1/manifest`, `/api/v1/subjects/:id/pack` (ETag/304). Seed is idempotent full-replace; a subject's `content_versions.version` bumps only when its content hash changes.
- `ios/` — SwiftUI iPad app, **XcodeGen-generated**: edit `project.yml`, then `cd ios && xcodegen generate`. Never hand-edit the .xcodeproj. No third-party deps. Progress = SwiftData behind `ProgressStore` (the only type touching SwiftData); packs = raw JSON cache in Application Support (not SwiftData). Adaptivity = pure `ProgressEngine` + `PlacementSession`, tuned via `TuningConstants`. Reward numbers live in `GameEconomy.swift` + `docs/ECONOMY.md` (update together).

## Commands

```bash
pnpm db:up            # brew services start postgresql@16 (no Docker on this machine)
pnpm db:push          # drizzle-kit push (db: feeny)
pnpm seed             # rebuild content tables from curriculum/
pnpm dev              # Next.js on :3100, logs to logs/dev.log
pnpm export:fixtures  # regenerate curriculum/fixtures/exercises/*.json

cd ios && xcodegen generate
xcodebuild -project ios/Feeny.xcodeproj -scheme Feeny \
  -destination 'platform=iOS Simulator,name=Feeny iPad' test   # unit + UI tests
```

Simulator: "Feeny iPad" (iPad Pro 11" M4). Bundle id `com.danubilla.Feeny` (capital F). Launch arg `-feenyReset` wipes all local state (used by UI tests/QA).

## Contract rule (load-bearing)

Any exercise-schema change ships in ONE commit: zod schema + Swift mirror (`ios/Feeny/Core/Content/ExercisePayload.swift`) + `pnpm export:fixtures` + `docs/CONTENT_SPEC.md`. The iOS test target bundles `curriculum/fixtures/` and must decode every fixture — drift fails the build. Unknown `type` decodes as `.unsupported` and is skipped (old app + new pack must never crash).

## Verification pattern

Backend up → `xcodebuild test`: `FeenyTests` (engine/decode) + `FeenyUITests/PlayLessonUITests` (full journey with real taps: profile → subject → placement → lesson → XP persists; answer loop uses rotating-index taps so multi-tap types can't deadlock). `FeenyUITests/ScreenshotUtility` writes `/tmp/feeny-*.png` for visual review — read them; don't trust "tests pass" alone for UI work.

## Known environment quirks

- iOS 26.3 simulator on this Mac renders ALL emoji as "?" boxes (verified in Safari too — not an app bug; fine on real devices).
- Kid-UX hard rules in `Theme.swift`: ≥88pt touch targets, option cards ≥160pt, spoken prompt carries every task for pre-readers, no harsh wrong-answer feedback (warm/neutral always).

## Content authoring at scale (proven workflow)

Write band/skill/unit skeleton + exact export names into `src/<subject>/index.ts` first, then fan out 3 parallel agents (one per band range) pointed at `AUTHORING.md` + the exemplar unit + the zod schema, each validating every unit with `unitSeedSchema.parse` before finishing. Curate placement probes afterward (3 per band, single-tap types only, mid-unit lessons), then `pnpm seed`.
