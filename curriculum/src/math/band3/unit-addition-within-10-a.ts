import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Addition within 10 · Unit A
 * Lesson 1 bridges counting → adding with picture groups.
 * Lesson 2 moves to symbolic sums, pictures still available as support.
 */
export const additionWithin10A: UnitSeed = {
  id: "math-u-add10-a",
  bandId: "math-b3",
  title: "Adding Friends",
  icon: "🐣",
  lessons: [
    {
      id: "math-l-add10-a1",
      title: "Put Them Together",
      primarySkillId: "math-add-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-add10-a1-01",
          type: "countObjects",
          payload: {
            prompt: { text: "How many ducks?", spokenText: "Count the ducks! How many do you see?" },
            object: { kind: "emoji", value: "🦆" },
            count: 3,
            choices: [2, 3, 4],
          },
        },
        {
          id: "math-e-add10-a1-02",
          type: "countObjects",
          payload: {
            prompt: { text: "How many stars?", spokenText: "Count the stars! How many are there?" },
            object: { kind: "emoji", value: "⭐" },
            count: 5,
            choices: [4, 5, 6],
          },
        },
        {
          id: "math-e-add10-a1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 frogs + 1 frog = ?",
              spokenText: "Two frogs are on a log. One more frog hops on! How many frogs now?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐸🐸" }, label: "2" },
              { id: "b", visual: { kind: "emoji", value: "🐸🐸🐸" }, label: "3" },
              { id: "c", visual: { kind: "emoji", value: "🐸🐸🐸🐸" }, label: "4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 apples + 2 apples = ?",
              spokenText: "You have three apples. A friend gives you two more! How many apples do you have?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "5" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a1-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many fish in all?",
              spokenText: "Some fish are swimming together. Count them all! How many fish?",
            },
            object: { kind: "emoji", value: "🐠" },
            count: 6,
            choices: [5, 6, 7],
          },
        },
        {
          id: "math-e-add10-a1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1 + 4 = ?",
              spokenText: "One plus four equals what?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "5" },
              { id: "d", label: "6" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-add10-a1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 2 + 2?",
              spokenText: "Which picture shows two plus two bunnies?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐰🐰🐰" } },
              { id: "b", visual: { kind: "emoji", value: "🐰🐰 🐰🐰" } },
              { id: "c", visual: { kind: "emoji", value: "🐰🐰 🐰🐰🐰" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 + 3 = ?",
              spokenText: "Four plus three equals what?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "7" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-add10-a2",
      title: "Sums to Ten",
      primarySkillId: "math-add-within-10",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-add10-a2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "5 + 2 = ?", spokenText: "Five plus two equals what?" },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "7" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a2-02",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many cookies in all?",
              spokenText: "Count all the cookies on the plate! How many are there?",
            },
            object: { kind: "emoji", value: "🍪" },
            count: 8,
            choices: [7, 8, 9],
          },
        },
        {
          id: "math-e-add10-a2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "6 + 3 = ?", spokenText: "Six plus three equals what?" },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "9" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which makes 10?",
              spokenText: "Which one makes ten?",
            },
            options: [
              { id: "a", label: "5 + 4" },
              { id: "b", label: "6 + 4" },
              { id: "c", label: "7 + 4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 bees + 3 bees = ?",
              spokenText: "Three bees are on a flower. Three more bees buzz over! How many bees now?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝🐝🐝🐝🐝" }, label: "5" },
              { id: "b", visual: { kind: "emoji", value: "🐝🐝🐝🐝🐝🐝" }, label: "6" },
              { id: "c", visual: { kind: "emoji", value: "🐝🐝🐝🐝🐝🐝🐝" }, label: "7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add10-a2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "2 + 7 = ?", spokenText: "Two plus seven equals what?" },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "8" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-add10-a2-07",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many balloons?",
              spokenText: "Count the balloons before they float away! How many balloons?",
            },
            object: { kind: "emoji", value: "🎈" },
            count: 10,
            choices: [9, 10, 8],
          },
        },
        {
          id: "math-e-add10-a2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "4 + 6 = ?", spokenText: "Four plus six equals what?" },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "11" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
