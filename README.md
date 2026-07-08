# Feeny

A Duolingo-inspired iPad app that teaches kids aged 5–9 through short,
game-like lessons — Math and Reading in v1.

- **Ability bands, never grades.** An adaptive placement quiz decides where
  each kid starts on a band-1–8 ladder; performance adjusts the path from
  there. Age is never used.
- **Made for pre-readers.** Every exercise is fully solvable from the spoken
  prompt and visuals alone: TTS on every screen, image-first options, ≥88pt
  touch targets, no harsh wrong-answer feedback.
- **Offline-first.** Content ships in the app as bundled packs and updates
  from a read-only API when available. No accounts; kid profiles and progress
  live on-device.
- **Rewards that feel like a game.** XP and levels, daily streaks with a
  guilt-free weekly "streak nap", and collectible Feenlings hatched from
  unit-completion eggs (24 per subject; commons, rares, and shinies).

## Layout

| Directory | What it is |
|---|---|
| `curriculum/` | Lesson content as zod-validated TypeScript seeds (source of truth for the exercise contract) |
| `backend/` | Next.js + Drizzle + Postgres read-only content API, serving versioned subject packs |
| `ios/` | SwiftUI iPad app (XcodeGen project, no third-party dependencies) |
| `docs/` | Content spec and reward-economy reference |

## Development

```bash
pnpm db:up && pnpm db:push && pnpm seed   # Postgres + content
pnpm dev                                  # API on :3100
cd ios && xcodegen generate               # then build/test in Xcode
```

See `CLAUDE.md` for the full command reference and architecture rules.
