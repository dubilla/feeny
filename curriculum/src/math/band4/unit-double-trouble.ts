import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Add/subtract within 20 · Double Trouble
 * Lesson 1 introduces small doubles with pictures (1+1 through 5+5).
 * Lesson 2 practices the big doubles (6+6 through 9+9).
 * Lesson 3 stretches into near doubles: double it, then one more.
 */
export const doubleTrouble: UnitSeed = {
  id: "math-u-doubles",
  bandId: "math-b4",
  title: "Double Trouble",
  icon: "👯",
  lessons: [
    {
      id: "math-l-doubles-1",
      title: "Seeing Double",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-doubles-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 2 + 2?",
              spokenText: "Which picture shows two mittens plus two mittens?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧤🧤 🧤🧤" } },
              { id: "b", visual: { kind: "emoji", value: "🧤🧤 🧤" } },
              { id: "c", visual: { kind: "emoji", value: "🧤🧤🧤 🧤🧤🧤" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-doubles-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 + 4 = ?",
              spokenText: "Double four! Four plus four equals what?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "8" },
              { id: "c", label: "9" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-doubles-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Double five! Five plus five. Tap the answer!",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "11" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-doubles-1-04",
          type: "countObjects",
          payload: {
            prompt: {
              text: "How many socks?",
              spokenText: "Socks come in twos! Count every sock. How many are there?",
            },
            object: { kind: "emoji", value: "🧦" },
            count: 8,
            choices: [7, 8, 9],
          },
        },
        {
          id: "math-e-doubles-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the double.",
              spokenText: "Double three! Three plus three equals what? Tap the answer!",
            },
            template: "3 + 3 = ___",
            bank: [
              { id: "b1", label: "5" },
              { id: "b2", label: "6" },
              { id: "b3", label: "7" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-doubles-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each double to its answer.",
              spokenText: "Double match! Tap each double, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "1 + 1" }, right: { label: "2" } },
              { id: "p2", left: { label: "4 + 4" }, right: { label: "8" } },
              { id: "p3", left: { label: "5 + 5" }, right: { label: "10" } },
            ],
          },
        },
        {
          id: "math-e-doubles-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 bones + 3 bones = ?",
              spokenText: "Twin puppies each dig up three bones. How many bones did they dig up in all?",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "5" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-doubles-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which double makes 8?",
              spokenText: "Which double makes eight?",
            },
            options: [
              { id: "a", label: "3 + 3" },
              { id: "b", label: "5 + 5" },
              { id: "c", label: "4 + 4" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-doubles-2",
      title: "Bigger Doubles",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-doubles-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 + 6 = ?",
              spokenText: "Double six! Six plus six equals what?",
            },
            options: [
              { id: "a", label: "11" },
              { id: "b", label: "13" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-doubles-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 8 = ?",
              spokenText: "Double eight! Eight plus eight equals what?",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "15" },
              { id: "c", label: "17" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-doubles-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the double.",
              spokenText: "Double seven! Seven plus seven equals what? Tap the answer!",
            },
            template: "7 + 7 = ___",
            bank: [
              { id: "b1", label: "13" },
              { id: "b2", label: "14" },
              { id: "b3", label: "15" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-doubles-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Double nine! Nine plus nine. Tap the answer!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "18" },
              { id: "c", label: "19" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-doubles-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each double to its answer.",
              spokenText: "Double match! Tap each double, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "2 + 2" }, right: { label: "4" } },
              { id: "p2", left: { label: "8 + 8" }, right: { label: "16" } },
              { id: "p3", left: { label: "9 + 9" }, right: { label: "18" } },
            ],
          },
        },
        {
          id: "math-e-doubles-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which double makes 18?",
              spokenText: "Which double makes eighteen?",
            },
            options: [
              { id: "a", label: "8 + 8" },
              { id: "b", label: "9 + 9" },
              { id: "c", label: "7 + 7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-doubles-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Climb the doubles staircase!",
              spokenText: "The doubles staircase! Tap the answers from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "16" },
              { id: "i2", label: "12" },
              { id: "i3", label: "18" },
              { id: "i4", label: "14" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-doubles-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Find the missing double.",
              spokenText: "Something plus eight equals sixteen. It is a double! Tap the missing number.",
            },
            template: "___ + 8 = 16",
            bank: [
              { id: "b1", label: "7" },
              { id: "b2", label: "8" },
              { id: "b3", label: "9" },
            ],
            correctChipId: "b2",
          },
        },
      ],
    },
    {
      id: "math-l-doubles-3",
      title: "Near Doubles",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-doubles-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "6 + 7 = ?",
              spokenText: "Six plus seven! Think: double six is twelve, then one more. What is it?",
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
          id: "math-e-doubles-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Use the double!",
              spokenText: "Six plus seven is the same as six plus six plus one more. Tap the missing number!",
            },
            template: "6 + 7 = 6 + 6 + ___",
            bank: [
              { id: "b1", label: "1" },
              { id: "b2", label: "2" },
              { id: "b3", label: "3" },
            ],
            correctChipId: "b1",
          },
        },
        {
          id: "math-e-doubles-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 + 6 = ?",
              spokenText: "Five plus six! Think: double five is ten, then one more. What is it?",
            },
            options: [
              { id: "a", label: "11" },
              { id: "b", label: "10" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-doubles-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Eight plus nine! Think: double eight is sixteen, then one more. Tap the answer!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "18" },
              { id: "c", label: "17" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-doubles-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "7 + 8 = ?",
              spokenText: "Seven plus eight! Double seven, then one more. What is it?",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "15" },
              { id: "c", label: "16" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-doubles-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each near double to its answer.",
              spokenText: "Near-double match! Tap each problem, then tap its answer.",
            },
            pairs: [
              { id: "p1", left: { label: "4 + 5" }, right: { label: "9" } },
              { id: "p2", left: { label: "6 + 7" }, right: { label: "13" } },
              { id: "p3", left: { label: "9 + 10" }, right: { label: "19" } },
            ],
          },
        },
        {
          id: "math-e-doubles-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the answer.",
              spokenText: "Nine plus eight! Double nine is eighteen, so take one away. Tap the answer!",
            },
            template: "9 + 8 = ___",
            bank: [
              { id: "b1", label: "16" },
              { id: "b2", label: "17" },
              { id: "b3", label: "18" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-doubles-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which near double makes 11?",
              spokenText: "Which near double makes eleven?",
            },
            options: [
              { id: "a", label: "6 + 7" },
              { id: "b", label: "4 + 5" },
              { id: "c", label: "5 + 6" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
