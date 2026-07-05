import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Letter sounds · sound → letter
 * "Which letter says mmm, like moon?" Sounds are written phonetically
 * ("mmm", "sss", "t-t-t") and always anchored with a familiar word.
 * Lesson 1: m s b t p d f · Lesson 2: h k c n g l · Lesson 3: mixed + vowel a.
 */
export const soundSafari: UnitSeed = {
  id: "read-u-sounds",
  bandId: "reading-b2",
  title: "Sound Safari",
  icon: "🦁",
  lessons: [
    {
      id: "read-l-sounds-1",
      title: "Mmm, Sss, and Friends",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sounds-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says mmm, like moon?" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "N" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Which letter says sss, like snake?" },
            options: [
              { id: "a", label: "C" },
              { id: "b", label: "S" },
              { id: "c", label: "Z" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "⚽",
              spokenText: "A ball! Which letter says buh, like ball?",
            },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "P" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter says t-t-t, like turtle?" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "T" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "M" }, right: { visual: { kind: "emoji", value: "🌙" } } },
              { id: "p2", left: { label: "S" }, right: { visual: { kind: "emoji", value: "🐍" } } },
              { id: "p3", left: { label: "B" }, right: { visual: { kind: "emoji", value: "⚽" } } },
            ],
          },
        },
        {
          id: "read-e-sounds-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says p-p-puh, like pig?" },
            options: [
              { id: "a", label: "B" },
              { id: "b", label: "D" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐶",
              spokenText: "A dog! Which letter says d-d-d, like dog?",
            },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Which letter says fff, like fox?" },
            options: [
              { id: "a", label: "F" },
              { id: "b", label: "E" },
              { id: "c", label: "T" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-sounds-2",
      title: "More Sound Friends",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sounds-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says h-h-h, like hat?" },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "H" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Which letter says k-k-k, like kite?" },
            options: [
              { id: "a", label: "K" },
              { id: "b", label: "X" },
              { id: "c", label: "H" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐱",
              spokenText: "A cat! Which letter says c-c-c, like cat?",
            },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "C" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter says nnn, like nest?" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "W" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "H" }, right: { visual: { kind: "emoji", value: "🎩" } } },
              { id: "p2", left: { label: "K" }, right: { visual: { kind: "emoji", value: "🪁" } } },
              { id: "p3", left: { label: "F" }, right: { visual: { kind: "emoji", value: "🐟" } } },
            ],
          },
        },
        {
          id: "read-e-sounds-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says g-g-guh, like goat?" },
            options: [
              { id: "a", label: "G" },
              { id: "b", label: "C" },
              { id: "c", label: "J" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🥛",
              spokenText: "A glass of milk! Which letter says mmm, like milk?",
            },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "W" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Which letter says lll, like lion?" },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "T" },
              { id: "c", label: "L" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sounds-3",
      title: "Sound Champions",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sounds-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says a-a-a, like apple?" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "A" },
              { id: "c", label: "O" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "☀️",
              spokenText: "The sun! Which letter says sss, like sun?",
            },
            options: [
              { id: "a", label: "S" },
              { id: "b", label: "C" },
              { id: "c", label: "Z" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Which letter says d-d-d, like dog?" },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "B" },
              { id: "c", label: "D" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Careful, these letters look alike! Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "P" }, right: { visual: { kind: "emoji", value: "🐷" } } },
              { id: "p2", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🐶" } } },
              { id: "p3", left: { label: "C" }, right: { visual: { kind: "emoji", value: "🐱" } } },
            ],
          },
        },
        {
          id: "read-e-sounds-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter says buh, like bus?" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sounds-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🦊",
              spokenText: "A fox! Which letter says fff, like fox?",
            },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "T" },
              { id: "c", label: "F" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sounds-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter says rrr, like robot?" },
            options: [
              { id: "a", label: "R" },
              { id: "b", label: "P" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sounds-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Last one, safari star! Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "A" }, right: { visual: { kind: "emoji", value: "🍎" } } },
              { id: "p2", left: { label: "M" }, right: { visual: { kind: "emoji", value: "🥛" } } },
              { id: "p3", left: { label: "B" }, right: { visual: { kind: "emoji", value: "🚌" } } },
            ],
          },
        },
      ],
    },
  ],
};
