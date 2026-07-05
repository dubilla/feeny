import XCTest
@testable import Feeny

/// Decodes every fixture exported from the zod schemas (curriculum/fixtures).
/// If the TypeScript contract and the Swift mirror drift, this fails the build.
final class ExerciseDecodingTests: XCTestCase {
    private func fixtureURLs() throws -> [URL] {
        let bundle = Bundle(for: Self.self)
        guard let fixturesDir = bundle.url(forResource: "fixtures", withExtension: nil) else {
            XCTFail("fixtures folder missing from test bundle — check project.yml folder reference")
            return []
        }
        let exercisesDir = fixturesDir.appending(path: "exercises")
        return try FileManager.default
            .contentsOfDirectory(at: exercisesDir, includingPropertiesForKeys: nil)
            .filter { $0.pathExtension == "json" }
    }

    func testEveryFixtureDecodesToASupportedPayload() throws {
        let urls = try fixtureURLs()
        XCTAssertFalse(urls.isEmpty, "no fixtures found — run pnpm export:fixtures")

        for url in urls {
            let data = try Data(contentsOf: url)
            let exercise = try JSONDecoder().decode(Exercise.self, from: data)
            XCTAssertFalse(
                exercise.payload.isUnsupported,
                "\(url.lastPathComponent) decoded as .unsupported — Swift mirror is missing this type"
            )
            XCTAssertNotNil(exercise.payload.prompt, "\(url.lastPathComponent) has no prompt")
        }
    }

    func testUnknownTypeDecodesAsUnsupportedNotCrash() throws {
        let json = #"{ "id": "x", "type": "someFutureType", "payload": { "anything": true } }"#
        let exercise = try JSONDecoder().decode(Exercise.self, from: json.data(using: .utf8)!)
        XCTAssertEqual(exercise.payload, .unsupported(type: "someFutureType"))
    }
}
