import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Sound Tappers · phoneme segmentation with digraphs (tapTheSounds)
 * The tap-out grows up: words now include a two-letter sound that is ONE tile
 * (sh, ck, th) — the whole point of a digraph is a single sound. Graphemes
 * still concatenate to `word` (schema-enforced), so "sh"+"i"+"p" = "ship".
 * Each lesson pairs tap-outs with graded listen-and-pick on the same words.
 */
export const soundTappers: UnitSeed = {
  id: "read-u-tap-b3",
  bandId: "reading-b3",
  title: "Sound Tappers",
  icon: "🥁",
  lessons: [
    {
      id: "read-l-tapb3-1",
      title: "Three Sounds",
      primarySkillId: "read-tap-b3",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb3-1-01",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Map! Tap out the sounds in map." },
            word: "map",
            visual: { kind: "emoji", value: "🗺️" },
            sounds: [{ grapheme: "m" }, { grapheme: "a" }, { grapheme: "p" }],
          },
        },
        {
          id: "read-e-tapb3-1-02",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Net! Tap out the sounds in net." },
            word: "net",
            visual: { kind: "emoji", value: "🥅" },
            sounds: [{ grapheme: "n" }, { grapheme: "e" }, { grapheme: "t" }],
          },
        },
        {
          id: "read-e-tapb3-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the map?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥅" } },
              { id: "b", visual: { kind: "emoji", value: "🗺️" } },
              { id: "c", visual: { kind: "emoji", value: "🦆" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-tapb3-1-04",
          type: "tapTheSounds",
          payload: {
            prompt: { text: "Tap it out!", spokenText: "Leg! Tap out the sounds in leg." },
            word: "leg",
            visual: { kind: "emoji", value: "🦵" },
            sounds: [{ grapheme: "l" }, { grapheme: "e" }, { grapheme: "g" }],
          },
        },
        {
          id: "read-e-tapb3-1-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the leg?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦵" } },
              { id: "b", visual: { kind: "emoji", value: "🗺️" } },
              { id: "c", visual: { kind: "emoji", value: "🥅" } },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-tapb3-2",
      title: "Two Letters, One Sound",
      primarySkillId: "read-tap-b3",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb3-2-01",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Ship! Tap out the sounds in ship. Sh is one sound!",
            },
            word: "ship",
            visual: { kind: "emoji", value: "🚢" },
            sounds: [{ grapheme: "sh" }, { grapheme: "i" }, { grapheme: "p" }],
          },
        },
        {
          id: "read-e-tapb3-2-02",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Fish! Tap out the sounds in fish. Sh is one sound!",
            },
            word: "fish",
            visual: { kind: "emoji", value: "🐟" },
            sounds: [{ grapheme: "f" }, { grapheme: "i" }, { grapheme: "sh" }],
          },
        },
        {
          id: "read-e-tapb3-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the ship?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🚢" } },
              { id: "c", visual: { kind: "emoji", value: "🦆" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-tapb3-2-04",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Bath! Tap out the sounds in bath. Th is one sound!",
            },
            word: "bath",
            visual: { kind: "emoji", value: "🛁" },
            sounds: [{ grapheme: "b" }, { grapheme: "a" }, { grapheme: "th" }],
          },
        },
        {
          id: "read-e-tapb3-2-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the fish?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🛁" } },
              { id: "b", visual: { kind: "emoji", value: "🚢" } },
              { id: "c", visual: { kind: "emoji", value: "🐟" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-tapb3-3",
      title: "Tap Master",
      primarySkillId: "read-tap-b3",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-tapb3-3-01",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Duck! Tap out the sounds in duck. Ck is one sound!",
            },
            word: "duck",
            visual: { kind: "emoji", value: "🦆" },
            sounds: [{ grapheme: "d" }, { grapheme: "u" }, { grapheme: "ck" }],
          },
        },
        {
          id: "read-e-tapb3-3-02",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Sock! Tap out the sounds in sock. Ck is one sound!",
            },
            word: "sock",
            visual: { kind: "emoji", value: "🧦" },
            sounds: [{ grapheme: "s" }, { grapheme: "o" }, { grapheme: "ck" }],
          },
        },
        {
          id: "read-e-tapb3-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the duck?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧦" } },
              { id: "b", visual: { kind: "emoji", value: "🦆" } },
              { id: "c", visual: { kind: "emoji", value: "🚢" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-tapb3-3-04",
          type: "tapTheSounds",
          payload: {
            prompt: {
              text: "Tap it out!",
              spokenText: "Chip! Tap out the sounds in chip. Ch is one sound!",
            },
            word: "chip",
            visual: { kind: "emoji", value: "🍟" },
            sounds: [{ grapheme: "ch" }, { grapheme: "i" }, { grapheme: "p" }],
          },
        },
        {
          id: "read-e-tapb3-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which one is the sock?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦆" } },
              { id: "b", visual: { kind: "emoji", value: "🧦" } },
              { id: "c", visual: { kind: "emoji", value: "🛁" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
