# Feeny reward economy

Single source of truth in code: `ios/Feeny/Core/Game/GameEconomy.swift` (streak rules in `StreakEngine.swift`, roster in `CollectibleCatalog.swift`). This doc mirrors them — update both together.

## XP

| Event | XP |
|---|---|
| Lesson complete | 10 (lesson's `xpReward`) |
| Perfect lesson (100% first-try) | +5 |
| Placement quiz complete | 20, regardless of result |
| Unit complete (last lesson OR challenge skip) | +25 |
| Review lesson | 10 — never worth less than normal |
| Jump-ahead challenge pass | +40 (stacks with the +25 unit bonus) |
| Duplicate Feenling "Sparkle bonus" | +30 |

## Levels

XP to advance from level n → n+1: `50 + 25·(n−1)` (L1→2: 50, L2→3: 75, …).
Levels are per-profile and cross-subject; always derived from total XP, never stored.
Level-up ceremony runs after the egg hatch, so sparkle-bonus XP counts toward it.

## Feenlings

Complete a unit → egg → tap-to-crack hatch ceremony → random creature.
24 per subject (Math: Number Critters, Reading: Word Birds), each 14 common / 7 rare / 3 shiny.
Hatch odds by tier: common/rare/shiny at 70/25/5%. Duplicates pay the Sparkle bonus.
Eggs are durable: unhatched ones wait in the collection screen (quit-before-hatch safe).
A starter Feenling (one of 3 fixed commons) is chosen at profile creation, joins the
collection, and walks the map beside the current unit.

## Streaks

≥1 completed lesson per calendar day, per profile (challenge passes count too).
One free "streak nap" covers a single missed day; it recharges 7 days after use.
A gap of 2+ days (or a second miss inside the week) resets to 1 on the next lesson.
Gentle framing only — a lost streak is a sleeping flame to wake up, never guilt.
No notifications in v1.
