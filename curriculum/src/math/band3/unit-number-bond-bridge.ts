import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Addition within 10 · Number Bond Bridge
 * Lesson 1 explores the parts that make 5.
 * Lesson 2 builds the bonds of 10.
 * Lesson 3 stretches into fact families and missing parts.
 */
export const numberBondBridge: UnitSeed = {
  id: "math-u-bonds10",
  bandId: "math-b3",
  title: "Number Bond Bridge",
  icon: "🌉",
  lessons: [
    {
      id: "math-l-bonds10-1",
      title: "Ways to Make 5",
      primarySkillId: "math-add-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bonds10-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 5 in all?",
              spokenText: "Which picture shows five crabs in all? Count both groups together!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🦀🦀 🦀🦀" } },
              { id: "b", visual: { kind: "emoji", value: "🦀🦀 🦀🦀🦀" } },
              { id: "c", visual: { kind: "emoji", value: "🦀🦀🦀 🦀🦀🦀" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bonds10-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing part.",
              spokenText: "Two plus something makes five. Tap the missing number!",
            },
            template: "2 + ___ = 5",
            bank: [
              { id: "b1", label: "2" },
              { id: "b2", label: "3" },
              { id: "b3", label: "4" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-bonds10-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 + ? = 5",
              spokenText: "Four plus what makes five?",
            },
            options: [
              { id: "a", label: "1" },
              { id: "b", label: "2" },
              { id: "c", label: "0" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bonds10-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Three ducks are swimming in the pond. How many more ducks would make five? Tap that number!",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "2" },
              { id: "c", label: "1" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bonds10-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the parts that make 5.",
              spokenText: "Match the number friends! Tap two numbers that add up to five.",
            },
            pairs: [
              { id: "p1", left: { label: "1" }, right: { label: "4" } },
              { id: "p2", left: { label: "2" }, right: { label: "3" } },
              { id: "p3", left: { label: "0" }, right: { label: "5" } },
            ],
          },
        },
        {
          id: "math-e-bonds10-1-06",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many flowers?",
              spokenText: "Count the flowers by the bridge! How many do you see?",
            },
            object: { kind: "emoji", value: "🌼" },
            count: 5,
            choices: [4, 5, 6],
          },
        },
        {
          id: "math-e-bonds10-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which makes 5?",
              spokenText: "Which two numbers add up to five?",
            },
            options: [
              { id: "a", label: "2 + 2" },
              { id: "b", label: "1 + 3" },
              { id: "c", label: "2 + 3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-bonds10-1-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing part.",
              spokenText: "Something plus one makes five. Tap the missing number!",
            },
            template: "___ + 1 = 5",
            bank: [
              { id: "b1", label: "5" },
              { id: "b2", label: "4" },
              { id: "b3", label: "3" },
            ],
            correctChipId: "b2",
          },
        },
      ],
    },
    {
      id: "math-l-bonds10-2",
      title: "Ways to Make 10",
      primarySkillId: "math-add-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bonds10-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 + ? = 10",
              spokenText: "Six plus what makes ten?",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "3" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-bonds10-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing part.",
              spokenText: "Seven plus something makes ten. Tap the missing number!",
            },
            template: "7 + ___ = 10",
            bank: [
              { id: "b1", label: "2" },
              { id: "b2", label: "3" },
              { id: "b3", label: "4" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-bonds10-2-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the pairs that make 10.",
              spokenText: "Cross the bridge! Tap two numbers that add up to ten.",
            },
            pairs: [
              { id: "p1", left: { label: "9" }, right: { label: "1" } },
              { id: "p2", left: { label: "8" }, right: { label: "2" } },
              { id: "p3", left: { label: "6" }, right: { label: "4" } },
            ],
          },
        },
        {
          id: "math-e-bonds10-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Two ladybugs sit on a leaf. How many more ladybugs would make ten? Tap that number!",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "7" },
              { id: "c", label: "9" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bonds10-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which makes 10?",
              spokenText: "Which two numbers add up to ten?",
            },
            options: [
              { id: "a", label: "6 + 5" },
              { id: "b", label: "5 + 5" },
              { id: "c", label: "4 + 5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bonds10-2-06",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many seashells?",
              spokenText: "Count the seashells under the bridge! How many are there?",
            },
            object: { kind: "emoji", value: "🐚" },
            count: 10,
            choices: [8, 9, 10],
          },
        },
        {
          id: "math-e-bonds10-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing part.",
              spokenText: "Ten is the same as three plus something. Tap the missing number!",
            },
            template: "10 = 3 + ___",
            bank: [
              { id: "b1", label: "6" },
              { id: "b2", label: "7" },
              { id: "b3", label: "8" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-bonds10-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1 + ? = 10",
              spokenText: "One plus what makes ten?",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "10" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-bonds10-3",
      title: "Fact Family Bridge",
      primarySkillId: "math-add-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bonds10-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 − 7 = ?",
              spokenText: "Three plus seven makes ten. So ten minus seven equals what?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bonds10-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing part.",
              spokenText: "Something plus six makes ten. Tap the missing number!",
            },
            template: "___ + 6 = 10",
            bank: [
              { id: "b1", label: "3" },
              { id: "b2", label: "4" },
              { id: "b3", label: "5" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-bonds10-3-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sum to its total.",
              spokenText: "Match each adding problem to its total! Tap a problem, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "7 + 3" }, right: { label: "10" } },
              { id: "p2", left: { label: "4 + 1" }, right: { label: "5" } },
              { id: "p3", left: { label: "2 + 6" }, right: { label: "8" } },
            ],
          },
        },
        {
          id: "math-e-bonds10-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "You have ten crayons. Two are red and the rest are blue. Tap how many crayons are blue!",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "8" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bonds10-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Same family as 2 + 8 = 10?",
              spokenText: "Two plus eight equals ten! Which take-away fact is in the same family?",
            },
            options: [
              { id: "a", label: "10 − 3 = 7" },
              { id: "b", label: "8 − 2 = 6" },
              { id: "c", label: "10 − 8 = 2" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-bonds10-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Smallest to biggest!",
              spokenText: "Cross the number bridge! Tap the numbers from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "5" },
              { id: "i2", label: "2" },
              { id: "i3", label: "10" },
              { id: "i4", label: "8" },
            ],
            correctOrder: ["i2", "i1", "i4", "i3"],
          },
        },
        {
          id: "math-e-bonds10-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Ten minus something equals five. Tap the missing number!",
            },
            template: "10 − ___ = 5",
            bank: [
              { id: "b1", label: "4" },
              { id: "b2", label: "5" },
              { id: "b3", label: "6" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-bonds10-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Zara has 8 stickers. She needs 10.",
              spokenText: "Zara needs ten stickers to finish her page. She has eight. How many more stickers does she need?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "2" },
              { id: "c", label: "1" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
