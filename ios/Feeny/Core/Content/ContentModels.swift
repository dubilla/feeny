import Foundation

/// Wire format of GET /api/v1/manifest.
struct Manifest: Decodable, Equatable {
    struct SubjectEntry: Decodable, Equatable {
        let id: String
        let title: String
        let sortOrder: Int
        let version: Int
    }

    let subjects: [SubjectEntry]
}

/// Wire format of GET /api/v1/subjects/:id/pack — the whole downloadable subject.
/// Mirrors `subjectPackSchema` in curriculum/src/schema/pack.ts.
struct SubjectPack: Decodable, Equatable {
    let subjectId: String
    let version: Int
    let generatedAt: String
    let bands: [Band]
    let skills: [Skill]
    let units: [LearningUnit]
    let placementProbes: [PlacementProbe]
}

struct Band: Decodable, Equatable, Identifiable {
    let id: String
    let bandNumber: Int
    let title: String
    let description: String
}

struct Skill: Decodable, Equatable, Identifiable {
    let id: String
    let bandId: String
    let title: String
    let sortOrder: Int
}

/// "Unit" clashes with Swift's `Void` type alias, hence LearningUnit.
struct LearningUnit: Decodable, Equatable, Identifiable {
    let id: String
    let bandId: String
    let title: String
    let icon: String
    let sortOrder: Int
    let lessons: [Lesson]
}

struct Lesson: Decodable, Equatable, Identifiable {
    let id: String
    let title: String
    let primarySkillId: String
    let sortOrder: Int
    let xpReward: Int
    let exercises: [Exercise]

    /// Exercises the current app version can render.
    var playableExercises: [Exercise] {
        exercises.filter { !$0.payload.isUnsupported }
    }
}

struct PlacementProbe: Decodable, Equatable {
    let bandNumber: Int
    let exerciseIds: [String]
}
