import XCTest

/// Dev utility, not a real test: captures screens to /tmp for visual review.
/// Run via: xcodebuild test -only-testing:FeenyUITests/ScreenshotUtility
final class ScreenshotUtility: XCTestCase {
    private func snap(_ name: String) throws {
        try XCUIScreen.main.screenshot().pngRepresentation
            .write(to: URL(fileURLWithPath: "/tmp/feeny-\(name).png"))
    }

    func testCaptureScreens() throws {
        let app = XCUIApplication()
        app.launch()
        sleep(4)
        try snap("1-first")

        // Picker → first profile → subject home.
        let profileCard = app.buttons.matching(identifier: "profile-card").firstMatch
        if profileCard.waitForExistence(timeout: 5) {
            profileCard.tap()
            sleep(2)
            try snap("2-subject-home")
        }

        // Feenling collection (slice 4).
        let collectionButton = app.buttons["collection-button"]
        if collectionButton.waitForExistence(timeout: 5) {
            collectionButton.tap()
            sleep(2)
            try snap("3-collection")
            let close = app.buttons["close-collection"]
            if close.waitForExistence(timeout: 5) { close.tap() }
        }

        // Math map (placement may appear instead — capture whatever shows).
        let mathCard = app.buttons["subject-card-math"]
        if mathCard.waitForExistence(timeout: 5) {
            mathCard.tap()
            sleep(3)
            try snap("4-math-map")
        }
    }
}
