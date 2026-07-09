import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Add/subtract within 20 · Teen Sums Trek
 * Lesson 1 introduces the make-a-ten strategy for teen sums.
 * Lesson 2 practices adding and subtracting on the trail.
 * Lesson 3 is the summit challenge: harder facts and missing numbers.
 */
export const teenSumsTrek: UnitSeed = {
  id: "math-u-add20",
  bandId: "math-b4",
  title: "Teen Sums Trek",
  icon: "🏔️",
  lessons: [
    {
      id: "math-l-add20-1",
      title: "Climb to Ten and Over",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-add20-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "9 + 4 = ?",
              spokenText: "Nine plus four! Give one to the nine to make ten, then add the three left over. What do you get?",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "13" },
              { id: "c", label: "14" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add20-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Make a ten first!",
              spokenText: "Nine plus four is the same as ten plus something. Tap the missing number!",
            },
            template: "9 + 4 = 10 + ___",
            bank: [
              { id: "b1", label: "2" },
              { id: "b2", label: "3" },
              { id: "b3", label: "4" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-add20-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 4 = ?",
              spokenText: "Eight mountain goats stand on the cliff. Four more climb up to join them! How many goats in all?",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "11" },
              { id: "c", label: "13" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-add20-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Ten plus five! Tap the sum.",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "16" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-add20-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 3 = ?",
              spokenText: "Eight plus three equals what? Hop to ten first, then keep going!",
            },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "11" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add20-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each ten-plus to its sum.",
              spokenText: "Ten plus a little more! Match each problem to its sum.",
            },
            pairs: [
              { id: "p1", left: { label: "10 + 2" }, right: { label: "12" } },
              { id: "p2", left: { label: "10 + 6" }, right: { label: "16" } },
              { id: "p3", left: { label: "10 + 9" }, right: { label: "19" } },
            ],
          },
        },
        {
          id: "math-e-add20-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "9 + 5 = ?",
              spokenText: "Nine plus five equals what? Make a ten to help you!",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "15" },
              { id: "c", label: "13" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-add20-1-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Make a ten first!",
              spokenText: "Eight plus four is the same as ten plus something. Tap the missing number!",
            },
            template: "8 + 4 = 10 + ___",
            bank: [
              { id: "b1", label: "1" },
              { id: "b2", label: "2" },
              { id: "b3", label: "3" },
            ],
            correctChipId: "b2",
          },
        },
      ],
    },
    {
      id: "math-l-add20-2",
      title: "Trail Sums and Take-Aways",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-add20-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "15 − 6 = ?",
              spokenText: "Fifteen minus six! Take away five to land on ten, then take away one more. What is left?",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "9" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add20-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "14 − 6 = ?",
              spokenText: "The hikers packed fourteen trail cookies. They munch six on the way up! How many cookies are left?",
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
          id: "math-e-add20-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the answer.",
              spokenText: "Thirteen minus three equals what? Tap the answer!",
            },
            template: "13 − 3 = ___",
            bank: [
              { id: "b1", label: "9" },
              { id: "b2", label: "10" },
              { id: "b3", label: "11" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-add20-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Seven plus eight! Tap the sum.",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "16" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-add20-2-05",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many tents?",
              spokenText: "So many tents at base camp! Count every tent. How many are there?",
            },
            object: { kind: "emoji", value: "⛺" },
            count: 14,
            choices: [13, 14, 15],
          },
        },
        {
          id: "math-e-add20-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "11 − 5 = ?",
              spokenText: "Eleven minus five equals what?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "6" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add20-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Climb the trail markers!",
              spokenText: "Climb the mountain! Tap the trail markers from the smallest number to the biggest.",
            },
            items: [
              { id: "i1", label: "17" },
              { id: "i2", label: "11" },
              { id: "i3", label: "20" },
              { id: "i4", label: "14" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-add20-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Nine plus something equals sixteen. Tap the missing number!",
            },
            template: "9 + ___ = 16",
            bank: [
              { id: "b1", label: "6" },
              { id: "b2", label: "7" },
              { id: "b3", label: "8" },
            ],
            correctChipId: "b2",
          },
        },
      ],
    },
    {
      id: "math-l-add20-3",
      title: "Summit Challenge",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-add20-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 7 = ?",
              spokenText: "Eight plus seven equals what? Make a ten to help you climb!",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "16" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-add20-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Fourteen minus something equals eight. Tap the missing number!",
            },
            template: "14 − ___ = 8",
            bank: [
              { id: "b1", label: "5" },
              { id: "b2", label: "6" },
              { id: "b3", label: "7" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-add20-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "18 − 9 = ?",
              spokenText: "Eighteen stars twinkle over the mountain. Clouds drift in and hide nine of them! How many stars still twinkle?",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "10" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-add20-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Sixteen minus nine! Tap the answer.",
            },
            options: [
              { id: "a", label: "8" },
              { id: "b", label: "7" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-add20-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its answer.",
              spokenText: "Summit match! Tap each problem, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "9 + 8" }, right: { label: "17" } },
              { id: "p2", left: { label: "13 − 5" }, right: { label: "8" } },
              { id: "p3", left: { label: "6 + 8" }, right: { label: "14" } },
            ],
          },
        },
        {
          id: "math-e-add20-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which makes 12?",
              spokenText: "Which adding problem makes twelve?",
            },
            options: [
              { id: "a", label: "8 + 5" },
              { id: "b", label: "7 + 4" },
              { id: "c", label: "9 + 3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-add20-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing number.",
              spokenText: "Something plus six equals fifteen. Tap the missing number!",
            },
            template: "___ + 6 = 15",
            bank: [
              { id: "b1", label: "8" },
              { id: "b2", label: "9" },
              { id: "b3", label: "10" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-add20-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "20 − 8 = ?",
              spokenText: "Twenty flags fly at the summit. A gust of wind blows eight away! How many flags are still flying?",
            },
            options: [
              { id: "a", label: "13" },
              { id: "b", label: "12" },
              { id: "c", label: "11" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
