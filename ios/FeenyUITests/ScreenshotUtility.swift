import XCTest

/// Dev utility, not a real test: captures screens to /tmp for visual review.
/// Run via: xcodebuild test -only-testing:FeenyUITests/ScreenshotUtility
/// Launches with -feenyReset so the walk (and numbering) is deterministic:
/// create wizard → home (both orientations) → collection → math map.
final class ScreenshotUtility: XCTestCase {
    private func snap(_ name: String) throws {
        try XCUIScreen.main.screenshot().pngRepresentation
            .write(to: URL(fileURLWithPath: "/tmp/feeny-\(name).png"))
    }

    func testCaptureScreens() throws {
        let app = XCUIApplication()
        app.launchArguments = ["-feenyReset"]
        app.launch()
        sleep(3)
        try snap("1-create-buddy")

        // Walk the create wizard, capturing each step.
        let avatar = app.buttons.matching(identifier: "avatar-option").element(boundBy: 2)
        if avatar.waitForExistence(timeout: 10) {
            avatar.tap()
            let go = app.buttons["create-profile"]
            if go.waitForExistence(timeout: 5) { go.tap() }
            sleep(1)
            try snap("2-create-age")
            let age = app.buttons["age-6"]
            if age.waitForExistence(timeout: 5) {
                age.tap()
                sleep(1)
                try snap("3-create-starter")
            }
            let starter = app.buttons.matching(identifier: "starter-option").firstMatch
            if starter.waitForExistence(timeout: 5) {
                starter.tap()
                sleep(2)
            }
        }

        try snap("4-subject-home")
        // Landscape is the design-primary orientation — capture both.
        // (defer: orientation is device-global for the whole run.)
        do {
            defer { XCUIDevice.shared.orientation = .portrait }
            XCUIDevice.shared.orientation = .landscapeLeft
            sleep(2)
            try snap("4-subject-home-landscape")
        }
        sleep(2)

        // Feenling collection.
        let collectionButton = app.buttons["collection-button"]
        if collectionButton.waitForExistence(timeout: 5) {
            collectionButton.tap()
            sleep(2)
            try snap("5-collection")
            let close = app.buttons["close-collection"]
            if close.waitForExistence(timeout: 5) { close.tap() }
        }

        // Math map (placement appears on a fresh profile — capture whatever shows).
        let mathCard = app.buttons["subject-card-math"]
        if mathCard.waitForExistence(timeout: 5) {
            mathCard.tap()
            sleep(3)
            try snap("6-math-map-or-placement")
        }
    }
}
