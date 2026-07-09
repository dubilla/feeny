import SwiftData
import SwiftUI

@main
struct FeenyApp: App {
    private let modelContainer: ModelContainer
    @State private var contentStore: ContentStore
    @State private var syncService: ContentSyncService
    @State private var progressStore: ProgressStore
    // Created in init (not inline) so a -feenyReset wipe of the audio
    // settings keys happens before the services read UserDefaults.
    @State private var speechService: SpeechService
    @State private var soundEffects: SoundEffects

    init() {
        // QA/UI-test hook: wipe all local state before anything loads.
        if CommandLine.arguments.contains("-feenyReset") {
            Self.wipeAllLocalState()
        }

        do {
            modelContainer = try ModelContainer(
                for: KidProfile.self, LessonCompletion.self, SubjectProgress.self, SkillMastery.self,
                OwnedFeenling.self
            )
        } catch {
            fatalError("Could not create SwiftData container: \(error)")
        }
        let content = ContentStore()
        content.reload()
        _contentStore = State(initialValue: content)
        _syncService = State(initialValue: ContentSyncService(contentStore: content))
        _progressStore = State(initialValue: ProgressStore(container: modelContainer))
        // SpeechService first: it configures the shared audio session.
        _speechService = State(initialValue: SpeechService())
        _soundEffects = State(initialValue: SoundEffects())
    }

    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(contentStore)
                .environment(syncService)
                .environment(progressStore)
                .environment(speechService)
                .environment(soundEffects)
                .modelContainer(modelContainer)
        }
    }

    private static func wipeAllLocalState() {
        let fm = FileManager.default
        let appSupport = fm.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        try? fm.removeItem(at: appSupport.appending(path: "packs"))
        // SwiftData default store lives in Application Support.
        for name in ["default.store", "default.store-shm", "default.store-wal"] {
            try? fm.removeItem(at: appSupport.appending(path: name))
        }
        // Audio settings live in UserDefaults; reset those too so QA/UI-test
        // runs always start from the defaults (both toggles on).
        for key in [SpeechService.enabledDefaultsKey, SoundEffects.enabledDefaultsKey] {
            UserDefaults.standard.removeObject(forKey: key)
        }
    }
}
