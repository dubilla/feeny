import XCTest

/// Dev utility, not a real test: opens a lesson and writes a screenshot to
/// FEENY_SHOT_PATH (simulator processes share the host filesystem). Run via:
///   xcodebuild test -only-testing:FeenyUITests/ScreenshotUtility
final class ScreenshotUtility: XCTestCase {
    func testCaptureLessonScreenshot() throws {
        // Simulator processes share the host filesystem, so /tmp works from the runner.
        let outputPath = ProcessInfo.processInfo.environment["FEENY_SHOT_PATH"] ?? "/tmp/feeny-lesson.png"
        let app = XCUIApplication()
        app.launch()

        let cards = app.buttons.matching(identifier: "lesson-card")
        XCTAssertTrue(cards.firstMatch.waitForExistence(timeout: 20))
        // Prefer the last (likely unplayed) lesson.
        cards.element(boundBy: cards.count - 1).tap()
        sleep(3)

        let shot = XCUIScreen.main.screenshot().pngRepresentation
        try shot.write(to: URL(fileURLWithPath: outputPath))
    }
}
