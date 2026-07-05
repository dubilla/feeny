import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Uppercase letter recognition · N–Z + whole-alphabet review
 * Lesson 1 covers N–S, lesson 2 covers T–Z, lesson 3 mixes the whole
 * alphabet with alphabet-order sequences as the stretch.
 */
export const letterParade: UnitSeed = {
  id: "read-u-letters2",
  bandId: "reading-b1",
  title: "Letter Parade",
  icon: "🎏",
  lessons: [
    {
      id: "read-l-letters2-1",
      title: "The Parade Begins",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-letters2-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter N!" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "N" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter O!" },
            options: [
              { id: "a", label: "Q" },
              { id: "b", label: "C" },
              { id: "c", label: "O" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-letters2-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "P",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "B" },
              { id: "c", label: "R" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-letters2-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter Q!" },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "Q" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-1-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Alphabet order!",
              spokenText: "Put the letters in alphabet order! Which one marches first in the parade?",
            },
            items: [
              { id: "a", label: "N" },
              { id: "b", label: "O" },
              { id: "c", label: "P" },
              { id: "d", label: "Q" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-letters2-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter R!" },
            options: [
              { id: "a", label: "R" },
              { id: "b", label: "P" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-letters2-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same letters!",
              spokenText: "These round letters look alike! Look carefully and match the twins.",
            },
            pairs: [
              { id: "p1", left: { label: "O" }, right: { label: "O" } },
              { id: "p2", left: { label: "Q" }, right: { label: "Q" } },
              { id: "p3", left: { label: "C" }, right: { label: "C" } },
            ],
          },
        },
        {
          id: "read-e-letters2-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter S!" },
            options: [
              { id: "a", label: "Z" },
              { id: "b", label: "C" },
              { id: "c", label: "S" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-letters2-2",
      title: "To the End of the Line",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-letters2-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter T!" },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "T" },
              { id: "c", label: "L" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter U!" },
            options: [
              { id: "a", label: "U" },
              { id: "b", label: "V" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-letters2-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter V!" },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "Y" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-letters2-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "W",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "M" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-letters2-2-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Alphabet order!",
              spokenText: "Put the letters in alphabet order! Sing the ABC song if you need help!",
            },
            items: [
              { id: "a", label: "T" },
              { id: "b", label: "U" },
              { id: "c", label: "V" },
              { id: "d", label: "W" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-letters2-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter X!" },
            options: [
              { id: "a", label: "K" },
              { id: "b", label: "X" },
              { id: "c", label: "Y" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-2-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter Y!" },
            options: [
              { id: "a", label: "V" },
              { id: "b", label: "X" },
              { id: "c", label: "Y" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-letters2-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same letters!",
              spokenText: "These zigzag letters look alike! Look carefully and match the twins.",
            },
            pairs: [
              { id: "p1", left: { label: "V" }, right: { label: "V" } },
              { id: "p2", left: { label: "W" }, right: { label: "W" } },
              { id: "p3", left: { label: "M" }, right: { label: "M" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-letters2-3",
      title: "Alphabet All-Stars",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-letters2-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter Z!" },
            options: [
              { id: "a", label: "S" },
              { id: "b", label: "N" },
              { id: "c", label: "Z" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-letters2-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter B!" },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "B" },
              { id: "c", label: "D" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Alphabet order!",
              spokenText: "Put all five letters in alphabet order! You know how the song starts!",
            },
            items: [
              { id: "a", label: "A" },
              { id: "b", label: "B" },
              { id: "c", label: "C" },
              { id: "d", label: "D" },
              { id: "e", label: "E" },
            ],
            correctOrder: ["a", "b", "c", "d", "e"],
          },
        },
        {
          id: "read-e-letters2-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter G!" },
            options: [
              { id: "a", label: "G" },
              { id: "b", label: "C" },
              { id: "c", label: "Q" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-letters2-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "S",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "Z" },
              { id: "b", label: "S" },
              { id: "c", label: "C" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-letters2-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Alphabet order!",
              spokenText: "These are the very last letters! Put them in alphabet order!",
            },
            items: [
              { id: "a", label: "W" },
              { id: "b", label: "X" },
              { id: "c", label: "Y" },
              { id: "d", label: "Z" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-letters2-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter M!" },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "W" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-letters2-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same letters!",
              spokenText: "Last matching game of the parade! Find the letter twins.",
            },
            pairs: [
              { id: "p1", left: { label: "N" }, right: { label: "N" } },
              { id: "p2", left: { label: "S" }, right: { label: "S" } },
              { id: "p3", left: { label: "Z" }, right: { label: "Z" } },
            ],
          },
        },
      ],
    },
  ],
};
