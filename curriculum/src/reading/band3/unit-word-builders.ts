import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Word Builders
 * CVC word recognition and construction.
 * Lesson 1 introduces tap-the-word recognition with picture support.
 * Lesson 2 shifts to building words from letter tiles and missing letters.
 * Lesson 3 stretches with middle-vowel blanks and trickier near-misses.
 */
export const wordBuilders: UnitSeed = {
  id: "read-u-cvc",
  bandId: "reading-b3",
  title: "Word Builders",
  icon: "🧱",
  lessons: [
    {
      id: "read-l-cvc-1",
      title: "Tap the Word",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cvc-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word cat! Cat says meow!" },
            options: [
              { id: "a", label: "bat" },
              { id: "b", label: "cat" },
              { id: "c", label: "cot" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-cvc-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐶",
              spokenText: "Look, a dog! Tap the word that says dog.",
            },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "dig" },
              { id: "c", label: "dot" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cvc-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word sun! The sun shines bright!" },
            options: [
              { id: "a", label: "run" },
              { id: "b", label: "sat" },
              { id: "c", label: "sun" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cvc-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the word to its picture!",
              spokenText: "Match each word to its picture! Where is the cat? Where is the dog?",
            },
            pairs: [
              { id: "p1", left: { label: "cat" }, right: { visual: { kind: "emoji", value: "🐱" } } },
              { id: "p2", left: { label: "dog" }, right: { visual: { kind: "emoji", value: "🐶" } } },
            ],
          },
        },
        {
          id: "read-e-cvc-1-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: cat 🐱",
              spokenText: "Let's build the word cat! Tap the letters in order: c, a, t.",
            },
            items: [
              { id: "a", label: "a" },
              { id: "c", label: "c" },
              { id: "t", label: "t" },
            ],
            correctOrder: ["c", "a", "t"],
          },
        },
        {
          id: "read-e-cvc-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word pig! Pig says oink!" },
            options: [
              { id: "a", label: "pin" },
              { id: "b", label: "dig" },
              { id: "c", label: "pig" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cvc-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐱",
              spokenText: "This is a cat! Which letter finishes the word cat?",
            },
            template: "ca___",
            bank: [
              { id: "t", label: "t" },
              { id: "p", label: "p" },
              { id: "m", label: "m" },
            ],
            correctChipId: "t",
          },
        },
        {
          id: "read-e-cvc-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "bus",
              spokenText: "This word says bus! Tap the picture of the bus.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🛏️" } },
              { id: "b", visual: { kind: "emoji", value: "🚌" } },
              { id: "c", visual: { kind: "emoji", value: "🐝" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-cvc-2",
      title: "Build It",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cvc-2-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: dog 🐶",
              spokenText: "Let's build the word dog! Tap the letters in order: d, o, g.",
            },
            items: [
              { id: "g", label: "g" },
              { id: "d", label: "d" },
              { id: "o", label: "o" },
            ],
            correctOrder: ["d", "o", "g"],
          },
        },
        {
          id: "read-e-cvc-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🛏️",
              spokenText: "This is a bed! Which letter finishes the word bed?",
            },
            template: "be___",
            bank: [
              { id: "g", label: "g" },
              { id: "d", label: "d" },
              { id: "t", label: "t" },
            ],
            correctChipId: "d",
          },
        },
        {
          id: "read-e-cvc-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word hen! A hen says cluck cluck!" },
            options: [
              { id: "a", label: "hen" },
              { id: "b", label: "pen" },
              { id: "c", label: "hat" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cvc-2-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: sun ☀️",
              spokenText: "Let's build the word sun! Tap the letters in order: s, u, n.",
            },
            items: [
              { id: "u", label: "u" },
              { id: "n", label: "n" },
              { id: "s", label: "s" },
            ],
            correctOrder: ["s", "u", "n"],
          },
        },
        {
          id: "read-e-cvc-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the word to its picture!",
              spokenText: "Match each word to its picture! Find the pig, the bus, and the bed.",
            },
            pairs: [
              { id: "p1", left: { label: "pig" }, right: { visual: { kind: "emoji", value: "🐷" } } },
              { id: "p2", left: { label: "bus" }, right: { visual: { kind: "emoji", value: "🚌" } } },
              { id: "p3", left: { label: "bed" }, right: { visual: { kind: "emoji", value: "🛏️" } } },
            ],
          },
        },
        {
          id: "read-e-cvc-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐷",
              spokenText: "This is a pig! Which letter finishes the word pig?",
            },
            template: "pi___",
            bank: [
              { id: "n", label: "n" },
              { id: "g", label: "g" },
              { id: "t", label: "t" },
            ],
            correctChipId: "g",
          },
        },
        {
          id: "read-e-cvc-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "hen",
              spokenText: "This word says hen! Tap the picture of the hen.",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎩" } },
              { id: "b", visual: { kind: "emoji", value: "🖊️" } },
              { id: "c", visual: { kind: "emoji", value: "🐔" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cvc-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word bat! A bat flies at night!" },
            options: [
              { id: "a", label: "bag" },
              { id: "b", label: "bat" },
              { id: "c", label: "bad" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-cvc-3",
      title: "Word Wizard",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-cvc-3-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: hen 🐔",
              spokenText: "Let's build the word hen! Tap the letters in order: h, e, n.",
            },
            items: [
              { id: "n", label: "n" },
              { id: "h", label: "h" },
              { id: "e", label: "e" },
            ],
            correctOrder: ["h", "e", "n"],
          },
        },
        {
          id: "read-e-cvc-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "☀️",
              spokenText: "This is the sun! Which letter goes in the middle of sun?",
            },
            template: "s___n",
            bank: [
              { id: "u", label: "u" },
              { id: "a", label: "a" },
              { id: "e", label: "e" },
            ],
            correctChipId: "u",
          },
        },
        {
          id: "read-e-cvc-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word fox! A fox has a fluffy tail!" },
            options: [
              { id: "a", label: "fix" },
              { id: "b", label: "box" },
              { id: "c", label: "fox" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-cvc-3-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: bus 🚌",
              spokenText: "Let's build the word bus! Tap the letters in order: b, u, s.",
            },
            items: [
              { id: "s", label: "s" },
              { id: "b", label: "b" },
              { id: "u", label: "u" },
            ],
            correctOrder: ["b", "u", "s"],
          },
        },
        {
          id: "read-e-cvc-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "🐶",
              spokenText: "This is a dog! Which letter goes in the middle of dog?",
            },
            template: "d___g",
            bank: [
              { id: "i", label: "i" },
              { id: "o", label: "o" },
              { id: "a", label: "a" },
            ],
            correctChipId: "o",
          },
        },
        {
          id: "read-e-cvc-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the word to its picture!",
              spokenText: "Match each word to its picture! Find the fox, the pen, and the log.",
            },
            pairs: [
              { id: "p1", left: { label: "fox" }, right: { visual: { kind: "emoji", value: "🦊" } } },
              { id: "p2", left: { label: "pen" }, right: { visual: { kind: "emoji", value: "🖊️" } } },
              { id: "p3", left: { label: "log" }, right: { visual: { kind: "emoji", value: "🪵" } } },
            ],
          },
        },
        {
          id: "read-e-cvc-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🪵",
              spokenText: "Look, a log! Tap the word that says log.",
            },
            options: [
              { id: "a", label: "log" },
              { id: "b", label: "leg" },
              { id: "c", label: "lot" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-cvc-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: bat 🦇",
              spokenText: "Let's build the word bat! Tap the letters in order: b, a, t.",
            },
            items: [
              { id: "t", label: "t" },
              { id: "a", label: "a" },
              { id: "b", label: "b" },
            ],
            correctOrder: ["b", "a", "t"],
          },
        },
      ],
    },
  ],
};
