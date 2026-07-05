import XCTest

/// Slice-3 acceptance: fresh install → create a profile → subject home →
/// Math placement → map → lesson → XP. Then a second profile whose progress
/// is fully independent. Requires `pnpm dev` on :3100.
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

    private func createProfile(_ app: XCUIApplication, avatarIndex: Int) {
        let avatar = app.buttons.matching(identifier: "avatar-option").element(boundBy: avatarIndex)
        XCTAssertTrue(avatar.waitForExistence(timeout: 15), "avatar grid missing")
        avatar.tap()
        let go = app.buttons["create-profile"]
        XCTAssertTrue(go.waitForExistence(timeout: 5))
        go.tap()
    }

    private func currentXP(_ app: XCUIApplication) -> Int {
        let badge = app.staticTexts.matching(NSPredicate(format: "label CONTAINS ' XP'")).firstMatch
        guard badge.waitForExistence(timeout: 10) else { return -1 }
        return Int(badge.label.replacingOccurrences(of: " XP", with: "")) ?? -1
    }

    func testProfilesSubjectsPlacementLessonEndToEnd() throws {
        let app = XCUIApplication()
        app.launchArguments = ["-feenyReset"]
        app.launch()

        // 1. Fresh install → create-profile screen.
        createProfile(app, avatarIndex: 0)

        // 2. Subject home shows Math and Reading cards.
        let mathCard = app.buttons["subject-card-math"]
        let readingCard = app.buttons["subject-card-reading"]
        XCTAssertTrue(mathCard.waitForExistence(timeout: 30), "math card missing — backend up?")
        XCTAssertTrue(readingCard.exists, "reading card missing")
        mathCard.tap()

        // 3. Math placement runs on first entry.
        let startPlacement = app.buttons["start-placement"]
        XCTAssertTrue(startPlacement.waitForExistence(timeout: 15), "math placement never appeared")
        startPlacement.tap()
        let finishPlacement = app.buttons["finish-placement"]
        answerUntil(app, goal: finishPlacement)
        XCTAssertTrue(finishPlacement.waitForExistence(timeout: 15))
        finishPlacement.tap()

        // 4. Map → current unit → lesson → complete.
        let currentNode = app.buttons["unit-node-current"]
        XCTAssertTrue(currentNode.waitForExistence(timeout: 10))
        currentNode.tap()
        let lessonCard = app.buttons.matching(identifier: "lesson-card").firstMatch
        XCTAssertTrue(lessonCard.waitForExistence(timeout: 10))
        lessonCard.tap()
        let doneBanner = app.staticTexts["You did it!"]
        answerUntil(app, goal: doneBanner)
        XCTAssertTrue(doneBanner.waitForExistence(timeout: 15))
        app.buttons["Keep Going!"].tap()

        let profile1XP = currentXP(app)
        XCTAssertGreaterThanOrEqual(profile1XP, 30, "placement (20) + lesson (10+) expected")

        // 5. Back to subjects → switch profile → second kid starts from zero.
        let backButton = app.buttons["back-to-subjects"]
        XCTAssertTrue(backButton.waitForExistence(timeout: 5))
        backButton.tap()
        let switchProfile = app.buttons["switch-profile"]
        XCTAssertTrue(switchProfile.waitForExistence(timeout: 5))
        switchProfile.tap()

        let newProfile = app.buttons["new-profile-card"]
        XCTAssertTrue(newProfile.waitForExistence(timeout: 5), "picker should offer New Explorer")
        newProfile.tap()
        createProfile(app, avatarIndex: 3)

        // Second kid: zero XP, and Math placement fires again for THEM.
        XCTAssertTrue(app.buttons["subject-card-math"].waitForExistence(timeout: 10))
        XCTAssertEqual(currentXP(app), 0, "new profile must start at 0 XP")
        app.buttons["subject-card-math"].tap()
        XCTAssertTrue(app.buttons["start-placement"].waitForExistence(timeout: 10),
                      "second profile must get their own placement")

        // 6. Relaunch → picker shows both kids; picking the first restores XP.
        app.terminate()
        app.launchArguments = []
        app.launch()
        let profileCards = app.buttons.matching(identifier: "profile-card")
        XCTAssertTrue(profileCards.firstMatch.waitForExistence(timeout: 15))
        XCTAssertEqual(profileCards.count, 2, "both profiles should appear in the picker")
        profileCards.element(boundBy: 0).tap()
        XCTAssertEqual(currentXP(app), profile1XP, "first kid's XP must survive relaunch")
    }
}
