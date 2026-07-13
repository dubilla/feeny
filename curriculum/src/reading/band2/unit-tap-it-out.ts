import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Tap It Out · phoneme segmentation (tapTheSounds)
 * The Fundations tap-out enters Feeny: hear the whole word, tap once per
 * sound to build it, blend. Clean CVC words only — every letter is exactly
 * one phoneme (no blends, no silent letters, no 'x' = /ks/). Each lesson
 * pairs the tap-out with graded listen-and-pick checks on the same words so
 * the always-correct tap-out can't be the only thing driving mastery.
 * Rule: `sounds[].grapheme` joined must equal `word` (schema-enforced).
 */
export const tapItOut: UnitSeed = {
  id: "read-u-tap-b2",
  bandId: "reading-b2",
  title: "Tap It Out",
  icon: "👆",
  lessons: [
    {
      id: "read-l-tapb2-1",
      title: "Tap the Sounds",
      primarySkillId: "read-tap-b2",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb2-1-01",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Cat! Tap out the sounds in cat." },
            word: "cat",
            visual: { kind: "emoji", value: "🐱" },
            sounds: [{ grapheme: "c" }, { grapheme: "a" }, { grapheme: "t" }],
          },
        },
        {
          id: "read-e-tapb2-1-02",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Sun! Tap out the sounds in sun." },
            word: "sun",
            visual: { kind: "emoji", value: "🌞" },
            sounds: [{ grapheme: "s" }, { grapheme: "u" }, { grapheme: "n" }],
          },
        },
        {
          id: "read-e-tapb2-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the cat?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🌞" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-tapb2-1-04",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Pig! Tap out the sounds in pig." },
            word: "pig",
            visual: { kind: "emoji", value: "🐷" },
            sounds: [{ grapheme: "p" }, { grapheme: "i" }, { grapheme: "g" }],
          },
        },
        {
          id: "read-e-tapb2-1-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the pig?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌞" } },
              { id: "b", visual: { kind: "emoji", value: "🐷" } },
              { id: "c", visual: { kind: "emoji", value: "🐱" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-tapb2-2",
      title: "Sound by Sound",
      primarySkillId: "read-tap-b2",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb2-2-01",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Dog! Tap out the sounds in dog." },
            word: "dog",
            visual: { kind: "emoji", value: "🐶" },
            sounds: [{ grapheme: "d" }, { grapheme: "o" }, { grapheme: "g" }],
          },
        },
        {
          id: "read-e-tapb2-2-02",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Bus! Tap out the sounds in bus." },
            word: "bus",
            visual: { kind: "emoji", value: "🚌" },
            sounds: [{ grapheme: "b" }, { grapheme: "u" }, { grapheme: "s" }],
          },
        },
        {
          id: "read-e-tapb2-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the bus?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" } },
              { id: "b", visual: { kind: "emoji", value: "🚌" } },
              { id: "c", visual: { kind: "emoji", value: "🐷" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-tapb2-2-04",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Hen! Tap out the sounds in hen." },
            word: "hen",
            visual: { kind: "emoji", value: "🐔" },
            sounds: [{ grapheme: "h" }, { grapheme: "e" }, { grapheme: "n" }],
          },
        },
        {
          id: "read-e-tapb2-2-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the dog?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐔" } },
              { id: "b", visual: { kind: "emoji", value: "🚌" } },
              { id: "c", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-tapb2-3",
      title: "Tap Champion",
      primarySkillId: "read-tap-b2",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb2-3-01",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Bed! Tap out the sounds in bed." },
            word: "bed",
            visual: { kind: "emoji", value: "🛏️" },
            sounds: [{ grapheme: "b" }, { grapheme: "e" }, { grapheme: "d" }],
          },
        },
        {
          id: "read-e-tapb2-3-02",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Web! Tap out the sounds in web." },
            word: "web",
            visual: { kind: "emoji", value: "🕸️" },
            sounds: [{ grapheme: "w" }, { grapheme: "e" }, { grapheme: "b" }],
          },
        },
        {
          id: "read-e-tapb2-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the bed?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🕸️" } },
              { id: "b", visual: { kind: "emoji", value: "🛏️" } },
              { id: "c", visual: { kind: "emoji", value: "🐔" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-tapb2-3-04",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Bug! Tap out the sounds in bug." },
            word: "bug",
            visual: { kind: "emoji", value: "🐛" },
            sounds: [{ grapheme: "b" }, { grapheme: "u" }, { grapheme: "g" }],
          },
        },
        {
          id: "read-e-tapb2-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the bug?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐛" } },
              { id: "b", visual: { kind: "emoji", value: "🛏️" } },
              { id: "c", visual: { kind: "emoji", value: "🕸️" } },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
