import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Lowercase letter recognition + uppercase↔lowercase matching
 * Lesson 1 starts with lookalike pairs (c/o/s), lesson 2 tackles the
 * tricky twins (b/d/p, g/q/j), lesson 3 mixes everything as a stretch.
 * spokenText writes letter names as capitals so TTS says "bee", not "buh".
 */
export const littleLetters: UnitSeed = {
  id: "read-u-lower",
  bandId: "reading-b1",
  title: "Little Letters",
  icon: "🐭",
  lessons: [
    {
      id: "read-l-lower-1",
      title: "Meet the Little Letters",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-lower-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter A!" },
            options: [
              { id: "a", label: "a" },
              { id: "b", label: "e" },
              { id: "c", label: "o" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the little letter B!" },
            options: [
              { id: "a", label: "d" },
              { id: "b", label: "b" },
              { id: "c", label: "p" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-lower-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match big and little!",
              spokenText: "Every big letter has a little letter friend! Match each big letter to its little letter.",
            },
            pairs: [
              { id: "p1", left: { label: "C" }, right: { label: "c" } },
              { id: "p2", left: { label: "O" }, right: { label: "o" } },
              { id: "p3", left: { label: "S" }, right: { label: "s" } },
            ],
          },
        },
        {
          id: "read-e-lower-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the little letter C!" },
            options: [
              { id: "a", label: "e" },
              { id: "b", label: "o" },
              { id: "c", label: "c" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-lower-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "a",
              spokenText: "Look at the little letter up top! Tap the big letter it goes with!",
            },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "A" },
              { id: "c", label: "E" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-lower-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter E!" },
            options: [
              { id: "a", label: "e" },
              { id: "b", label: "c" },
              { id: "c", label: "a" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-1-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "abc order!",
              spokenText: "Little letters march in the same order! Put them in A-B-C order!",
            },
            items: [
              { id: "a", label: "a" },
              { id: "b", label: "b" },
              { id: "c", label: "c" },
              { id: "d", label: "d" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-lower-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the little letter D!" },
            options: [
              { id: "a", label: "b" },
              { id: "b", label: "q" },
              { id: "c", label: "d" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-lower-2",
      title: "Tricky Twins",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-lower-2-01",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match big and little!",
              spokenText: "Careful, these little letters look a lot alike! Match each big letter to its little letter.",
            },
            pairs: [
              { id: "p1", left: { label: "B" }, right: { label: "b" } },
              { id: "p2", left: { label: "D" }, right: { label: "d" } },
              { id: "p3", left: { label: "P" }, right: { label: "p" } },
            ],
          },
        },
        {
          id: "read-e-lower-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter G!" },
            options: [
              { id: "a", label: "g" },
              { id: "b", label: "q" },
              { id: "c", label: "p" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the little letter M!" },
            options: [
              { id: "a", label: "n" },
              { id: "b", label: "m" },
              { id: "c", label: "w" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-lower-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "G",
              spokenText: "Look at the big letter up top! Tap the little letter it goes with!",
            },
            options: [
              { id: "a", label: "q" },
              { id: "b", label: "j" },
              { id: "c", label: "g" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-lower-2-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the little letter N!" },
            options: [
              { id: "a", label: "n" },
              { id: "b", label: "m" },
              { id: "c", label: "u" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match big and little!",
              spokenText: "These little letters have long tails! Match each big letter to its little letter.",
            },
            pairs: [
              { id: "p1", left: { label: "G" }, right: { label: "g" } },
              { id: "p2", left: { label: "Q" }, right: { label: "q" } },
              { id: "p3", left: { label: "J" }, right: { label: "j" } },
            ],
          },
        },
        {
          id: "read-e-lower-2-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter Q!" },
            options: [
              { id: "a", label: "p" },
              { id: "b", label: "q" },
              { id: "c", label: "g" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-lower-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "abc order!",
              spokenText: "Put these little letters in alphabet order! E comes first!",
            },
            items: [
              { id: "a", label: "e" },
              { id: "b", label: "f" },
              { id: "c", label: "g" },
              { id: "d", label: "h" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
      ],
    },
    {
      id: "read-l-lower-3",
      title: "Little Letter Champions",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-lower-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter R!" },
            options: [
              { id: "a", label: "n" },
              { id: "b", label: "h" },
              { id: "c", label: "r" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-lower-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "H",
              spokenText: "Look at the big letter up top! Tap the little letter it goes with!",
            },
            options: [
              { id: "a", label: "n" },
              { id: "b", label: "h" },
              { id: "c", label: "b" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-lower-3-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match big and little!",
              spokenText: "These bumpy letters look alike! Match each big letter to its little letter.",
            },
            pairs: [
              { id: "p1", left: { label: "M" }, right: { label: "m" } },
              { id: "p2", left: { label: "N" }, right: { label: "n" } },
              { id: "p3", left: { label: "W" }, right: { label: "w" } },
            ],
          },
        },
        {
          id: "read-e-lower-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the little letter F!" },
            options: [
              { id: "a", label: "f" },
              { id: "b", label: "t" },
              { id: "c", label: "l" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the little letter J!" },
            options: [
              { id: "a", label: "j" },
              { id: "b", label: "i" },
              { id: "c", label: "g" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-lower-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "abc order!",
              spokenText: "Put these little letters in alphabet order, just like the ABC song!",
            },
            items: [
              { id: "a", label: "l" },
              { id: "b", label: "m" },
              { id: "c", label: "n" },
              { id: "d", label: "o" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-lower-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match big and little!",
              spokenText: "One last matching game! Match each big letter to its little letter.",
            },
            pairs: [
              { id: "p1", left: { label: "R" }, right: { label: "r" } },
              { id: "p2", left: { label: "H" }, right: { label: "h" } },
              { id: "p3", left: { label: "K" }, right: { label: "k" } },
            ],
          },
        },
        {
          id: "read-e-lower-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the little letter T!" },
            options: [
              { id: "a", label: "f" },
              { id: "b", label: "l" },
              { id: "c", label: "t" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
