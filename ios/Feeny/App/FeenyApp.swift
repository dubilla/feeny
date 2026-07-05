import SwiftData
import SwiftUI

@main
struct FeenyApp: App {
    private let modelContainer: ModelContainer
    @State private var contentStore: ContentStore
    @State private var syncService: ContentSyncService
    @State private var progressStore: ProgressStore
    @State private var speechService = SpeechService()

    init() {
        do {
            modelContainer = try ModelContainer(for: KidProfile.self, LessonCompletion.self)
        } catch {
            fatalError("Could not create SwiftData container: \(error)")
        }
        let content = ContentStore()
        content.reload()
        _contentStore = State(initialValue: content)
        _syncService = State(initialValue: ContentSyncService(contentStore: content))
        _progressStore = State(initialValue: ProgressStore(container: modelContainer))
    }

    var body: some Scene {
        WindowGroup {
            LessonListView()
                .environment(contentStore)
                .environment(syncService)
                .environment(progressStore)
                .environment(speechService)
                .modelContainer(modelContainer)
        }
    }
}
