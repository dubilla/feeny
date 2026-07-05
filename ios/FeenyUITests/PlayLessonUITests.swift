import XCTest

/// Slice-2 acceptance: fresh install → placement warm-up → skill map →
/// open the current unit → play a lesson → XP awarded and persisted.
/// Requires `pnpm dev` on :3100.
final class PlayLessonUITests: XCTestCase {
    override func setUpWithError() throws {
        continueAfterFailure = false
    }

    /// Taps answer options with a rotating index so multi-tap exercise types
    /// (match pairs, ordering) always make progress, until `goal` exists.
    private func answerUntil(_ app: XCUIApplication, goal: XCUIElement, maxTaps: Int = 200) {
        var tapIndex = 0
        for _ in 0..<maxTaps {
            if goal.exists { return }
            let continueButton = app.buttons["Continue"]
            if continueButton.exists {
                continueButton.tap()
                continue
            }
            let options = app.buttons.matching(identifier: "answer-option")
            let count = options.count
            if count > 0 {
                let target = options.element(boundBy: tapIndex % count)
                if target.exists && target.isHittable {
                    target.tap()
                }
                tapIndex += 1
            }
            usleep(350_000)
        }
    }

    func testPlacementThenLessonEndToEnd() throws {
        let app = XCUIApplication()
        app.launchArguments = ["-feenyReset"]
        app.launch()

        // 1. Placement warm-up appears on a fresh profile once the pack lands.
        let startPlacement = app.buttons["start-placement"]
        XCTAssertTrue(startPlacement.waitForExistence(timeout: 30), "placement intro never appeared — backend up? probes seeded?")
        startPlacement.tap()

        let finishPlacement = app.buttons["finish-placement"]
        answerUntil(app, goal: finishPlacement)
        XCTAssertTrue(finishPlacement.waitForExistence(timeout: 15), "placement never completed")
        finishPlacement.tap()

        // 2. Skill map: the current unit node is there — open it.
        let currentNode = app.buttons["unit-node-current"]
        XCTAssertTrue(currentNode.waitForExistence(timeout: 10), "no current unit on the map")
        currentNode.tap()

        // 3. Unit sheet: play the next lesson.
        let lessonCard = app.buttons.matching(identifier: "lesson-card").firstMatch
        XCTAssertTrue(lessonCard.waitForExistence(timeout: 10), "no playable lesson in unit sheet")
        lessonCard.tap()

        // 4. Play to completion.
        let doneBanner = app.staticTexts["You did it!"]
        answerUntil(app, goal: doneBanner)
        XCTAssertTrue(doneBanner.waitForExistence(timeout: 15), "lesson never completed")

        let keepGoing = app.buttons["Keep Going!"]
        XCTAssertTrue(keepGoing.waitForExistence(timeout: 5))
        keepGoing.tap()

        // 5. XP: placement pays 20, lesson ≥10 → at least 30 XP showing.
        let xpBadge = app.staticTexts.matching(NSPredicate(format: "label CONTAINS ' XP'")).firstMatch
        XCTAssertTrue(xpBadge.waitForExistence(timeout: 10))
        let xpValue = Int(xpBadge.label.replacingOccurrences(of: " XP", with: "")) ?? 0
        XCTAssertGreaterThanOrEqual(xpValue, 30, "expected placement + lesson XP, got \(xpBadge.label)")

        // 6. Relaunch WITHOUT reset: XP and placement persist (no warm-up again).
        app.terminate()
        app.launchArguments = []
        app.launch()
        let xpAfterRelaunch = app.staticTexts.matching(NSPredicate(format: "label CONTAINS ' XP'")).firstMatch
        XCTAssertTrue(xpAfterRelaunch.waitForExistence(timeout: 15), "map did not come back after relaunch")
        XCTAssertEqual(Int(xpAfterRelaunch.label.replacingOccurrences(of: " XP", with: "")) ?? -1, xpValue,
                       "XP did not survive relaunch")
        XCTAssertFalse(app.buttons["start-placement"].exists, "placement should not run twice")
    }
}
