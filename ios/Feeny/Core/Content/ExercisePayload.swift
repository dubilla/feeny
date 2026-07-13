import Foundation

/// Swift mirror of the zod discriminated union in curriculum/src/schema/exercises.ts.
/// Contract rule: unknown `type` values decode as `.unsupported` and are skipped
/// by the lesson player — an old app must never crash on a new pack.
/// Changes here ship in the same PR as the zod schema + regenerated fixtures.

struct Visual: Decodable, Equatable {
    enum Kind: String, Decodable {
        case emoji
        case asset
    }

    let kind: Kind
    let value: String
}

struct ExercisePrompt: Decodable, Equatable {
    let text: String
    let spokenText: String?

    /// What TTS reads. A 5-year-old may not be able to read `text`.
    var spoken: String { spokenText ?? text }
}

struct ChoiceOption: Decodable, Equatable, Identifiable {
    let id: String
    let visual: Visual?
    let label: String?
}

struct MultipleChoiceImagePayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let options: [ChoiceOption]
    let correctOptionId: String

    func isCorrect(optionId: String) -> Bool { optionId == correctOptionId }
}

struct CountObjectsPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let object: Visual
    let count: Int
    let choices: [Int]

    func isCorrect(choice: Int) -> Bool { choice == count }
}

/// A tile face: visual and/or short label (mirror of `tileFaceSchema`).
struct TileFace: Decodable, Equatable {
    let visual: Visual?
    let label: String?
}

struct MatchPair: Decodable, Equatable, Identifiable {
    let id: String
    let left: TileFace
    let right: TileFace
}

struct TapMatchPairsPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let pairs: [MatchPair]
}

/// Audio-first: spokenText is the stimulus; the UI must not print the answer.
struct ListenAndPickPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let options: [ChoiceOption]
    let correctOptionId: String

    func isCorrect(optionId: String) -> Bool { optionId == correctOptionId }
}

struct OrderingItem: Decodable, Equatable, Identifiable {
    let id: String
    let visual: Visual?
    let label: String?
}

struct OrderingPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let items: [OrderingItem]
    let correctOrder: [String]
}

struct WordBankChip: Decodable, Equatable, Identifiable {
    let id: String
    let label: String
}

struct FillBlankWordBankPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    /** Display template containing exactly one `___` blank. */
    let template: String
    let bank: [WordBankChip]
    let correctChipId: String

    func isCorrect(chipId: String) -> Bool { chipId == correctChipId }

    var templateParts: (before: String, after: String) {
        let pieces = template.components(separatedBy: "___")
        return (pieces.first ?? "", pieces.count > 1 ? pieces[1] : "")
    }
}

struct SoundTile: Decodable, Equatable, Identifiable {
    /// Position is identity — the payload carries no ids (mirror of the zod
    /// `sounds` array, which is ordered and unindexed). Assigned on decode.
    let id: Int
    let grapheme: String
}

/// Fundations tap-out: spoken word up front, tap boxes left→right to reveal
/// each grapheme, blend on completion. Kinesthetic practice, always warm.
struct TapTheSoundsPayload: Decodable, Equatable {
    let prompt: ExercisePrompt
    let word: String
    let visual: Visual?
    let sounds: [SoundTile]

    private enum CodingKeys: String, CodingKey {
        case prompt, word, visual, sounds
    }

    private struct RawSound: Decodable { let grapheme: String }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        prompt = try container.decode(ExercisePrompt.self, forKey: .prompt)
        word = try container.decode(String.self, forKey: .word)
        visual = try container.decodeIfPresent(Visual.self, forKey: .visual)
        let raw = try container.decode([RawSound].self, forKey: .sounds)
        sounds = raw.enumerated().map { SoundTile(id: $0.offset, grapheme: $0.element.grapheme) }
    }

    init(prompt: ExercisePrompt, word: String, visual: Visual?, sounds: [SoundTile]) {
        self.prompt = prompt
        self.word = word
        self.visual = visual
        self.sounds = sounds
    }
}

enum ExercisePayload: Equatable {
    case multipleChoiceImage(MultipleChoiceImagePayload)
    case countObjects(CountObjectsPayload)
    case tapMatchPairs(TapMatchPairsPayload)
    case listenAndPick(ListenAndPickPayload)
    case ordering(OrderingPayload)
    case fillBlankWordBank(FillBlankWordBankPayload)
    case tapTheSounds(TapTheSoundsPayload)
    case unsupported(type: String)

    var isUnsupported: Bool {
        if case .unsupported = self { return true }
        return false
    }

    /// Kinesthetic-practice types (tap-out) always succeed, so they must not
    /// count toward first-try accuracy — otherwise they silently inflate the
    /// mastery signal that drives band advancement.
    var contributesToAccuracy: Bool {
        switch self {
        case .tapTheSounds, .unsupported: false
        default: true
        }
    }

    var prompt: ExercisePrompt? {
        switch self {
        case .multipleChoiceImage(let payload): payload.prompt
        case .countObjects(let payload): payload.prompt
        case .tapMatchPairs(let payload): payload.prompt
        case .listenAndPick(let payload): payload.prompt
        case .ordering(let payload): payload.prompt
        case .fillBlankWordBank(let payload): payload.prompt
        case .tapTheSounds(let payload): payload.prompt
        case .unsupported: nil
        }
    }
}

struct Exercise: Decodable, Equatable, Identifiable {
    let id: String
    let payload: ExercisePayload

    private enum CodingKeys: String, CodingKey {
        case id, type, payload
    }

    init(id: String, payload: ExercisePayload) {
        self.id = id
        self.payload = payload
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        id = try container.decode(String.self, forKey: .id)
        let type = try container.decode(String.self, forKey: .type)
        switch type {
        case "multipleChoiceImage":
            payload = .multipleChoiceImage(try container.decode(MultipleChoiceImagePayload.self, forKey: .payload))
        case "countObjects":
            payload = .countObjects(try container.decode(CountObjectsPayload.self, forKey: .payload))
        case "tapMatchPairs":
            payload = .tapMatchPairs(try container.decode(TapMatchPairsPayload.self, forKey: .payload))
        case "listenAndPick":
            payload = .listenAndPick(try container.decode(ListenAndPickPayload.self, forKey: .payload))
        case "ordering":
            payload = .ordering(try container.decode(OrderingPayload.self, forKey: .payload))
        case "fillBlankWordBank":
            payload = .fillBlankWordBank(try container.decode(FillBlankWordBankPayload.self, forKey: .payload))
        case "tapTheSounds":
            payload = .tapTheSounds(try container.decode(TapTheSoundsPayload.self, forKey: .payload))
        default:
            payload = .unsupported(type: type)
        }
    }
}
