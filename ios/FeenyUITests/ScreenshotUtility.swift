import XCTest

/// Dev utility, not a real test: captures screens to /tmp for visual review.
/// Run via: xcodebuild test -only-testing:FeenyUITests/ScreenshotUtility
final class ScreenshotUtility: XCTestCase {
    func testCaptureScreens() throws {
        let app = XCUIApplication()
        app.launch()
        sleep(4)

        // Whatever is up first (placement intro on fresh state, else the map).
        try XCUIScreen.main.screenshot().pngRepresentation
            .write(to: URL(fileURLWithPath: "/tmp/feeny-1-first.png"))

        // If the map is showing, open the current unit's sheet too.
        let currentNode = app.buttons["unit-node-current"]
        if currentNode.waitForExistence(timeout: 5) {
            currentNode.tap()
            sleep(2)
            try XCUIScreen.main.screenshot().pngRepresentation
                .write(to: URL(fileURLWithPath: "/tmp/feeny-2-unit-sheet.png"))
        }
    }
}
