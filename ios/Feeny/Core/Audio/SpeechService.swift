import AVFoundation
import Observation

/// Text-to-speech for prompts. Kids aged 5 may not read yet, so every prompt
/// auto-speaks on appear and replays from the speaker button.
@Observable
@MainActor
final class SpeechService {
    private let synthesizer = AVSpeechSynthesizer()

    /// Slightly slower than default — child-appropriate pacing.
    private let rate: Float = 0.45

    func speak(_ text: String) {
        synthesizer.stopSpeaking(at: .immediate)
        let utterance = AVSpeechUtterance(string: text)
        utterance.rate = rate
        utterance.voice = AVSpeechSynthesisVoice(language: "en-US")
        synthesizer.speak(utterance)
    }

    func stop() {
        synthesizer.stopSpeaking(at: .immediate)
    }
}
