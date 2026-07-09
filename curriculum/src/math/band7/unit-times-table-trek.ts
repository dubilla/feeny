import type { UnitSeed } from "../../schema/pack";

/**
 * Band 7 · Times Table Trek
 * Lesson 1 sets off with ×2 and ×10, tied to emoji groups (equal groups → product).
 * Lesson 2 climbs into ×5 and ×3 facts.
 * Lesson 3 reaches the summit: mixed facts, all symbolic, products ≤ 50.
 */
export const timesTableTrek: UnitSeed = {
  id: "math-u-times",
  bandId: "math-b7",
  title: "Times Table Trek",
  icon: "✖️",
  lessons: [
    {
      id: "math-l-times-1",
      title: "Twos and Tens Trailhead",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-times-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 baskets of 3 apples. How many apples?",
              spokenText:
                "Let's start the trek! Two baskets each hold three apples. That's two groups of three. How many apples in all?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "5" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-1-02",
          type: "countObjects",
          payload: {
            prompt: {
              text: "2 rows of 4 stars. Count them all!",
              spokenText:
                "Two rows of stars are twinkling. Each row has four stars. That's two times four. Count all the stars!",
            },
            object: { kind: "emoji", value: "⭐" },
            count: 8,
            choices: [6, 8, 10],
          },
        },
        {
          id: "math-e-times-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "2 × 5 = ?", spokenText: "Two times five. Two groups of five! What is the answer?" },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "12" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-times-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Two times two. Tap the number that shows two groups of two.",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 × 10 = ?",
              spokenText: "The trail jumps by tens! Three times ten means three groups of ten. What is three times ten?",
            },
            options: [
              { id: "a", label: "13" },
              { id: "b", label: "30" },
              { id: "c", label: "20" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-times-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2 × ___ = 6",
              spokenText: "Two times something equals six. Which number fills the blank?",
            },
            template: "2 × ___ = 6",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "4" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-times-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each fact to its answer!",
              spokenText: "Match each times-two fact to its answer. Two times the number gives the product!",
            },
            pairs: [
              { id: "p1", left: { label: "2 × 2" }, right: { label: "4" } },
              { id: "p2", left: { label: "2 × 5" }, right: { label: "10" } },
              { id: "p3", left: { label: "2 × 6" }, right: { label: "12" } },
            ],
          },
        },
        {
          id: "math-e-times-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 × 10 = ?",
              spokenText: "Last stop on the trailhead! Four times ten. Four groups of ten. What is the answer?",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "40" },
              { id: "c", label: "44" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-times-2",
      title: "Fives and Threes Climb",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-times-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 hands of 5 fingers. How many fingers?",
              spokenText:
                "Three hands are waving hello! Each hand has five fingers. That's three times five. How many fingers in all?",
            },
            options: [
              { id: "a", label: "15" },
              { id: "b", label: "10" },
              { id: "c", label: "20" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-2-02",
          type: "countObjects",
          payload: {
            prompt: {
              text: "3 rows of 3 flowers. Count them all!",
              spokenText:
                "Three rows of flowers are blooming. Each row has three flowers. That's three times three. Count all the flowers!",
            },
            object: { kind: "emoji", value: "🌸" },
            count: 9,
            choices: [6, 9, 12],
          },
        },
        {
          id: "math-e-times-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "5 × 4 = ?", spokenText: "Five times four. Five groups of four! What is the answer?" },
            options: [
              { id: "a", label: "20" },
              { id: "b", label: "9" },
              { id: "c", label: "25" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Five times two. Tap the number that shows five groups of two.",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "10" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-times-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "3 × 6 = ?", spokenText: "Three times six. Three groups of six! What is the answer?" },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "12" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-times-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "5 × ___ = 25",
              spokenText: "Five times something equals twenty-five. Which number fills the blank?",
            },
            template: "5 × ___ = 25",
            bank: [
              { id: "c1", label: "4" },
              { id: "c2", label: "5" },
              { id: "c3", label: "6" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-times-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each fact to its answer!",
              spokenText: "Match each times-three fact to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "3 × 2" }, right: { label: "6" } },
              { id: "p2", left: { label: "3 × 4" }, right: { label: "12" } },
              { id: "p3", left: { label: "3 × 5" }, right: { label: "15" } },
            ],
          },
        },
        {
          id: "math-e-times-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "5 × 5 = ?", spokenText: "Five times five. Five groups of five! What is the answer?" },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "20" },
              { id: "c", label: "25" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-times-3",
      title: "Mixed Facts Summit",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-times-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "6 × 3 = ?", spokenText: "We're near the top! Six times three. What is the answer?" },
            options: [
              { id: "a", label: "18" },
              { id: "b", label: "9" },
              { id: "c", label: "21" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "4 × 5 = ?", spokenText: "Four times five. Four groups of five! What is the answer?" },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "20" },
              { id: "c", label: "24" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-times-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "___ × 4 = 20",
              spokenText: "Something times four equals twenty. Which number fills the blank?",
            },
            template: "___ × 4 = 20",
            bank: [
              { id: "c1", label: "4" },
              { id: "c2", label: "5" },
              { id: "c3", label: "6" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-times-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Seven times five. Tap the number that shows seven groups of five.",
            },
            options: [
              { id: "a", label: "30" },
              { id: "b", label: "12" },
              { id: "c", label: "35" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-times-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "8 × 5 = ?", spokenText: "Eight times five. Eight groups of five! What is the answer?" },
            options: [
              { id: "a", label: "40" },
              { id: "b", label: "45" },
              { id: "c", label: "35" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-times-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order by their answers, smallest first!",
              spokenText:
                "Each card is a times fact. Work out each answer, then put the cards in order from the smallest answer to the biggest!",
            },
            items: [
              { id: "i1", label: "5 × 5" },
              { id: "i2", label: "2 × 4" },
              { id: "i3", label: "3 × 5" },
              { id: "i4", label: "4 × 5" },
            ],
            correctOrder: ["i2", "i3", "i4", "i1"],
          },
        },
        {
          id: "math-e-times-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "9 × 5 = ?", spokenText: "Nine times five. Nine groups of five! What is the answer?" },
            options: [
              { id: "a", label: "40" },
              { id: "b", label: "45" },
              { id: "c", label: "50" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-times-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 × 4 = ?",
              spokenText: "Summit reached! One last fact. Six times four. What is the answer?",
            },
            options: [
              { id: "a", label: "20" },
              { id: "b", label: "28" },
              { id: "c", label: "24" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
