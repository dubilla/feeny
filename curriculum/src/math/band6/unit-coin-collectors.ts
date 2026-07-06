import type { UnitSeed } from "../../schema/pack";

/**
 * Band 6 · Coin Collectors · Money
 * Lesson 1 learns coin values (penny 1¢, nickel 5¢, dime 10¢, quarter 25¢).
 * Lesson 2 counts small collections of coins.
 * Lesson 3 makes target amounts ("which coins make 30¢?").
 * All amounts stay ≤ 100¢ and every total is exact.
 */
export const coinCollectors: UnitSeed = {
  id: "math-u-coins",
  bandId: "math-b6",
  title: "Coin Collectors",
  icon: "🪙",
  lessons: [
    {
      id: "math-l-coins-1",
      title: "What's It Worth?",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-coins-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "A nickel 🪙 is worth how much?",
              spokenText: "Here is a shiny nickel! How many cents is a nickel worth?",
            },
            options: [
              { id: "a", label: "1¢" },
              { id: "b", label: "5¢" },
              { id: "c", label: "10¢" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-1-02",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the coin that is worth ten cents!",
            },
            options: [
              { id: "a", label: "penny" },
              { id: "b", label: "dime" },
              { id: "c", label: "quarter" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "How much is a dime worth? 🪙",
              spokenText: "Here is a little dime. How many cents is a dime worth?",
            },
            options: [
              { id: "a", label: "10¢" },
              { id: "b", label: "25¢" },
              { id: "c", label: "5¢" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-coins-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coin is worth 1¢?",
              spokenText: "A penny is the smallest coin. Which coin is worth just one cent?",
            },
            options: [
              { id: "a", label: "penny" },
              { id: "b", label: "nickel" },
              { id: "c", label: "dime" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-coins-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each coin to its value!",
              spokenText: "Match each coin to the number of cents it is worth!",
            },
            pairs: [
              { id: "p1", left: { label: "penny" }, right: { label: "1¢" } },
              { id: "p2", left: { label: "nickel" }, right: { label: "5¢" } },
              { id: "p3", left: { label: "dime" }, right: { label: "10¢" } },
            ],
          },
        },
        {
          id: "math-e-coins-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "A quarter is worth ___ cents",
              spokenText: "A quarter is the biggest coin here. How many cents is a quarter worth? Fill in the blank!",
            },
            template: "A quarter is worth ___ cents",
            bank: [
              { id: "c1", label: "5" },
              { id: "c2", label: "10" },
              { id: "c3", label: "25" },
            ],
            correctChipId: "c3",
          },
        },
        {
          id: "math-e-coins-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "How much is a quarter worth? 🪙",
              spokenText: "Here is a big quarter. How many cents is a quarter worth?",
            },
            options: [
              { id: "a", label: "20¢" },
              { id: "b", label: "25¢" },
              { id: "c", label: "15¢" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coin is worth the most?",
              spokenText: "A penny, a nickel, and a dime are on the table. Which coin is worth the most cents?",
            },
            options: [
              { id: "a", label: "penny" },
              { id: "b", label: "nickel" },
              { id: "c", label: "dime" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-coins-2",
      title: "Count the Coins",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-coins-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🪙🪙🪙 pennies = ?",
              spokenText: "Count these three pennies. Each penny is worth one cent. How many cents in all?",
            },
            options: [
              { id: "a", label: "2¢" },
              { id: "b", label: "3¢" },
              { id: "c", label: "4¢" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🪙🪙 nickels = ?",
              spokenText: "Here are two nickels. Each nickel is worth five cents. Count by fives! How much is that?",
            },
            options: [
              { id: "a", label: "10¢" },
              { id: "b", label: "7¢" },
              { id: "c", label: "15¢" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-coins-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2 dimes = ___ cents",
              spokenText: "Two dimes! Each dime is worth ten cents. Count by tens and fill in the blank.",
            },
            template: "2 dimes = ___ cents",
            bank: [
              { id: "c1", label: "10" },
              { id: "c2", label: "20" },
              { id: "c3", label: "30" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-coins-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1 dime + 1 nickel = ?",
              spokenText: "You have one dime worth ten cents and one nickel worth five cents. How much altogether?",
            },
            options: [
              { id: "a", label: "20¢" },
              { id: "b", label: "10¢" },
              { id: "c", label: "15¢" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-coins-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "You have one quarter and one penny. Tap how much you have in all!",
            },
            options: [
              { id: "a", label: "25¢" },
              { id: "b", label: "26¢" },
              { id: "c", label: "30¢" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 pennies + 1 nickel = ?",
              spokenText: "Five pennies make five cents, and one nickel makes five cents too. How much together?",
            },
            options: [
              { id: "a", label: "10¢" },
              { id: "b", label: "6¢" },
              { id: "c", label: "15¢" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-coins-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each coin group to its total!",
              spokenText: "Match each little pile of coins to the number of cents it is worth in all!",
            },
            pairs: [
              { id: "p1", left: { label: "3 pennies" }, right: { label: "3¢" } },
              { id: "p2", left: { label: "2 nickels" }, right: { label: "10¢" } },
              { id: "p3", left: { label: "2 dimes" }, right: { label: "20¢" } },
            ],
          },
        },
        {
          id: "math-e-coins-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1 dime + 2 pennies = ?",
              spokenText: "One dime is ten cents, plus two pennies. How many cents in all?",
            },
            options: [
              { id: "a", label: "12¢" },
              { id: "b", label: "11¢" },
              { id: "c", label: "20¢" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-coins-3",
      title: "Make the Amount",
      primarySkillId: "math-time-money",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-coins-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coins make 30¢?",
              spokenText: "You want to make exactly thirty cents. Which coins should the collector pick?",
            },
            options: [
              { id: "a", label: "2 dimes" },
              { id: "b", label: "3 dimes" },
              { id: "c", label: "1 quarter" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coins make 15¢?",
              spokenText: "You want to make exactly fifteen cents. Which coins make that amount?",
            },
            options: [
              { id: "a", label: "2 nickels" },
              { id: "b", label: "1 quarter" },
              { id: "c", label: "1 dime + 1 nickel" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-coins-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2 dimes + 1 nickel = ___ cents",
              spokenText: "Two dimes make twenty cents, and one nickel makes five more. Fill in the blank with the total!",
            },
            template: "2 dimes + 1 nickel = ___ cents",
            bank: [
              { id: "c1", label: "20" },
              { id: "c2", label: "25" },
              { id: "c3", label: "30" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-coins-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the coins that make exactly twenty cents!",
            },
            options: [
              { id: "a", label: "1 dime + 1 nickel" },
              { id: "b", label: "3 nickels" },
              { id: "c", label: "2 dimes" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-coins-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coins make 50¢?",
              spokenText: "You want to make exactly fifty cents. Which coins make that amount?",
            },
            options: [
              { id: "a", label: "2 quarters" },
              { id: "b", label: "4 dimes" },
              { id: "c", label: "5 nickels" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-coins-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each amount to its coins!",
              spokenText: "Match each amount of cents to the coins that make it!",
            },
            pairs: [
              { id: "p1", left: { label: "10¢" }, right: { label: "2 nickels" } },
              { id: "p2", left: { label: "25¢" }, right: { label: "1 quarter" } },
              { id: "p3", left: { label: "20¢" }, right: { label: "2 dimes" } },
            ],
          },
        },
        {
          id: "math-e-coins-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coins make 6¢?",
              spokenText: "You want to make exactly six cents. Which coins make that amount?",
            },
            options: [
              { id: "a", label: "1 dime" },
              { id: "b", label: "1 nickel + 1 penny" },
              { id: "c", label: "6 nickels" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-coins-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which coins make 35¢?",
              spokenText: "You want to make exactly thirty-five cents. Which coins make that amount?",
            },
            options: [
              { id: "a", label: "1 quarter + 1 dime" },
              { id: "b", label: "3 dimes" },
              { id: "c", label: "1 quarter + 1 nickel" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
