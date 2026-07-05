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

enum ExercisePayload: Equatable {
    case multipleChoiceImage(MultipleChoiceImagePayload)
    case countObjects(CountObjectsPayload)
    case unsupported(type: String)

    var isUnsupported: Bool {
        if case .unsupported = self { return true }
        return false
    }

    var prompt: ExercisePrompt? {
        switch self {
        case .multipleChoiceImage(let payload): payload.prompt
        case .countObjects(let payload): payload.prompt
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
        default:
            payload = .unsupported(type: type)
        }
    }
}
