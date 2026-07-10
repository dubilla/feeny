import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · First sounds · letter ↔ picture matching
 * tapMatchPairs is the star: match each letter to the picture that
 * starts with its sound (M↔🌙, S↔🐍, B↔⚽), with listenAndPick review
 * in both directions (sound → letter and sound → picture).
 */
export const soundMatchUp: UnitSeed = {
  id: "read-u-soundmatch",
  bandId: "reading-b2",
  title: "Sound Match-Up",
  icon: "🧩",
  lessons: [
    {
      id: "read-l-soundmatch-1",
      title: "Letters Meet Pictures",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundmatch-1-01",
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
          id: "read-e-soundmatch-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word sun?" },
            options: [
              { id: "a", label: "Z" },
              { id: "b", label: "S" },
              { id: "c", label: "C" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundmatch-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Mop starts with M! Which picture starts like mop?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥛" } },
              { id: "b", visual: { kind: "emoji", value: "🐍" } },
              { id: "c", visual: { kind: "emoji", value: "🎩" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🐶" } } },
              { id: "p2", left: { label: "P" }, right: { visual: { kind: "emoji", value: "🐷" } } },
              { id: "p3", left: { label: "F" }, right: { visual: { kind: "emoji", value: "🦊" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "C",
              spokenText: "This is the letter C! Corn starts with C. Which picture starts like corn?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🚌" } },
              { id: "c", visual: { kind: "emoji", value: "☀️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter starts the word fish?" },
            options: [
              { id: "a", label: "T" },
              { id: "b", label: "F" },
              { id: "c", label: "E" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundmatch-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "A" }, right: { visual: { kind: "emoji", value: "🍎" } } },
              { id: "p2", left: { label: "K" }, right: { visual: { kind: "emoji", value: "🪁" } } },
              { id: "p3", left: { label: "H" }, right: { visual: { kind: "emoji", value: "🎩" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Banana starts with B! Which picture starts like banana?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐍" } },
              { id: "b", visual: { kind: "emoji", value: "🌙" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-soundmatch-2",
      title: "Match and Listen",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundmatch-2-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "K" }, right: { visual: { kind: "emoji", value: "🪁" } } },
              { id: "p2", left: { label: "M" }, right: { visual: { kind: "emoji", value: "🥛" } } },
              { id: "p3", left: { label: "S" }, right: { visual: { kind: "emoji", value: "☀️" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word hat?" },
            options: [
              { id: "a", label: "B" },
              { id: "b", label: "H" },
              { id: "c", label: "N" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundmatch-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐷",
              spokenText: "A pig! Which letter starts the word pig?",
            },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "B" },
              { id: "c", label: "D" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Kangaroo starts with K! Which picture starts like kangaroo?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🪁" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundmatch-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "B" }, right: { visual: { kind: "emoji", value: "🚌" } } },
              { id: "p2", left: { label: "F" }, right: { visual: { kind: "emoji", value: "🦊" } } },
              { id: "p3", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🐶" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter starts the word cat?" },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "G" },
              { id: "c", label: "C" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundmatch-2-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Ant starts with A! Which picture starts like ant?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍎" } },
              { id: "b", visual: { kind: "emoji", value: "⚽" } },
              { id: "c", visual: { kind: "emoji", value: "🐱" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🦊",
              spokenText: "A fox! Which letter starts the word fox?",
            },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "F" },
              { id: "c", label: "H" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-soundmatch-3",
      title: "Sound Match Champions",
      primarySkillId: "read-first-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundmatch-3-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Careful, these letters look alike! Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "B" }, right: { visual: { kind: "emoji", value: "⚽" } } },
              { id: "p2", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🐶" } } },
              { id: "p3", left: { label: "P" }, right: { visual: { kind: "emoji", value: "🐷" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word moon?" },
            options: [
              { id: "a", label: "W" },
              { id: "b", label: "N" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundmatch-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Sock starts with S! Which picture starts like sock?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐍" } },
              { id: "b", visual: { kind: "emoji", value: "🥛" } },
              { id: "c", visual: { kind: "emoji", value: "🎩" } },
              { id: "d", visual: { kind: "emoji", value: "🐶" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🪁",
              spokenText: "A kite! Which letter starts the word kite?",
            },
            options: [
              { id: "a", label: "H" },
              { id: "b", label: "K" },
              { id: "c", label: "X" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundmatch-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with its sound!",
            },
            pairs: [
              { id: "p1", left: { label: "A" }, right: { visual: { kind: "emoji", value: "🍎" } } },
              { id: "p2", left: { label: "H" }, right: { visual: { kind: "emoji", value: "🎩" } } },
              { id: "p3", left: { label: "S" }, right: { visual: { kind: "emoji", value: "🐍" } } },
            ],
          },
        },
        {
          id: "read-e-soundmatch-3-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Which letter starts the word dog?" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundmatch-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Hippo starts with H! Which picture starts like hippo?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥛" } },
              { id: "b", visual: { kind: "emoji", value: "🐷" } },
              { id: "c", visual: { kind: "emoji", value: "🎩" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundmatch-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🌙",
              spokenText: "The moon! Which letter starts the word moon?",
            },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "M" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
