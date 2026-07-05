import XCTest

/// Slice-1 acceptance test: launch → lesson downloaded from the local backend →
/// play it to completion (retry queue makes any tap sequence terminate) →
/// XP awarded → XP survives relaunch. Requires `pnpm dev` on :3100.
final class PlayLessonUITests: XCTestCase {
    override func setUpWithError() throws {
        continueAfterFailure = false
    }

    func testPlayALessonEndToEndAndXPPersists() throws {
        let app = XCUIApplication()
        app.launch()

        // Lesson cards appear once the pack has downloaded (or loaded from cache).
        let lessonCard = app.buttons.matching(identifier: "lesson-card").firstMatch
        XCTAssertTrue(lessonCard.waitForExistence(timeout: 20), "no lesson card — is the backend on :3100 up?")
        lessonCard.tap()

        let doneBanner = app.staticTexts["You did it!"]
        let continueButton = app.buttons["Continue"]

        // Tap answers until the lesson completes. Wrong answers re-queue with a
        // Continue button; after 2 retries the engine resolves the exercise, so
        // this loop always terminates.
        for _ in 0..<80 {
            if doneBanner.exists { break }
            if continueButton.exists {
                continueButton.tap()
                continue
            }
            let option = app.buttons.matching(identifier: "answer-option").firstMatch
            if option.exists {
                option.tap()
            }
            // Brief pause covers the 1.1s auto-advance on correct answers.
            usleep(400_000)
        }

        XCTAssertTrue(doneBanner.waitForExistence(timeout: 10), "lesson never completed")

        let keepGoing = app.buttons["Keep Going!"]
        XCTAssertTrue(keepGoing.waitForExistence(timeout: 5))
        keepGoing.tap()

        // Back home: XP badge must show earned XP.
        let xpBadge = app.staticTexts.matching(NSPredicate(format: "label CONTAINS ' XP'")).firstMatch
        XCTAssertTrue(xpBadge.waitForExistence(timeout: 5))
        XCTAssertNotEqual(xpBadge.label, "0 XP", "XP was not awarded")
        let xpAfterLesson = xpBadge.label

        // Relaunch: XP must persist (SwiftData) and lessons must load from cache.
        app.terminate()
        app.launch()
        let xpAfterRelaunch = app.staticTexts.matching(NSPredicate(format: "label CONTAINS ' XP'")).firstMatch
        XCTAssertTrue(xpAfterRelaunch.waitForExistence(timeout: 10))
        XCTAssertEqual(xpAfterRelaunch.label, xpAfterLesson, "XP did not survive relaunch")
    }
}
