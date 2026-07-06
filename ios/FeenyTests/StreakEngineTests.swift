import XCTest
@testable import Feeny

final class StreakEngineTests: XCTestCase {
    private var calendar: Calendar {
        var cal = Calendar(identifier: .gregorian)
        cal.timeZone = TimeZone(identifier: "UTC")!
        return cal
    }

    /// Noon UTC on 2026-07-01 + `day` days — mid-day so startOfDay math is obvious.
    private func day(_ day: Int, hour: Int = 12) -> Date {
        let base = DateComponents(calendar: calendar, year: 2026, month: 7, day: 1, hour: hour).date!
        return calendar.date(byAdding: .day, value: day, to: base)!
    }

    private func record(_ state: StreakEngine.State, onDay d: Int, hour: Int = 12) -> StreakEngine.Update {
        StreakEngine.recordLesson(state: state, now: day(d, hour: hour), calendar: calendar)
    }

    func testFirstLessonStartsStreak() {
        let update = record(StreakEngine.State(streakCount: 0, lastStreakDay: nil, lastNapDay: nil), onDay: 0)
        XCTAssertEqual(update.event, .started)
        XCTAssertEqual(update.state.streakCount, 1)
    }

    func testSecondLessonSameDayCountsOnce() {
        let first = record(StreakEngine.State(streakCount: 0, lastStreakDay: nil, lastNapDay: nil), onDay: 0)
        let second = record(first.state, onDay: 0, hour: 20)
        XCTAssertEqual(second.event, .alreadyCounted)
        XCTAssertEqual(second.state, first.state)
    }

    func testConsecutiveDaysExtend() {
        var state = record(StreakEngine.State(streakCount: 0, lastStreakDay: nil, lastNapDay: nil), onDay: 0).state
        for d in 1...6 {
            let update = record(state, onDay: d)
            XCTAssertEqual(update.event, .extended)
            state = update.state
        }
        XCTAssertEqual(state.streakCount, 7)
    }

    func testSingleMissedDayCoveredByNap() {
        let d0 = record(StreakEngine.State(streakCount: 4, lastStreakDay: day(0), lastNapDay: nil), onDay: 2)
        XCTAssertEqual(d0.event, .napUsed)
        XCTAssertEqual(d0.state.streakCount, 5)
        XCTAssertEqual(d0.state.lastNapDay, calendar.startOfDay(for: day(1)), "nap covers the missed day")
    }

    func testSecondMissWithinAWeekResets() {
        // Nap already spent on day 1; another gap at day 4→6 must reset.
        let state = StreakEngine.State(streakCount: 6, lastStreakDay: day(4), lastNapDay: day(1))
        let update = record(state, onDay: 6)
        XCTAssertEqual(update.event, .started)
        XCTAssertEqual(update.state.streakCount, 1)
    }

    func testNapRechargesAfterSevenDays() {
        // Last nap on day 1; miss on day 9 (≥7 days later) is coverable again.
        let state = StreakEngine.State(streakCount: 8, lastStreakDay: day(8), lastNapDay: day(1))
        let update = record(state, onDay: 10)
        XCTAssertEqual(update.event, .napUsed)
        XCTAssertEqual(update.state.streakCount, 9)
    }

    func testLongGapResetsEvenWithNapAvailable() {
        let state = StreakEngine.State(streakCount: 10, lastStreakDay: day(0), lastNapDay: nil)
        let update = record(state, onDay: 3)
        XCTAssertEqual(update.event, .started, "naps cover exactly one day, never more")
        XCTAssertEqual(update.state.streakCount, 1)
    }

    // MARK: - Display

    func testDisplayAwakeAfterTodaysLesson() {
        let state = StreakEngine.State(streakCount: 3, lastStreakDay: day(5), lastNapDay: nil)
        let display = StreakEngine.display(state: state, now: day(5, hour: 18), calendar: calendar)
        XCTAssertEqual(display, StreakEngine.Display(count: 3, isAwakeToday: true))
    }

    func testDisplayAsleepButAliveNextMorning() {
        let state = StreakEngine.State(streakCount: 3, lastStreakDay: day(5), lastNapDay: nil)
        let display = StreakEngine.display(state: state, now: day(6, hour: 8), calendar: calendar)
        XCTAssertEqual(display, StreakEngine.Display(count: 3, isAwakeToday: false))
    }

    func testDisplayHoldsCountWhileNapCanStillSaveIt() {
        let state = StreakEngine.State(streakCount: 3, lastStreakDay: day(5), lastNapDay: nil)
        let display = StreakEngine.display(state: state, now: day(7), calendar: calendar)
        XCTAssertEqual(display, StreakEngine.Display(count: 3, isAwakeToday: false))
    }

    func testDisplayZeroOnceStreakIsTrulyLost() {
        let state = StreakEngine.State(streakCount: 3, lastStreakDay: day(5), lastNapDay: nil)
        let display = StreakEngine.display(state: state, now: day(9), calendar: calendar)
        XCTAssertEqual(display, StreakEngine.Display(count: 0, isAwakeToday: false))
    }
}
