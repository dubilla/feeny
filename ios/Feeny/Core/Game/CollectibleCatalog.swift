import Foundation

/// A collectible creature. 24 per subject; hatched from unit-completion eggs.
struct Feenling: Identifiable, Equatable {
    enum Rarity: String, CaseIterable {
        case common, rare, shiny

        var label: String {
            switch self {
            case .common: "Friend"
            case .rare: "Rare friend"
            case .shiny: "SHINY friend"
            }
        }
    }

    let id: String
    let subjectId: String
    let name: String
    let emoji: String
    let rarity: Rarity
}

/// The full Feenling roster and the egg-hatch roll. Content-static (ships with
/// the app); which ones a kid OWNS lives in SwiftData via ProgressStore.
enum CollectibleCatalog {
    /// Hatch odds by rarity tier (mirrored in docs/ECONOMY.md).
    static let commonChance = 0.70
    static let rareChance = 0.25
    // shiny = the remaining 0.05

    // MARK: - Roster

    /// Math: Number Critters — counting-flavored creatures.
    static let numberCritters: [Feenling] = [
        // Commons (14)
        f("math", "dot", "Dot", "🐞", .common),
        f("math", "snappy", "Snappy", "🦀", .common),
        f("math", "bloop", "Bloop", "🐟", .common),
        f("math", "hopsy", "Hopsy", "🐰", .common),
        f("math", "waddle", "Waddle", "🐧", .common),
        f("math", "munch", "Munch", "🐛", .common),
        f("math", "pip", "Pip", "🐤", .common),
        f("math", "ziggy", "Ziggy", "🦎", .common),
        f("math", "fuzz", "Fuzz", "🐝", .common),
        f("math", "shelly", "Shelly", "🐢", .common),
        f("math", "squeak", "Squeak", "🐭", .common),
        f("math", "puddle", "Puddle", "🦆", .common),
        f("math", "nibbles", "Nibbles", "🐿️", .common),
        f("math", "spots", "Spots", "🐸", .common),
        // Rares (7)
        f("math", "octo", "Octo", "🐙", .rare),
        f("math", "deca", "Deca", "🦑", .rare),
        f("math", "spike", "Spike", "🦔", .rare),
        f("math", "chomp", "Chomp", "🐊", .rare),
        f("math", "bamboo", "Bamboo", "🐼", .rare),
        f("math", "tusk", "Tusk", "🐘", .rare),
        f("math", "loop", "Loop", "🦩", .rare),
        // Shinies (3)
        f("math", "prism", "Prism", "🦄", .shiny),
        f("math", "nova", "Nova", "🐉", .shiny),
        f("math", "zillion", "Zillion", "🦖", .shiny),
    ]

    /// Reading: Word Birds — chatty featherweights.
    static let wordBirds: [Feenling] = [
        // Commons (14)
        f("reading", "peep", "Peep", "🐣", .common),
        f("reading", "chick", "Chick", "🐥", .common),
        f("reading", "cluck", "Cluck", "🐔", .common),
        f("reading", "quack", "Quack", "🦆", .common),
        f("reading", "coo", "Coo", "🕊️", .common),
        f("reading", "chirp", "Chirp", "🐦", .common),
        f("reading", "waddles", "Waddles", "🐧", .common),
        f("reading", "gobble", "Gobble", "🦃", .common),
        f("reading", "doodle", "Doodle", "🐓", .common),
        f("reading", "inky", "Inky", "🐦‍⬛", .common),
        f("reading", "sunny", "Sunny", "🐤", .common),
        f("reading", "breeze", "Breeze", "🪶", .common),
        f("reading", "pebble", "Pebble", "🪺", .common),
        f("reading", "flap", "Flap", "🦇", .common),
        // Rares (7)
        f("reading", "hoot", "Hoot", "🦉", .rare),
        f("reading", "swoop", "Swoop", "🦅", .rare),
        f("reading", "grace", "Grace", "🦢", .rare),
        f("reading", "pico", "Pico", "🦜", .rare),
        f("reading", "flash", "Flash", "🦩", .rare),
        f("reading", "plume", "Plume", "🦚", .rare),
        f("reading", "dodo", "Dodo", "🦤", .rare),
        // Shinies (3)
        f("reading", "fable", "Fable", "🐦‍🔥", .shiny),
        f("reading", "twinkle", "Twinkle", "🪽", .shiny),
        f("reading", "wisp", "Wisp", "✨", .shiny),
    ]

    static let all: [Feenling] = numberCritters + wordBirds

    /// Fixed trio offered at profile creation — friendly commons, one per vibe.
    static let starters: [Feenling] = [
        feenling(id: "math-dot")!,
        feenling(id: "reading-peep")!,
        feenling(id: "math-shelly")!,
    ]

    static func feenlings(for subjectId: String) -> [Feenling] {
        all.filter { $0.subjectId == subjectId }
    }

    static func feenling(id: String) -> Feenling? {
        all.first { $0.id == id }
    }

    /// Kid-facing family name for a subject's Feenlings.
    static func familyName(for subjectId: String) -> String {
        subjectId == "math" ? "Number Critters" : subjectId == "reading" ? "Word Birds" : "Feenlings"
    }

    // MARK: - Hatch roll

    /// Roll a hatch: pick the rarity tier at 70/25/5, then uniformly within it.
    /// Unknown subjects fall back to the whole roster so a hatch never fails.
    static func roll(subjectId: String, using rng: inout any RandomNumberGenerator) -> Feenling {
        func uniform() -> Double {
            // Top 53 bits of a UInt64 → uniform in [0, 1).
            Double(rng.next() >> 11) * 0x1.0p-53
        }
        let pool = feenlings(for: subjectId).isEmpty ? all : feenlings(for: subjectId)
        let tierRoll = uniform()
        let rarity: Feenling.Rarity = tierRoll < commonChance ? .common
            : tierRoll < commonChance + rareChance ? .rare
            : .shiny
        let tier = pool.filter { $0.rarity == rarity }
        let candidates = tier.isEmpty ? pool : tier
        return candidates[min(candidates.count - 1, Int(uniform() * Double(candidates.count)))]
    }

    private static func f(
        _ subjectId: String, _ slug: String, _ name: String, _ emoji: String, _ rarity: Feenling.Rarity
    ) -> Feenling {
        Feenling(id: "\(subjectId)-\(slug)", subjectId: subjectId, name: name, emoji: emoji, rarity: rarity)
    }
}
