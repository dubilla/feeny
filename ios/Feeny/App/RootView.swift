import SwiftUI

/// Top-level switch: no profile selected → picker; otherwise the subject home.
struct RootView: View {
    @Environment(ProgressStore.self) private var progressStore

    var body: some View {
        if progressStore.activeProfile == nil {
            ProfilePickerView()
        } else {
            SubjectHomeView()
        }
    }
}
