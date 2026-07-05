import Foundation
import Observation

/// Pulls the manifest, downloads packs whose version is newer than the cache,
/// and atomically replaces cache files. Every failure is silent-but-logged:
/// the kid keeps playing whatever is cached.
@Observable
@MainActor
final class ContentSyncService {
    enum Status: Equatable {
        case idle
        case syncing
        case failed(String)
    }

    private(set) var status: Status = .idle
    private(set) var lastSyncAt: Date?

    private let contentStore: ContentStore

    init(contentStore: ContentStore) {
        self.contentStore = contentStore
    }

    /// Throttled to once per day unless `force` — call freely on foreground.
    func refreshIfNeeded(force: Bool = false) async {
        if !force, let last = lastSyncAt, Date().timeIntervalSince(last) < 24 * 60 * 60 {
            return
        }
        guard status != .syncing else { return }
        status = .syncing

        do {
            let client = try APIClient.fromInfoPlist()
            let manifest = try await client.fetchManifest()
            var changed = false

            for subject in manifest.subjects {
                let cachedVersion = contentStore.cachedVersion(for: subject.id)
                guard cachedVersion == nil || cachedVersion! < subject.version else { continue }

                let etag = cachedVersion.map { "\"\(subject.id)-v\($0)\"" }
                let response = try await client.fetchPack(subjectId: subject.id, etag: etag)
                guard case .pack(let data, _) = response else { continue }

                // Validate the full decode BEFORE the bytes replace the cache —
                // a bad pack must never brick offline play.
                _ = try JSONDecoder().decode(SubjectPack.self, from: data)
                try ContentStore.writePack(data: data, subjectId: subject.id)
                changed = true
            }

            if changed || contentStore.packs.isEmpty {
                contentStore.reload()
            }
            lastSyncAt = Date()
            status = .idle
        } catch {
            status = .failed(error.localizedDescription)
        }
    }
}
