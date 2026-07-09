import AVFoundation
import Observation

/// Text-to-speech for prompts. Kids aged 5 may not read yet, so every prompt
/// auto-speaks on appear and replays from the speaker button.
///
/// Owns the app's shared AVAudioSession: category `.playback` so narration
/// plays even when the iPad is muted (spoken prompts are load-bearing content
/// for pre-readers, not a nicety), with `.mixWithOthers` so we never kill a
/// grown-up's podcast in another app. Sound effects share this session and
/// stay polite via their own low player volume.
@Observable
@MainActor
final class SpeechService {
    private let synthesizer = AVSpeechSynthesizer()

    /// Slightly slower than default — child-appropriate pacing.
    private let rate: Float = 0.45

    /// Parent-facing toggle from grown-up settings. Defaults to on.
    var isEnabled: Bool {
        didSet { UserDefaults.standard.set(isEnabled, forKey: Self.enabledDefaultsKey) }
    }

    static let enabledDefaultsKey = "feeny.speechEnabled"

    /// Hardware output volume (0–1), tracked live so views can react when a
    /// kid can't hear anything even though speech is on.
    private(set) var outputVolume: Float

    /// True when spoken prompts can't reach the kid — parent turned them off
    /// or the volume is all the way down. Audio-only exercises must show
    /// their words instead of leaving the kid guessing.
    var promptAudioUnavailable: Bool { !isEnabled || outputVolume == 0 }

    /// True when we should visually nudge to turn the volume up: speech is
    /// wanted but inaudible. (Toggle off is a parent choice — no nudge.)
    var shouldNudgeVolume: Bool { isEnabled && outputVolume == 0 }

    @ObservationIgnored private var volumeObservation: NSKeyValueObservation?
    @ObservationIgnored private var interruptionObserver: NSObjectProtocol?

    init() {
        isEnabled = UserDefaults.standard.object(forKey: Self.enabledDefaultsKey) as? Bool ?? true

        let session = AVAudioSession.sharedInstance()
        try? session.setCategory(.playback, options: .mixWithOthers)
        try? session.setActive(true)
        outputVolume = session.outputVolume

        // outputVolume is only KVO-reliable while the session is active.
        volumeObservation = session.observe(\.outputVolume, options: [.new]) { [weak self] _, change in
            guard let volume = change.newValue else { return }
            Task { @MainActor [weak self] in
                self?.outputVolume = volume
            }
        }

        // Siri/FaceTime/alarms deactivate our session; without recovery the
        // next prompt after an interruption is silently dropped.
        interruptionObserver = NotificationCenter.default.addObserver(
            forName: AVAudioSession.interruptionNotification,
            object: session,
            queue: .main
        ) { [weak self] notification in
            let rawType = notification.userInfo?[AVAudioSessionInterruptionTypeKey] as? UInt
            Task { @MainActor [weak self] in
                self?.handleInterruption(rawType: rawType)
            }
        }
    }

    deinit {
        if let interruptionObserver {
            NotificationCenter.default.removeObserver(interruptionObserver)
        }
    }

    func speak(_ text: String) {
        guard isEnabled else { return }
        synthesizer.stopSpeaking(at: .immediate)
        // Reactivate defensively — another app or an interruption may have
        // deactivated the session since launch.
        try? AVAudioSession.sharedInstance().setActive(true)
        let utterance = AVSpeechUtterance(string: text)
        utterance.rate = rate
        // The en-US voice can be missing (deleted voice assets); fall back to
        // the device language rather than an unintended nil voice.
        utterance.voice = AVSpeechSynthesisVoice(language: "en-US")
            ?? AVSpeechSynthesisVoice(language: AVSpeechSynthesisVoice.currentLanguageCode())
        synthesizer.speak(utterance)
    }

    func stop() {
        synthesizer.stopSpeaking(at: .immediate)
    }

    private func handleInterruption(rawType: UInt?) {
        guard let rawType,
              let type = AVAudioSession.InterruptionType(rawValue: rawType) else { return }
        switch type {
        case .began:
            // The prompt is lost mid-word anyway; stop cleanly. The speaker
            // button replays it on demand.
            synthesizer.stopSpeaking(at: .immediate)
        case .ended:
            try? AVAudioSession.sharedInstance().setActive(true)
        @unknown default:
            break
        }
    }
}
