import Foundation
import Observation

/// In-memory view of the cached subject packs. Packs live as raw JSON files in
/// Application Support/packs/{subjectId}.json — immutable value data, deliberately
/// not SwiftData. `ContentSyncService` replaces files atomically, then calls reload().
@Observable
@MainActor
final class ContentStore {
    private(set) var packs: [SubjectPack] = []

    var subjectsSorted: [SubjectPack] { packs }

    nonisolated static var packsDirectory: URL {
        let base = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        return base.appending(path: "packs", directoryHint: .isDirectory)
    }

    func pack(for subjectId: String) -> SubjectPack? {
        packs.first { $0.subjectId == subjectId }
    }

    func cachedVersion(for subjectId: String) -> Int? {
        pack(for: subjectId)?.version
    }

    func lesson(id: String) -> Lesson? {
        for pack in packs {
            for unit in pack.units {
                if let lesson = unit.lessons.first(where: { $0.id == id }) {
                    return lesson
                }
            }
        }
        return nil
    }

    /// Loads every cached pack from disk. Unreadable files are skipped, not fatal —
    /// the next sync overwrites them.
    func reload() {
        let dir = Self.packsDirectory
        guard let files = try? FileManager.default.contentsOfDirectory(at: dir, includingPropertiesForKeys: nil) else {
            packs = []
            return
        }
        let decoder = JSONDecoder()
        packs = files
            .filter { $0.pathExtension == "json" }
            .compactMap { url -> SubjectPack? in
                guard let data = try? Data(contentsOf: url) else { return nil }
                return try? decoder.decode(SubjectPack.self, from: data)
            }
            .sorted { $0.subjectId < $1.subjectId }
    }

    /// Atomic write: decode-validated `data` lands as the new cache file in one move.
    nonisolated static func writePack(data: Data, subjectId: String) throws {
        let dir = packsDirectory
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let destination = dir.appending(path: "\(subjectId).json")
        try data.write(to: destination, options: .atomic)
    }
}
