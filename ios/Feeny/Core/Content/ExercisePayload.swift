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

enum ExercisePayload: Equatable {
    case multipleChoiceImage(MultipleChoiceImagePayload)
    case countObjects(CountObjectsPayload)
    case tapMatchPairs(TapMatchPairsPayload)
    case listenAndPick(ListenAndPickPayload)
    case ordering(OrderingPayload)
    case fillBlankWordBank(FillBlankWordBankPayload)
    case unsupported(type: String)

    var isUnsupported: Bool {
        if case .unsupported = self { return true }
        return false
    }

    var prompt: ExercisePrompt? {
        switch self {
        case .multipleChoiceImage(let payload): payload.prompt
        case .countObjects(let payload): payload.prompt
        case .tapMatchPairs(let payload): payload.prompt
        case .listenAndPick(let payload): payload.prompt
        case .ordering(let payload): payload.prompt
        case .fillBlankWordBank(let payload): payload.prompt
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
        default:
            payload = .unsupported(type: type)
        }
    }
}
