# Feeny reward economy

Single source of truth in code: `ios/Feeny/Core/Game/GameEconomy.swift`. This table mirrors it — update both together.

## XP

| Event | XP |
|---|---|
| Lesson complete | 10 (lesson's `xpReward`) |
| Perfect lesson (100% first-try) | +5 |
| Placement quiz complete (slice 2) | 20, regardless of result |
| Unit complete (slice 4) | +25 |
| Review lesson (slice 2) | 10 — never worth less than normal |
| Jump-ahead challenge pass (slice 2) | +40 |
| Duplicate Feenling "Sparkle bonus" (slice 4) | +30 |

## Levels

XP to advance from level n → n+1: `50 + 25·(n−1)` (L1→2: 50, L2→3: 75, …).
Levels are per-profile and cross-subject; always derived from total XP, never stored.

## Feenlings (slice 4)

Complete a unit → egg → hatch ceremony → random creature.
24 per subject (Math: Number Critters, Reading: Word Birds). Rarity common/rare/shiny at 70/25/5%.

## Streaks (slice 4)

≥1 completed lesson per calendar day, per profile. One free "streak nap" per week (missing a single day doesn't reset). Gentle framing only — a lost streak is a sleeping flame to wake up, never guilt. No notifications in v1.
