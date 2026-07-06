import Foundation

/// Streak rules, pure and calendar-based so tests can feed simulated dates.
/// ≥1 completed lesson per calendar day keeps the flame lit. Missing exactly
/// one day is quietly covered by a "streak nap" (one per rolling week);
/// anything longer puts the flame to sleep — it wakes at 1, never with guilt.
enum StreakEngine {
    struct State: Equatable {
        var streakCount: Int
        /// Start-of-day of the last day that counted toward the streak.
        var lastStreakDay: Date?
        /// Start-of-day of the missed day the last nap covered.
        var lastNapDay: Date?
    }

    enum Event: Equatable {
        case started            // first day of a new streak (fresh or after a reset)
        case extended           // practiced on the very next day
        case napUsed            // one missed day covered by the weekly nap
        case alreadyCounted     // second+ lesson today; nothing changes
    }

    struct Update: Equatable {
        var state: State
        var event: Event
    }

    /// What the header flame shows.
    struct Display: Equatable {
        /// Current streak, already accounting for a nap-coverable gap.
        /// 0 when the streak is truly lost.
        var count: Int
        /// True once a lesson is done today — the flame is bright.
        /// False = sleeping flame ("wake it up with a lesson!").
        var isAwakeToday: Bool
    }

    /// Nap recharge: at least this many days between covered misses.
    static let napCooldownDays = 7

    static func recordLesson(state: State, now: Date, calendar: Calendar = .current) -> Update {
        let today = calendar.startOfDay(for: now)
        guard let last = state.lastStreakDay.map({ calendar.startOfDay(for: $0) }) else {
            return Update(state: State(streakCount: 1, lastStreakDay: today, lastNapDay: state.lastNapDay), event: .started)
        }

        let gap = calendar.dateComponents([.day], from: last, to: today).day ?? 0
        var next = state
        switch gap {
        case ...0:
            return Update(state: state, event: .alreadyCounted)
        case 1:
            next.streakCount += 1
            next.lastStreakDay = today
            return Update(state: next, event: .extended)
        case 2:
            let missedDay = calendar.date(byAdding: .day, value: 1, to: last)!
            if napAvailable(state: state, missedDay: missedDay, calendar: calendar) {
                next.streakCount += 1
                next.lastStreakDay = today
                next.lastNapDay = missedDay
                return Update(state: next, event: .napUsed)
            }
            fallthrough
        default:
            return Update(state: State(streakCount: 1, lastStreakDay: today, lastNapDay: state.lastNapDay), event: .started)
        }
    }

    static func display(state: State, now: Date, calendar: Calendar = .current) -> Display {
        let today = calendar.startOfDay(for: now)
        guard let last = state.lastStreakDay.map({ calendar.startOfDay(for: $0) }) else {
            return Display(count: 0, isAwakeToday: false)
        }
        let gap = calendar.dateComponents([.day], from: last, to: today).day ?? 0
        switch gap {
        case ...0:
            return Display(count: state.streakCount, isAwakeToday: true)
        case 1:
            return Display(count: state.streakCount, isAwakeToday: false)
        case 2 where napAvailable(
            state: state,
            missedDay: calendar.date(byAdding: .day, value: 1, to: last)!,
            calendar: calendar
        ):
            // Yesterday was missed but the nap will cover it if they play today.
            return Display(count: state.streakCount, isAwakeToday: false)
        default:
            return Display(count: 0, isAwakeToday: false)
        }
    }

    private static func napAvailable(state: State, missedDay: Date, calendar: Calendar) -> Bool {
        guard let lastNap = state.lastNapDay else { return true }
        let sinceNap = calendar.dateComponents(
            [.day],
            from: calendar.startOfDay(for: lastNap),
            to: calendar.startOfDay(for: missedDay)
        ).day ?? 0
        return sinceNap >= napCooldownDays
    }
}
