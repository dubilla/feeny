import type { UnitSeed } from "../../schema/pack";

/**
 * Band 7 · Sharing Squad
 * Lesson 1 meets division as fair sharing with emoji groups (no symbol yet).
 * Lesson 2 introduces the ÷ symbol.
 * Lesson 3 links multiplication and division as fact families.
 * All divisions are exact; dividends stay ≤ 30.
 */
export const sharingSquad: UnitSeed = {
  id: "math-u-share",
  bandId: "math-b7",
  title: "Sharing Squad",
  icon: "🍕",
  lessons: [
    {
      id: "math-l-share-1",
      title: "Fair Shares",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-share-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "12 cookies shared by 3 friends. How many each?",
              spokenText:
                "The Sharing Squad has twelve cookies. Three friends share them fairly. How many cookies does each friend get?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍪🍪🍪" }, label: "3" },
              { id: "b", visual: { kind: "emoji", value: "🍪🍪🍪🍪" }, label: "4" },
              { id: "c", visual: { kind: "emoji", value: "🍪🍪🍪🍪🍪" }, label: "5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-share-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 strawberries on 2 plates. How many on each?",
              spokenText:
                "Six strawberries are shared onto two plates, the same on each. How many strawberries are on one plate?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍓🍓" }, label: "2" },
              { id: "b", visual: { kind: "emoji", value: "🍓🍓🍓🍓" }, label: "4" },
              { id: "c", visual: { kind: "emoji", value: "🍓🍓🍓" }, label: "3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-share-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 apples shared by 5 kids. How many each?",
              spokenText: "Ten apples are shared fairly by five kids. How many apples does each kid get?",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "5" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-share-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText:
                "Listen closely! Eight balloons are shared fairly by two friends. Tap how many balloons each friend gets.",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "6" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-share-1-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "9 acorns onto 3 branches. Count one branch!",
              spokenText:
                "Nine acorns are shared fairly onto three branches. Count how many acorns are on just one branch!",
            },
            object: { kind: "emoji", value: "🌰" },
            count: 3,
            choices: [2, 3, 4],
          },
        },
        {
          id: "math-e-share-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 pizzas shared by 4 friends. How many each?",
              spokenText: "Eight pizzas are shared fairly by four friends. How many pizzas does each friend get?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-share-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sharing story to its answer!",
              spokenText: "Match each fair-sharing story to how many each friend gets!",
            },
            pairs: [
              { id: "p1", left: { label: "6 shared by 2" }, right: { label: "3" } },
              { id: "p2", left: { label: "8 shared by 2" }, right: { label: "4" } },
              { id: "p3", left: { label: "10 shared by 5" }, right: { label: "2" } },
            ],
          },
        },
        {
          id: "math-e-share-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which plate shows a fair share?",
              spokenText:
                "Two friends should get the very same amount. Which picture shows a fair share, with the same number of candies in each group?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍬🍬🍬 🍬" } },
              { id: "b", visual: { kind: "emoji", value: "🍬🍬 🍬🍬" } },
              { id: "c", visual: { kind: "emoji", value: "🍬 🍬🍬🍬" } },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-share-2",
      title: "Meet the Divide Sign",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-share-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "12 ÷ 3 = ?",
              spokenText:
                "Here comes the divide sign! Twelve divided by three means twelve shared into three equal groups. What is the answer?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-share-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 ÷ 2 = ?",
              spokenText: "Ten divided by two. Ten shared into two equal groups. What is the answer?",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "2" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-share-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "15 ÷ ___ = 5",
              spokenText: "Fifteen divided by something equals five. Which number fills the blank?",
            },
            template: "15 ÷ ___ = 5",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "5" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-share-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Twelve divided by two. Tap the answer.",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "6" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-share-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "15 ÷ 5 = ?",
              spokenText:
                "Fifteen oranges shared into five equal bowls. That's fifteen divided by five. How many oranges in each bowl?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍊🍊🍊🍊" }, label: "4" },
              { id: "b", visual: { kind: "emoji", value: "🍊🍊" }, label: "2" },
              { id: "c", visual: { kind: "emoji", value: "🍊🍊🍊" }, label: "3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-share-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "20 ÷ 4 = ?",
              spokenText: "Twenty divided by four. Twenty shared into four equal groups. What is the answer?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "4" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-share-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each divide fact to its answer!",
              spokenText: "Match each divide fact to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "8 ÷ 2" }, right: { label: "4" } },
              { id: "p2", left: { label: "9 ÷ 3" }, right: { label: "3" } },
              { id: "p3", left: { label: "10 ÷ 5" }, right: { label: "2" } },
            ],
          },
        },
        {
          id: "math-e-share-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "18 ÷ 3 = ?",
              spokenText: "Eighteen divided by three. Eighteen shared into three equal groups. What is the answer?",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "5" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-share-3",
      title: "Fact Family Feast",
      primarySkillId: "math-mult-facts",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-share-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 × 4 = 12, so 12 ÷ 4 = ?",
              spokenText:
                "Multiplication and division are a team! Three times four is twelve. So what is twelve divided by four?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "4" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-share-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "20 ÷ 4 = ___",
              spokenText: "Twenty divided by four. Which number fills the blank?",
            },
            template: "20 ÷ 4 = ___",
            bank: [
              { id: "c1", label: "4" },
              { id: "c2", label: "5" },
              { id: "c3", label: "6" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-share-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which fact belongs with 2, 5, and 10?",
              spokenText:
                "A fact family uses the same three numbers. Which fact belongs with two, five, and ten?",
            },
            options: [
              { id: "a", label: "2 × 5 = 10" },
              { id: "b", label: "2 × 4 = 8" },
              { id: "c", label: "3 × 5 = 15" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-share-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText:
                "Listen carefully! Two times six is twelve. Tap the answer to twelve divided by six.",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-share-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each times fact to its divide partner!",
              spokenText:
                "Every times fact has a divide partner in the same family. Match each one to its partner!",
            },
            pairs: [
              { id: "p1", left: { label: "3 × 5" }, right: { label: "15 ÷ 3" } },
              { id: "p2", left: { label: "2 × 6" }, right: { label: "12 ÷ 6" } },
              { id: "p3", left: { label: "4 × 5" }, right: { label: "20 ÷ 4" } },
            ],
          },
        },
        {
          id: "math-e-share-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "24 ÷ 4 = ?",
              spokenText: "Twenty-four divided by four. Twenty-four shared into four equal groups. What is the answer?",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "5" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-share-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 × 5 = 25, so 25 ÷ 5 = ?",
              spokenText: "Five times five is twenty-five. So what is twenty-five divided by five?",
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
          id: "math-e-share-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which fact completes the family 3, 6, 18?",
              spokenText:
                "The last family uses three, six, and eighteen. Which fact completes it?",
            },
            options: [
              { id: "a", label: "18 ÷ 3 = 6" },
              { id: "b", label: "18 ÷ 2 = 9" },
              { id: "c", label: "18 ÷ 9 = 2" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
