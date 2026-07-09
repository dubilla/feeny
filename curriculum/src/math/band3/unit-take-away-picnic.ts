import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Subtraction within 10 · Take-Away Picnic
 * Lesson 1 introduces take-away with small picnic stories and pictures.
 * Lesson 2 practices symbolic differences up to 10.
 * Lesson 3 stretches with missing parts and take-away puzzles.
 */
export const takeAwayPicnic: UnitSeed = {
  id: "math-u-sub10",
  bandId: "math-b3",
  title: "Take-Away Picnic",
  icon: "🐜",
  lessons: [
    {
      id: "math-l-sub10-1",
      title: "Ants at the Picnic",
      primarySkillId: "math-sub-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-sub10-1-01",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many strawberries?",
              spokenText: "Welcome to the picnic! Count the strawberries on the blanket. How many are there?",
            },
            object: { kind: "emoji", value: "🍓" },
            count: 4,
            choices: [3, 4, 5],
          },
        },
        {
          id: "math-e-sub10-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 − 2 = ?",
              spokenText: "Six apples are on the blanket. Two ants carry two apples away! How many apples are left?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-sub10-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 − 1 = ?",
              spokenText: "Three cookies are on the plate. A sneaky bird grabs one! How many cookies are left?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "3" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-sub10-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Four cupcakes are on a plate. Someone eats one! Tap how many cupcakes are left.",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-sub10-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the answer.",
              spokenText: "Five minus two equals what? Tap the number that finishes it.",
            },
            template: "5 − 2 = ___",
            bank: [
              { id: "b1", label: "4" },
              { id: "b2", label: "3" },
              { id: "b3", label: "2" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-sub10-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 − 2 = ?",
              spokenText: "Four minus two equals what?",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "1" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-sub10-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each take-away to its answer.",
              spokenText: "Match each take-away to its answer! Tap a problem, then tap the number that goes with it.",
            },
            pairs: [
              { id: "p1", left: { label: "3 − 1" }, right: { label: "2" } },
              { id: "p2", left: { label: "5 − 4" }, right: { label: "1" } },
              { id: "p3", left: { label: "4 − 0" }, right: { label: "4" } },
            ],
          },
        },
        {
          id: "math-e-sub10-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 − 3 = ?",
              spokenText: "Six grapes are in the bowl. The ants march off with three! How many grapes are left?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-sub10-2",
      title: "Fly-Away Birds",
      primarySkillId: "math-sub-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-sub10-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "7 − 3 = ?",
              spokenText: "Seven minus three equals what?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "5" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-sub10-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 − 3 = ?",
              spokenText: "Eight birds sit on the picnic fence. Three fly away! How many birds are still sitting there?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "6" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-sub10-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Seven minus something equals four. How many were taken away? Tap the missing number.",
            },
            template: "7 − ___ = 4",
            bank: [
              { id: "b1", label: "4" },
              { id: "b2", label: "3" },
              { id: "b3", label: "2" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-sub10-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Eight ants march to the picnic. Two turn around and go home! Tap how many ants keep marching.",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "6" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-sub10-2-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many watermelon slices?",
              spokenText: "Yum, watermelon! Count the slices before they get eaten. How many slices?",
            },
            object: { kind: "emoji", value: "🍉" },
            count: 7,
            choices: [6, 7, 8],
          },
        },
        {
          id: "math-e-sub10-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 − 2 = ?",
              spokenText: "Ten minus two equals what?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "9" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-sub10-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Count back from 10!",
              spokenText: "The balloons pop one at a time! Tap the numbers counting back, from ten down to seven.",
            },
            items: [
              { id: "i1", label: "8" },
              { id: "i2", label: "10" },
              { id: "i3", label: "7" },
              { id: "i4", label: "9" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-sub10-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the answer.",
              spokenText: "Nine minus five equals what? Tap the number that finishes it.",
            },
            template: "9 − 5 = ___",
            bank: [
              { id: "b1", label: "3" },
              { id: "b2", label: "5" },
              { id: "b3", label: "4" },
            ],
            correctChipId: "b3",
          },
        },
      ],
    },
    {
      id: "math-l-sub10-3",
      title: "Picnic Puzzles",
      primarySkillId: "math-sub-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-sub10-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 − 6 = ?",
              spokenText: "Ten sandwiches are in the basket. The ant team carries off six! How many sandwiches are left?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "5" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-sub10-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the starting number.",
              spokenText: "Some number minus three equals five. What number did we start with? Tap it.",
            },
            template: "___ − 3 = 5",
            bank: [
              { id: "b1", label: "9" },
              { id: "b2", label: "7" },
              { id: "b3", label: "8" },
            ],
            correctChipId: "b3",
          },
        },
        {
          id: "math-e-sub10-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "9 − 4 = ?",
              spokenText: "Nine minus four equals what?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "5" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-sub10-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Ten berries are in the basket. Hungry birds eat seven! Tap how many berries are left.",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "4" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-sub10-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each take-away to its answer.",
              spokenText: "Match time! Tap each take-away problem, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "8 − 3" }, right: { label: "5" } },
              { id: "p2", left: { label: "9 − 2" }, right: { label: "7" } },
              { id: "p3", left: { label: "10 − 9" }, right: { label: "1" } },
            ],
          },
        },
        {
          id: "math-e-sub10-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which take-away makes 2?",
              spokenText: "Which take-away makes two? Try each one!",
            },
            options: [
              { id: "a", label: "7 − 4" },
              { id: "b", label: "6 − 4" },
              { id: "c", label: "5 − 4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-sub10-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Ten minus something equals four. How many were taken away? Tap the missing number.",
            },
            template: "10 − ___ = 4",
            bank: [
              { id: "b1", label: "6" },
              { id: "b2", label: "5" },
              { id: "b3", label: "4" },
            ],
            correctChipId: "b1",
          },
        },
        {
          id: "math-e-sub10-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "7 − 7 = ?",
              spokenText: "Seven fireflies glow at the picnic. All seven fly away into the night! How many fireflies are left?",
            },
            options: [
              { id: "a", label: "0" },
              { id: "b", label: "1" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
