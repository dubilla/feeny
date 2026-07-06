import type { UnitSeed } from "../../schema/pack";

/**
 * Band 6 · Group Gatherers · Equal groups → multiplication
 * Lesson 1 counts equal groups (2 baskets of 3) as a bridge from counting.
 * Lesson 2 builds repeated addition (2 + 2 + 2) from those same groups.
 * Lesson 3 introduces × notation: "3 groups of 2 = 3 × 2".
 */
export const groupGatherers: UnitSeed = {
  id: "math-u-groups",
  bandId: "math-b6",
  title: "Group Gatherers",
  icon: "🧺",
  lessons: [
    {
      id: "math-l-groups-1",
      title: "Basket Buddies",
      primarySkillId: "math-equal-groups",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-groups-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍎🍎🍎 🍎🍎🍎 = ?",
              spokenText:
                "Two baskets each hold three apples. Count them all together! How many apples do the group gatherers have?",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "6" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 3 groups of 2?",
              spokenText: "Which picture shows three groups with two kittens in each group?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐱🐱 🐱🐱 🐱🐱" } },
              { id: "b", visual: { kind: "emoji", value: "🐱🐱🐱 🐱🐱🐱" } },
              { id: "c", visual: { kind: "emoji", value: "🐱🐱 🐱🐱" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-groups-1-03",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many sunflowers in all?",
              spokenText: "The garden has two rows of three sunflowers. Count every sunflower! How many are there?",
            },
            object: { kind: "emoji", value: "🌻" },
            count: 6,
            choices: [5, 6, 7],
          },
        },
        {
          id: "math-e-groups-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "⭐⭐⭐⭐ ⭐⭐⭐⭐ = ?",
              spokenText: "Two groups of four stars are twinkling. Count them all! How many stars in the sky?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "7" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-groups-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the picture that shows two groups of five fish!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐟🐟🐟🐟🐟" } },
              { id: "b", visual: { kind: "emoji", value: "🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟" } },
              { id: "c", visual: { kind: "emoji", value: "🐟🐟🐟 🐟🐟🐟" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each group to its number!",
              spokenText: "Match each bunch of grapes to the number that tells how many there are in all!",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "🍇🍇 🍇🍇" } }, right: { label: "4" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "🍇🍇🍇 🍇🍇🍇" } }, right: { label: "6" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "🍇🍇🍇🍇🍇 🍇🍇🍇🍇🍇" } }, right: { label: "10" } },
            ],
          },
        },
        {
          id: "math-e-groups-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2 groups of 3 = ___",
              spokenText: "Two groups of three! Count them up and fill in the blank. How many in all?",
            },
            template: "2 groups of 3 = ___",
            bank: [
              { id: "c1", label: "5" },
              { id: "c2", label: "6" },
              { id: "c3", label: "7" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-groups-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐢🐢 🐢🐢 🐢🐢 🐢🐢 = ?",
              spokenText: "Four groups of two turtles are crawling along. Count them all! How many turtles?",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "10" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-groups-2",
      title: "Add It Again",
      primarySkillId: "math-equal-groups",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-groups-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 + 2 + 2 = ?",
              spokenText: "Three groups of two fish swim by. Two plus two plus two! How many fish in all?",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "6" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "3 + 3 + 3 = ___",
              spokenText: "Three groups of three! Three plus three plus three. Fill in the blank with the total.",
            },
            template: "3 + 3 + 3 = ___",
            bank: [
              { id: "c1", label: "6" },
              { id: "c2", label: "9" },
              { id: "c3", label: "12" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-groups-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 + 5 = ?",
              spokenText: "Two boxes each hold five donuts. Five plus five! How many donuts altogether?",
            },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "8" },
              { id: "c", label: "11" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-groups-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🦆🦆🦆🦆 🦆🦆🦆🦆 = ?",
              spokenText: "Two groups of four ducks are paddling. Four plus four! How many ducks in the pond?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "8" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Two plus two plus two plus two. Four groups of two! Tap the answer.",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "10" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-groups-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the adding to its total!",
              spokenText: "Match each repeated addition to the number that tells its total!",
            },
            pairs: [
              { id: "p1", left: { label: "2 + 2" }, right: { label: "4" } },
              { id: "p2", left: { label: "3 + 3" }, right: { label: "6" } },
              { id: "p3", left: { label: "5 + 5" }, right: { label: "10" } },
            ],
          },
        },
        {
          id: "math-e-groups-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2 + 2 + 2 + 2 + 2 = ___",
              spokenText: "Five groups of two! Add all the twos together and fill in the blank.",
            },
            template: "2 + 2 + 2 + 2 + 2 = ___",
            bank: [
              { id: "c1", label: "8" },
              { id: "c2", label: "10" },
              { id: "c3", label: "12" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-groups-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐞🐞🐞 🐞🐞🐞 = ?",
              spokenText: "Two groups of three ladybugs are resting on a leaf. Three plus three! How many ladybugs?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "7" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-groups-3",
      title: "Meet the Times Sign",
      primarySkillId: "math-equal-groups",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-groups-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 groups of 2 = 3 × 2 = ?",
              spokenText:
                "Three groups of two strawberries is the same as three times two. What does three times two equal?",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "6" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 × 4 = ?",
              spokenText: "Two times four means two groups of four. What does two times four equal?",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "6" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-groups-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "5 × 2 = ___",
              spokenText: "Five times two means five groups of two. Fill in the blank with the answer!",
            },
            template: "5 × 2 = ___",
            bank: [
              { id: "c1", label: "7" },
              { id: "c2", label: "10" },
              { id: "c3", label: "12" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-groups-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Two times five! That is two groups of five. Tap the answer.",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "10" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-groups-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 4 × 2?",
              spokenText: "Four times two means four groups of two. Which picture of baby chicks shows four times two?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐥🐥 🐥🐥 🐥🐥 🐥🐥" } },
              { id: "b", visual: { kind: "emoji", value: "🐥🐥🐥🐥 🐥🐥🐥🐥" } },
              { id: "c", visual: { kind: "emoji", value: "🐥🐥 🐥🐥 🐥🐥" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-groups-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each times fact to its total!",
              spokenText: "Match each times fact to the number that tells how much it equals!",
            },
            pairs: [
              { id: "p1", left: { label: "2 × 3" }, right: { label: "6" } },
              { id: "p2", left: { label: "5 × 2" }, right: { label: "10" } },
              { id: "p3", left: { label: "4 × 2" }, right: { label: "8" } },
            ],
          },
        },
        {
          id: "math-e-groups-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 × 3 = ?",
              spokenText: "Three times three means three groups of three. What does three times three equal?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "12" },
              { id: "c", label: "9" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-groups-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 × 5 = ?",
              spokenText: "Two times five means two groups of five. What does two times five equal?",
            },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "8" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
