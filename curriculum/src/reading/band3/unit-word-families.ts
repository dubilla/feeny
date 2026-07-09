import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Word Families
 * Onset + rime with the -at, -og, -en, and -ig families.
 * Lesson 1 introduces -at and -og with picture-supported blanks.
 * Lesson 2 covers -en and -ig the same way.
 * Lesson 3 mixes all four families with middle-vowel stretches.
 */
export const wordFamilies: UnitSeed = {
  id: "read-u-families",
  bandId: "reading-b3",
  title: "Word Families",
  icon: "🏠",
  lessons: [
    {
      id: "read-l-families-1",
      title: "The -at and -og Families",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-families-1-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter starts the word?",
              spokenText: "This is a cat! Which letter starts the word cat?",
            },
            template: "___at",
            bank: [
              { id: "c", label: "c" },
              { id: "h", label: "h" },
              { id: "s", label: "s" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-families-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is in the -at family?",
              spokenText: "Listen: cat, dog, pen. Which word ends with at? Tap it!",
            },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "cat" },
              { id: "c", label: "pen" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-families-1-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: hat",
              spokenText: "Hat is in the at family! Tap the letters in order: h, a, t.",
            },
            items: [
              { id: "t", label: "t" },
              { id: "h", label: "h" },
              { id: "a", label: "a" },
            ],
            correctOrder: ["h", "a", "t"],
          },
        },
        {
          id: "read-e-families-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter starts the word?",
              spokenText: "This is a dog! Which letter starts the word dog?",
            },
            template: "___og",
            bank: [
              { id: "l", label: "l" },
              { id: "f", label: "f" },
              { id: "d", label: "d" },
            ],
            correctChipId: "d",
          },
        },
        {
          id: "read-e-families-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One of these words ends with og. Tap the word from the og family!",
            },
            options: [
              { id: "a", label: "log" },
              { id: "b", label: "leg" },
              { id: "c", label: "lap" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-families-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the family words!",
              spokenText: "Match the words from the same family! Cat goes with hat, and dog goes with log!",
            },
            pairs: [
              { id: "p1", left: { label: "cat" }, right: { label: "hat" } },
              { id: "p2", left: { label: "dog" }, right: { label: "log" } },
            ],
          },
        },
        {
          id: "read-e-families-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter starts the word?",
              spokenText: "This is a bat! Which letter starts the word bat?",
            },
            template: "___at",
            bank: [
              { id: "m", label: "m" },
              { id: "b", label: "b" },
              { id: "r", label: "r" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-families-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: log",
              spokenText: "Log is in the og family! Tap the letters in order: l, o, g.",
            },
            items: [
              { id: "g", label: "g" },
              { id: "o", label: "o" },
              { id: "l", label: "l" },
            ],
            correctOrder: ["l", "o", "g"],
          },
        },
      ],
    },
    {
      id: "read-l-families-2",
      title: "The -en and -ig Families",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-families-2-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter starts the word?",
              spokenText: "This is a hen! Which letter starts the word hen?",
            },
            template: "___en",
            bank: [
              { id: "h", label: "h" },
              { id: "p", label: "p" },
              { id: "t", label: "t" },
            ],
            correctChipId: "h",
          },
        },
        {
          id: "read-e-families-2-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: pen",
              spokenText: "Pen is in the en family! Tap the letters in order: p, e, n.",
            },
            items: [
              { id: "e", label: "e" },
              { id: "p", label: "p" },
              { id: "n", label: "n" },
            ],
            correctOrder: ["p", "e", "n"],
          },
        },
        {
          id: "read-e-families-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is in the -ig family?",
              spokenText: "Listen: pig, pin, pat. Which word ends with ig? Tap it!",
            },
            options: [
              { id: "a", label: "pin" },
              { id: "b", label: "pat" },
              { id: "c", label: "pig" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-families-2-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter starts the word?",
              spokenText: "This is a pig! Which letter starts the word pig?",
            },
            template: "___ig",
            bank: [
              { id: "b", label: "b" },
              { id: "p", label: "p" },
              { id: "d", label: "d" },
            ],
            correctChipId: "p",
          },
        },
        {
          id: "read-e-families-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One of these words ends with en. Tap the word from the en family!",
            },
            options: [
              { id: "a", label: "tap" },
              { id: "b", label: "ten" },
              { id: "c", label: "tip" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-families-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the family words!",
              spokenText: "Match the words from the same family! Hen goes with ten, and pig goes with big!",
            },
            pairs: [
              { id: "p1", left: { label: "hen" }, right: { label: "ten" } },
              { id: "p2", left: { label: "pig" }, right: { label: "big" } },
            ],
          },
        },
        {
          id: "read-e-families-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: big",
              spokenText: "Big is in the ig family! Tap the letters in order: b, i, g.",
            },
            items: [
              { id: "g", label: "g" },
              { id: "b", label: "b" },
              { id: "i", label: "i" },
            ],
            correctOrder: ["b", "i", "g"],
          },
        },
        {
          id: "read-e-families-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which picture is in the -en family?",
              spokenText: "Hen, cat, bus! Which one ends with en? Tap the picture!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🐔" } },
              { id: "c", visual: { kind: "emoji", value: "🚌" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-families-3",
      title: "Family Mix-Up",
      primarySkillId: "read-cvc",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-families-3-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Make: sat",
              spokenText: "Let's make the word sat! The cat sat down. Which letter starts sat?",
            },
            template: "___at",
            bank: [
              { id: "f", label: "f" },
              { id: "s", label: "s" },
              { id: "m", label: "m" },
            ],
            correctChipId: "s",
          },
        },
        {
          id: "read-e-families-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is NOT in the -og family?",
              spokenText: "Dog, log, dig! Which word is not in the og family? Tap it!",
            },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "dig" },
              { id: "c", label: "log" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-families-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Build: ten",
              spokenText: "Ten is in the en family! Tap the letters in order: t, e, n.",
            },
            items: [
              { id: "n", label: "n" },
              { id: "t", label: "t" },
              { id: "e", label: "e" },
            ],
            correctOrder: ["t", "e", "n"],
          },
        },
        {
          id: "read-e-families-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter is in the middle?",
              spokenText: "This is a pig! Pig is in the ig family. Which letter goes in the middle?",
            },
            template: "p___g",
            bank: [
              { id: "i", label: "i" },
              { id: "e", label: "e" },
              { id: "a", label: "a" },
            ],
            correctChipId: "i",
          },
        },
        {
          id: "read-e-families-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One of these words ends with at. Tap the word from the at family!",
            },
            options: [
              { id: "a", label: "mop" },
              { id: "b", label: "men" },
              { id: "c", label: "mat" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-families-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the family words!",
              spokenText: "Match the words from the same family! Hen and men, dog and fog, pig and dig!",
            },
            pairs: [
              { id: "p1", left: { label: "hen" }, right: { label: "men" } },
              { id: "p2", left: { label: "dog" }, right: { label: "fog" } },
              { id: "p3", left: { label: "pig" }, right: { label: "dig" } },
            ],
          },
        },
        {
          id: "read-e-families-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which word is in the -at family?",
              spokenText: "One of these words ends with at. Look closely and tap it!",
            },
            options: [
              { id: "a", label: "bet" },
              { id: "b", label: "bat" },
              { id: "c", label: "bit" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-families-3-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Which letter is in the middle?",
              spokenText: "This is a dog! Dog is in the og family. Which letter goes in the middle?",
            },
            template: "d___g",
            bank: [
              { id: "o", label: "o" },
              { id: "i", label: "i" },
              { id: "u", label: "u" },
            ],
            correctChipId: "o",
          },
        },
      ],
    },
  ],
};
