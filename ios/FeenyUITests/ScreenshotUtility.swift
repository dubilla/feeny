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

    /// Walks Reading → placement → map → the "Tap It Out" explore node → its
    /// first lesson, tapping the tap-out boxes and snapping the new view.
    private func captureReadingTapOut(_ app: XCUIApplication) throws {
        let readingCard = app.buttons["subject-card-reading"]
        guard readingCard.waitForExistence(timeout: 5) else { return }
        readingCard.tap()
        sleep(2)
        // Blow through placement by tapping the first option each question.
        if app.buttons["start-placement"].waitForExistence(timeout: 5) {
            app.buttons["start-placement"].tap()
        }
        for _ in 0..<40 {
            if app.buttons["Tap It Out"].exists { break }
            // The placement arrival screen gates the map behind "See My Path!".
            let seePath = app.buttons["See My Path!"]
            if seePath.exists { seePath.tap(); sleep(1); continue }
            let opt = app.buttons.matching(identifier: "answer-option").firstMatch
            if opt.exists && opt.isHittable { opt.tap() }
            usleep(500_000)
        }
        // Arrive on the map; the tap-out units sit in lower bands, so scan by
        // scrolling both directions (path orientation isn't guaranteed).
        sleep(2)
        // Path runs band 1 (top) → band 8 (bottom); placement lands mid-path,
        // so swipeDown climbs toward the band-2 "Tap It Out" unit. The node sets
        // an accessibilityIdentifier, so match its title staticText instead.
        let title = app.staticTexts["Tap It Out"]
        for _ in 0..<30 where !title.exists { app.swipeDown(); usleep(350_000) }
        guard title.exists else {
            try snap("reading-map-no-tapout"); return
        }
        title.tap()
        sleep(1)
        let lesson = app.buttons.matching(identifier: "lesson-card").firstMatch
        guard lesson.waitForExistence(timeout: 5) else { try snap("reading-unit-sheet"); return }
        lesson.tap()
        sleep(3)
        try snap("reading-tapout-1")
        // Tap the first sound box, then snap the mid-reveal state.
        let box = app.buttons.matching(identifier: "answer-option").firstMatch
        if box.waitForExistence(timeout: 5) {
            box.tap()
            usleep(600_000)
            try snap("reading-tapout-2-revealed")
            let next = app.buttons.matching(identifier: "answer-option").firstMatch
            if next.exists { next.tap(); usleep(600_000); try snap("reading-tapout-3") }
        }
    }

    func testCaptureScreens() throws {
        let app = XCUIApplication()
        app.launchArguments = ["-feenyReset"]
        app.launch()
        sleep(3)

        // Walk the create wizard, capturing each step. Pick a face + tint
        // first so the buddy-builder capture shows a live selection.
        let avatar = app.buttons.matching(identifier: "avatar-option").element(boundBy: 2)
        XCTAssertTrue(avatar.waitForExistence(timeout: 10), "buddy grid missing — captures would be silently empty")
        if avatar.exists {
            avatar.tap()
            let tint = app.buttons.matching(identifier: "tint-option").element(boundBy: 1)
            if tint.waitForExistence(timeout: 5) { tint.tap() }
            sleep(1)
            try snap("1-create-buddy")
            let go = app.buttons["create-profile"]
            if go.waitForExistence(timeout: 5) { go.tap() }
            sleep(1)
            try snap("2-create-age")
            let age = app.buttons["age-8"]
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

        // Reading tap-out (F5): capture the new tapTheSounds view. Placing an
        // older profile high makes the band-2 "Tap It Out" unit a tappable
        // explore node below the start, so we can open it without grinding up.
        try captureReadingTapOut(app)

        // Math map → fresh profile lands on the placement intro; walk one
        // question in to capture the guided stage too.
        let mathCard = app.buttons["subject-card-math"]
        if mathCard.waitForExistence(timeout: 5) {
            mathCard.tap()
            sleep(3)
            try snap("6-placement-intro")
            let start = app.buttons["start-placement"]
            if start.waitForExistence(timeout: 5) {
                start.tap()
                sleep(2)
                try snap("7-placement-question")
                // One answer in: catch the interlude cheer (900ms window).
                let option = app.buttons.matching(identifier: "answer-option").firstMatch
                if option.waitForExistence(timeout: 5) {
                    option.tap()
                    usleep(400_000)
                    try snap("8-placement-interlude")
                }
            }
        }
    }
}
