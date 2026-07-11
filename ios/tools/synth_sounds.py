#!/usr/bin/env python3
"""Feeny sound palette — one instrument family: soft mallets.

Synthesizes the interaction sounds (marimba-like: fundamental + 4th partial
+ faint strike transient, exponential decay) and converts them to .caf via
afconvert. Pure stdlib; no numpy.

Regenerate:  python3 ios/tools/synth_sounds.py
Palette doc: docs/DESIGN_LANGUAGE.md (Sound section)

Events (wired screen-by-screen as slices land):
  tap.caf        option/card touch — soft, unobtrusive
  tick.caf       progress increment — tiny, higher
  wrong.caf      warm "hm, try again?" — rising step, curious not corrective
  celebrate.caf  small win arpeggio
  crack1-3.caf   hatch: three rising knocks as the shell gives way
  pop.caf        hatch: the give
  reveal.caf     hatch: warm C-major bloom
  (correct/levelup keep their original files until their screens' slices)
"""
import math
import os
import struct
import subprocess
import tempfile
import wave

RATE = 44100
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "Feeny", "Resources", "Sounds")

# Marimba-ish partials: (multiple of fundamental, relative amplitude)
PARTIALS = [(1.0, 1.0), (3.98, 0.22), (9.3, 0.06)]


def mallet(freq, dur, amp=0.5, decay=9.0, strike=0.012):
    """One mallet strike as a list of float samples in [-1, 1]."""
    n = int(RATE * dur)
    samples = [0.0] * n
    for i in range(n):
        t = i / RATE
        env = math.exp(-decay * t) * min(1.0, t / 0.002)  # 2ms attack
        s = sum(a * math.sin(2 * math.pi * freq * m * t) for m, a in PARTIALS)
        # Soft strike transient: brief filtered "knock" adds woodiness.
        if t < strike:
            s += 0.35 * math.sin(2 * math.pi * 1900 * t) * (1 - t / strike)
        samples[i] = amp * env * s / 1.6
    return samples


def mix(*events):
    """events: (offset_seconds, samples). Returns the mixed buffer."""
    total = max(int(off * RATE) + len(s) for off, s in events)
    out = [0.0] * total
    for off, s in events:
        base = int(off * RATE)
        for i, v in enumerate(s):
            out[base + i] += v
    peak = max(1.0, max(abs(v) for v in out))
    return [v / peak * 0.9 for v in out]


def write_caf(name, samples):
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        wav_path = tmp.name
    with wave.open(wav_path, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(b"".join(
            struct.pack("<h", int(max(-1, min(1, v)) * 32767)) for v in samples
        ))
    caf_path = os.path.join(OUT_DIR, f"{name}.caf")
    subprocess.run(["afconvert", "-f", "caff", "-d", "LEI16", wav_path, caf_path], check=True)
    os.unlink(wav_path)
    print(f"wrote {caf_path} ({len(samples) / RATE:.2f}s)")


# Note frequencies (equal temperament, A4 = 440)
def note(n):
    names = {"C": -9, "D": -7, "E": -5, "F": -4, "G": -2, "A": 0, "B": 2}
    semis = names[n[0]] + (1 if "#" in n else 0) + 12 * (int(n[-1]) - 4)
    return 440.0 * 2 ** (semis / 12)


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    # Option tap: single soft G5 — present but never louder than a voice.
    write_caf("tap", mix((0, mallet(note("G5"), 0.30, amp=0.42, decay=14))))
    # Progress tick: tiny C6, almost a click.
    write_caf("tick", mix((0, mallet(note("C6"), 0.18, amp=0.30, decay=22))))
    # Warm wrong: rising whole step C5→D5, a curious "hm?" — never a buzzer.
    write_caf("wrong", mix(
        (0.00, mallet(note("C5"), 0.35, amp=0.36, decay=10)),
        (0.16, mallet(note("D5"), 0.45, amp=0.34, decay=8)),
    ))
    # Celebrate: quick C-major arpeggio sparkle for small wins.
    write_caf("celebrate", mix(
        (0.00, mallet(note("C5"), 0.5, amp=0.40, decay=7)),
        (0.09, mallet(note("E5"), 0.5, amp=0.38, decay=7)),
        (0.18, mallet(note("G5"), 0.5, amp=0.36, decay=7)),
        (0.27, mallet(note("C6"), 0.7, amp=0.42, decay=6)),
    ))
    # Hatch sequence (slice 4): three rising knocks as the shell cracks…
    for i, n in enumerate(["E4", "G4", "B4"]):
        write_caf(f"crack{i + 1}", mix(
            (0, mallet(note(n), 0.22, amp=0.5, decay=18, strike=0.03)),
        ))
    # …a bright pop as it gives way…
    write_caf("pop", mix(
        (0.00, mallet(note("G5"), 0.12, amp=0.5, decay=30, strike=0.02)),
        (0.03, mallet(note("C6"), 0.16, amp=0.45, decay=24)),
    ))
    # …and the reveal chord: warm C-major bloom, the biggest sound we own.
    write_caf("reveal", mix(
        (0.00, mallet(note("C5"), 1.3, amp=0.40, decay=3.2)),
        (0.00, mallet(note("E5"), 1.3, amp=0.34, decay=3.2)),
        (0.00, mallet(note("G5"), 1.3, amp=0.34, decay=3.2)),
        (0.12, mallet(note("C6"), 1.2, amp=0.36, decay=3.6)),
        (0.24, mallet(note("E6"), 1.0, amp=0.22, decay=4.5)),
    ))
