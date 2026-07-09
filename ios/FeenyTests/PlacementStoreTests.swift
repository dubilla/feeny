import SwiftData
import XCTest
@testable import Feeny

/// Age capture on profiles plus the seeded-mastery lifecycle: placement seeds
/// assumed mastery (flagged), real practice earns the row, and redoing
/// placement deletes only the still-assumed rows for that subject.
@MainActor
final class PlacementStoreTests: XCTestCase {
    private var container: ModelContainer!

    override func setUp() async throws {
        let config = ModelConfiguration(isStoredInMemoryOnly: true)
        container = try ModelContainer(
            for: KidProfile.self, LessonCompletion.self, SubjectProgress.self, SkillMastery.self,
            OwnedFeenling.self,
            configurations: config
        )
    }

    private func makeStore(now: @escaping () -> Date = { Date() }) -> ProgressStore {
        ProgressStore(container: container, now: now, rng: SplitMix64(seed: 1))
    }

    /// Three bands, one skill per band; no probes needed for store tests.
    private func makePack(subjectId: String = "math") -> SubjectPack {
        SubjectPack(
            subjectId: subjectId, version: 1, generatedAt: "now",
            bands: (1...3).map { Band(id: "\(subjectId)-b\($0)", bandNumber: $0, title: "B\($0)", description: "d") },
            skills: (1...3).map { Skill(id: "\(subjectId)-s\($0)", bandId: "\(subjectId)-b\($0)", title: "S", sortOrder: $0) },
            units: [],
            placementProbes: []
        )
    }

    // MARK: - Age capture

    func testCreateProfileStoresAgeWithCaptureDate() {
        let captured = Date(timeIntervalSince1970: 1_700_000_000)
        let store = makeStore(now: { captured })
        let profile = store.createProfile(name: "Kid", avatarId: "🦊", ageYears: 6)
        XCTAssertEqual(profile.ageYears, 6)
        XCTAssertEqual(profile.ageCapturedAt, captured)
        XCTAssertEqual(profile.currentAge(asOf: captured), 6)
    }

    func testCreateProfileWithoutAgeLeavesItNil() {
        let store = makeStore()
        let profile = store.createProfile(name: "Kid", avatarId: "🦊")
        XCTAssertNil(profile.ageYears)
        XCTAssertNil(profile.currentAge)
    }

    func testCurrentAgeAdvancesByWholeElapsedYears() {
        let captured = Date(timeIntervalSince1970: 1_700_000_000)
        let store = makeStore(now: { captured })
        let profile = store.createProfile(name: "Kid", avatarId: "🦊", ageYears: 6)

        let elevenMonths = captured.addingTimeInterval(60 * 60 * 24 * 335)
        XCTAssertEqual(profile.currentAge(asOf: elevenMonths), 6, "not a whole year yet")
        let overOneYear = captured.addingTimeInterval(60 * 60 * 24 * 400)
        XCTAssertEqual(profile.currentAge(asOf: overOneYear), 7)
        let overTwoYears = captured.addingTimeInterval(60 * 60 * 24 * 740)
        XCTAssertEqual(profile.currentAge(asOf: overTwoYears), 8)
        XCTAssertEqual(profile.currentAge(asOf: captured.addingTimeInterval(-100)), 6, "clock going backwards never lowers age")
    }

    func testSetAgeUpdatesActiveProfileAndCaptureDate() {
        var clock = Date(timeIntervalSince1970: 1_700_000_000)
        let store = makeStore(now: { clock })
        let profile = store.createProfile(name: "Kid", avatarId: "🦊", ageYears: 6)
        clock = clock.addingTimeInterval(60 * 60 * 24 * 30)
        store.setAge(years: 8)
        XCTAssertEqual(profile.ageYears, 8)
        XCTAssertEqual(profile.ageCapturedAt, clock, "correction re-anchors the capture date")
    }

    // MARK: - Seeded-mastery lifecycle

    func testPlacementSeedsAreFlaggedAndPracticeEarnsThem() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊")
        store.recordPlacement(pack: makePack(), bandNumber: 3)

        XCTAssertEqual(store.mastery(skillId: "math-s1")?.seededByPlacement, true)
        XCTAssertEqual(store.mastery(skillId: "math-s2")?.seededByPlacement, true)
        XCTAssertNil(store.mastery(skillId: "math-s3"), "the placed band itself is not seeded")

        let lesson = Lesson(id: "l1", title: "L", primarySkillId: "math-s1", sortOrder: 0, xpReward: 10, exercises: [])
        store.recordCompletion(lesson: lesson, firstTryAccuracy: 1.0)
        XCTAssertEqual(store.mastery(skillId: "math-s1")?.seededByPlacement, false, "real practice earns the row")
    }

    func testResetPlacementDeletesOnlyStillSeededRowsForThatSubject() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊")
        store.recordPlacement(pack: makePack(subjectId: "math"), bandNumber: 3)
        store.recordPlacement(pack: makePack(subjectId: "reading"), bandNumber: 2)

        // math-s1 gets practiced; math-s2 stays a pure placement assumption.
        let lesson = Lesson(id: "l1", title: "L", primarySkillId: "math-s1", sortOrder: 0, xpReward: 10, exercises: [])
        store.recordCompletion(lesson: lesson, firstTryAccuracy: 1.0)

        store.resetPlacement(subjectId: "math", skillIdsInSubject: ["math-s1", "math-s2", "math-s3"])

        XCTAssertNil(store.subjectProgress(for: "math"), "placement row is gone")
        XCTAssertNotNil(store.mastery(skillId: "math-s1"), "practiced mastery survives the redo")
        XCTAssertNil(store.mastery(skillId: "math-s2"), "phantom seeded mastery is unwound")
        XCTAssertNotNil(store.subjectProgress(for: "reading"), "other subject untouched")
        XCTAssertEqual(store.mastery(skillId: "reading-s1")?.seededByPlacement, true, "other subject's seeds untouched")
    }
}
