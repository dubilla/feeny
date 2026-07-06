import XCTest
@testable import Feeny

final class GameEconomyTests: XCTestCase {
    // MARK: - Levels

    func testLevelThresholds() {
        // L1→2 costs 50, L2→3 costs 75, L3→4 costs 100.
        XCTAssertEqual(GameEconomy.level(forXP: 0), 1)
        XCTAssertEqual(GameEconomy.level(forXP: 49), 1)
        XCTAssertEqual(GameEconomy.level(forXP: 50), 2)
        XCTAssertEqual(GameEconomy.level(forXP: 124), 2)
        XCTAssertEqual(GameEconomy.level(forXP: 125), 3)
        XCTAssertEqual(GameEconomy.level(forXP: 225), 4)
    }

    func testLevelProgressStaysInUnitRange() {
        for xp in stride(from: 0, through: 1000, by: 7) {
            let progress = GameEconomy.levelProgress(forXP: xp)
            XCTAssertGreaterThanOrEqual(progress, 0, "xp \(xp)")
            XCTAssertLessThan(progress, 1, "xp \(xp)")
        }
        XCTAssertEqual(GameEconomy.levelProgress(forXP: 0), 0)
    }

    func testPerfectLessonBonus() {
        XCTAssertEqual(GameEconomy.xpForLesson(baseReward: 10, firstTryAccuracy: 1.0), 15)
        XCTAssertEqual(GameEconomy.xpForLesson(baseReward: 10, firstTryAccuracy: 0.99), 10)
    }

    // MARK: - Catalog

    func testCatalogHas24PerSubjectWithUniqueIds() {
        XCTAssertEqual(CollectibleCatalog.feenlings(for: "math").count, 24)
        XCTAssertEqual(CollectibleCatalog.feenlings(for: "reading").count, 24)
        XCTAssertEqual(Set(CollectibleCatalog.all.map(\.id)).count, CollectibleCatalog.all.count)
    }

    func testCatalogRarityMix() {
        for subject in ["math", "reading"] {
            let feenlings = CollectibleCatalog.feenlings(for: subject)
            XCTAssertEqual(feenlings.filter { $0.rarity == .common }.count, 14, subject)
            XCTAssertEqual(feenlings.filter { $0.rarity == .rare }.count, 7, subject)
            XCTAssertEqual(feenlings.filter { $0.rarity == .shiny }.count, 3, subject)
        }
    }

    func testStartersExistInCatalog() {
        XCTAssertEqual(CollectibleCatalog.starters.count, 3)
        for starter in CollectibleCatalog.starters {
            XCTAssertNotNil(CollectibleCatalog.feenling(id: starter.id))
            XCTAssertEqual(starter.rarity, .common, "starters should be commons, not spoilers")
        }
    }

    func testRollIsDeterministicWithSeededRNGAndStaysInSubject() {
        var rngA: any RandomNumberGenerator = SplitMix64(seed: 42)
        var rngB: any RandomNumberGenerator = SplitMix64(seed: 42)
        for _ in 0..<50 {
            let a = CollectibleCatalog.roll(subjectId: "math", using: &rngA)
            let b = CollectibleCatalog.roll(subjectId: "math", using: &rngB)
            XCTAssertEqual(a, b)
            XCTAssertEqual(a.subjectId, "math")
        }
    }

    func testRollDistributionRoughlyMatchesOdds() {
        var rng: any RandomNumberGenerator = SplitMix64(seed: 7)
        var tally: [Feenling.Rarity: Int] = [:]
        let n = 5000
        for _ in 0..<n {
            tally[CollectibleCatalog.roll(subjectId: "reading", using: &rng).rarity, default: 0] += 1
        }
        // 70/25/5 with generous slack — this guards against wiring bugs
        // (swapped tiers, dead shiny branch), not statistical purity.
        XCTAssertEqual(Double(tally[.common] ?? 0) / Double(n), 0.70, accuracy: 0.05)
        XCTAssertEqual(Double(tally[.rare] ?? 0) / Double(n), 0.25, accuracy: 0.05)
        XCTAssertEqual(Double(tally[.shiny] ?? 0) / Double(n), 0.05, accuracy: 0.03)
        XCTAssertGreaterThan(tally[.shiny] ?? 0, 0, "shinies must be reachable")
    }
}

/// Tiny deterministic RNG for tests.
struct SplitMix64: RandomNumberGenerator {
    private var state: UInt64
    init(seed: UInt64) { state = seed }

    mutating func next() -> UInt64 {
        state &+= 0x9E3779B97F4A7C15
        var z = state
        z = (z ^ (z >> 30)) &* 0xBF58476D1CE4E5B9
        z = (z ^ (z >> 27)) &* 0x94D049BB133111EB
        return z ^ (z >> 31)
    }
}
