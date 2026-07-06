import SwiftData
import XCTest
@testable import Feeny

/// ProgressStore reward mechanics against an in-memory container:
/// unit completion pays the bonus + egg exactly once, hatches land in the
/// collection, duplicates pay sparkle XP, and streaks tick with the clock.
@MainActor
final class RewardStoreTests: XCTestCase {
    private var container: ModelContainer!

    override func setUp() async throws {
        let config = ModelConfiguration(isStoredInMemoryOnly: true)
        container = try ModelContainer(
            for: KidProfile.self, LessonCompletion.self, SubjectProgress.self, SkillMastery.self,
            OwnedFeenling.self,
            configurations: config
        )
    }

    private func makeStore(
        now: @escaping () -> Date = { Date() },
        rng: any RandomNumberGenerator = SplitMix64(seed: 1)
    ) -> ProgressStore {
        ProgressStore(container: container, now: now, rng: rng)
    }

    private func lesson(_ id: String) -> Lesson {
        Lesson(id: id, title: id, primarySkillId: "skill-1", sortOrder: 0, xpReward: 10, exercises: [])
    }

    private var unit: LearningUnit {
        LearningUnit(
            id: "unit-1", bandId: "band-1", title: "Unit 1", icon: "⭐", sortOrder: 0,
            lessons: [lesson("l1"), lesson("l2")]
        )
    }

    // MARK: - Unit completion

    func testFinalLessonOfUnitPaysBonusAndEgg() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊", starterFeenlingId: "math-dot")

        let first = store.recordCompletion(lesson: lesson("l1"), firstTryAccuracy: 0.5, unit: unit, subjectId: "math")
        XCTAssertFalse(first.unitCompleted)
        XCTAssertEqual(store.pendingEggCount(subjectId: "math"), 0)

        let second = store.recordCompletion(lesson: lesson("l2"), firstTryAccuracy: 0.5, unit: unit, subjectId: "math")
        XCTAssertTrue(second.unitCompleted)
        XCTAssertTrue(second.eggEarned)
        XCTAssertEqual(second.xpEarned, 10 + GameEconomy.unitCompletionXP)
        XCTAssertEqual(store.pendingEggCount(subjectId: "math"), 1)
    }

    func testReplayingCompletedUnitNeverReawards() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊")
        store.recordCompletion(lesson: lesson("l1"), firstTryAccuracy: 1, unit: unit, subjectId: "math")
        store.recordCompletion(lesson: lesson("l2"), firstTryAccuracy: 1, unit: unit, subjectId: "math")

        let replay = store.recordCompletion(lesson: lesson("l2"), firstTryAccuracy: 1, unit: unit, subjectId: "math")
        XCTAssertFalse(replay.unitCompleted)
        XCTAssertEqual(store.pendingEggCount(subjectId: "math"), 1, "still just the one egg")
    }

    func testReviewLessonWithoutUnitNeverHatches() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊")
        let rewards = store.recordCompletion(lesson: lesson("review"), firstTryAccuracy: 1)
        XCTAssertFalse(rewards.eggEarned)
        XCTAssertEqual(store.pendingEggCount(), 0)
    }

    // MARK: - Hatching

    func testHatchConsumesEggAndJoinsCollection() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊")
        store.recordCompletion(lesson: lesson("l1"), firstTryAccuracy: 1, unit: unit, subjectId: "math")
        store.recordCompletion(lesson: lesson("l2"), firstTryAccuracy: 1, unit: unit, subjectId: "math")

        let result = store.hatchEgg(subjectId: "math")
        XCTAssertNotNil(result)
        XCTAssertTrue(result!.isNew)
        XCTAssertEqual(result!.feenling.subjectId, "math")
        XCTAssertEqual(store.pendingEggCount(subjectId: "math"), 0)
        XCTAssertEqual(store.ownedFeenlingCounts[result!.feenling.id], 1)

        XCTAssertNil(store.hatchEgg(subjectId: "math"), "no egg owed → no hatch")
    }

    func testDuplicateHatchPaysSparkleBonus() {
        // A constant RNG always rolls the same Feenling, forcing a duplicate.
        let store = makeStore(rng: ConstantRNG())
        let profile = store.createProfile(name: "Kid", avatarId: "🦊")
        profile.pendingEggSubjectIds = ["math", "math"]

        let first = store.hatchEgg(subjectId: "math")!
        let xpAfterFirst = store.totalXP
        let second = store.hatchEgg(subjectId: "math")!

        XCTAssertEqual(first.feenling, second.feenling)
        XCTAssertTrue(first.isNew)
        XCTAssertFalse(second.isNew)
        XCTAssertEqual(second.sparkleXP, GameEconomy.sparkleBonusXP)
        XCTAssertEqual(store.totalXP, xpAfterFirst + GameEconomy.sparkleBonusXP)
        XCTAssertEqual(store.ownedFeenlingCounts[second.feenling.id], 2)
    }

    // MARK: - Starter

    func testStarterJoinsCollectionAtCreation() {
        let store = makeStore()
        store.createProfile(name: "Kid", avatarId: "🦊", starterFeenlingId: "reading-peep")
        XCTAssertEqual(store.starterFeenling?.id, "reading-peep")
        XCTAssertEqual(store.ownedFeenlingCounts["reading-peep"], 1)
    }

    // MARK: - Streaks through the store

    func testStreakTicksAcrossSimulatedDays() {
        var now = Date(timeIntervalSince1970: 1_780_000_000)
        let store = makeStore(now: { now })
        store.createProfile(name: "Kid", avatarId: "🦊")

        let day1 = store.recordCompletion(lesson: lesson("a"), firstTryAccuracy: 1)
        XCTAssertEqual(day1.streakEvent, .started)

        now = now.addingTimeInterval(86_400)
        let day2 = store.recordCompletion(lesson: lesson("b"), firstTryAccuracy: 1)
        XCTAssertEqual(day2.streakEvent, .extended)
        XCTAssertEqual(store.streakDisplay.count, 2)
        XCTAssertTrue(store.streakDisplay.isAwakeToday)

        let sameDay = store.recordCompletion(lesson: lesson("c"), firstTryAccuracy: 1)
        XCTAssertEqual(sameDay.streakEvent, .alreadyCounted)
    }

    func testStreaksArePerProfile() {
        var now = Date(timeIntervalSince1970: 1_780_000_000)
        let store = makeStore(now: { now })
        store.createProfile(name: "A", avatarId: "🦊")
        store.recordCompletion(lesson: lesson("a"), firstTryAccuracy: 1)
        now = now.addingTimeInterval(86_400)
        store.recordCompletion(lesson: lesson("b"), firstTryAccuracy: 1)
        XCTAssertEqual(store.streakDisplay.count, 2)

        store.createProfile(name: "B", avatarId: "🐸")
        XCTAssertEqual(store.streakDisplay.count, 0, "sibling starts cold")
    }
}

/// Always returns the same value → always rolls the same Feenling.
private struct ConstantRNG: RandomNumberGenerator {
    func next() -> UInt64 { 0 }
}
