import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Two-Digit Team-Up
 * Lesson 1 builds tens-and-ones sense (30 + 4, "2 tens 6 ones").
 * Lesson 2 adds two-digit numbers, no regrouping (32 + 15).
 * Lesson 3 subtracts without regrouping and mixes it up (47 − 23).
 * Every fact is regrouping-free: ones digits never carry or borrow.
 */
export const twoDigitTeamUp: UnitSeed = {
  id: "math-u-2digit",
  bandId: "math-b5",
  title: "Two-Digit Team-Up",
  icon: "🤝",
  lessons: [
    {
      id: "math-l-2digit-1",
      title: "Tens and Ones Together",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-2digit-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "30 + 4 = ?",
              spokenText: "Tens and ones make a great team! Thirty plus four equals what?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "34" },
              { id: "c", label: "43" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2 tens and 6 ones = ?",
              spokenText: "Two tens and six ones team up! What number do they make?",
            },
            options: [
              { id: "a", label: "26" },
              { id: "b", label: "28" },
              { id: "c", label: "62" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-2digit-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "42 + 5 = ?",
              spokenText: "Forty-two plus five equals what? The five joins the ones!",
            },
            template: "42 + 5 = ___",
            bank: [
              { id: "c1", label: "46" },
              { id: "c2", label: "47" },
              { id: "c3", label: "92" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-2digit-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "21 + 7 = ?",
              spokenText: "Twenty-one plus seven equals what? Add the seven to the ones!",
            },
            options: [
              { id: "a", label: "27" },
              { id: "b", label: "28" },
              { id: "c", label: "91" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Forty plus six. Tap the answer!",
            },
            options: [
              { id: "a", label: "40" },
              { id: "b", label: "64" },
              { id: "c", label: "46" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-2digit-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match tens and ones!",
              spokenText: "Match each team of tens and ones to the number it makes!",
            },
            pairs: [
              { id: "p1", left: { label: "5 tens 2 ones" }, right: { label: "52" } },
              { id: "p2", left: { label: "3 tens 8 ones" }, right: { label: "38" } },
              { id: "p3", left: { label: "7 tens 0 ones" }, right: { label: "70" } },
            ],
          },
        },
        {
          id: "math-e-2digit-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "34 + 20 = ?",
              spokenText: "Thirty-four plus twenty equals what? The twenty joins the tens!",
            },
            options: [
              { id: "a", label: "36" },
              { id: "b", label: "44" },
              { id: "c", label: "54" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-2digit-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "Watch those tens and ones! Put these numbers in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "42" },
              { id: "i2", label: "64" },
              { id: "i3", label: "24" },
              { id: "i4", label: "46" },
            ],
            correctOrder: ["i3", "i1", "i4", "i2"],
          },
        },
      ],
    },
    {
      id: "math-l-2digit-2",
      title: "Adding Teams",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-2digit-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "32 + 15 = ?",
              spokenText: "Two teams join up! Thirty-two plus fifteen equals what? Add the tens, then the ones!",
            },
            options: [
              { id: "a", label: "37" },
              { id: "b", label: "47" },
              { id: "c", label: "57" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "23 + 34 = ?",
              spokenText: "Twenty-three plus thirty-four equals what? Tens with tens, ones with ones!",
            },
            options: [
              { id: "a", label: "57" },
              { id: "b", label: "58" },
              { id: "c", label: "67" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-2digit-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "41 + 26 = ?",
              spokenText: "Forty-one plus twenty-six equals what? Fill in the answer!",
            },
            template: "41 + 26 = ___",
            bank: [
              { id: "c1", label: "57" },
              { id: "c2", label: "67" },
              { id: "c3", label: "68" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-2digit-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Fifty-two plus thirteen. Tap the sum!",
            },
            options: [
              { id: "a", label: "55" },
              { id: "b", label: "65" },
              { id: "c", label: "75" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "24 kids + 12 kids = ?",
              spokenText: "Twenty-four kids are riding the bus. At the next stop, twelve more climb on! How many kids are on the bus now?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚌" }, label: "26" },
              { id: "b", visual: { kind: "emoji", value: "🚌" }, label: "35" },
              { id: "c", visual: { kind: "emoji", value: "🚌" }, label: "36" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-2digit-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sum!",
              spokenText: "Match each addition problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "11 + 11" }, right: { label: "22" } },
              { id: "p2", left: { label: "30 + 25" }, right: { label: "55" } },
              { id: "p3", left: { label: "42 + 16" }, right: { label: "58" } },
            ],
          },
        },
        {
          id: "math-e-2digit-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "36 + 42 = ?",
              spokenText: "Thirty-six plus forty-two equals what? You've got this!",
            },
            options: [
              { id: "a", label: "78" },
              { id: "b", label: "79" },
              { id: "c", label: "88" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-2digit-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One more with your ears! Forty-four plus twenty-two. Tap the answer!",
            },
            options: [
              { id: "a", label: "46" },
              { id: "b", label: "62" },
              { id: "c", label: "66" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-2digit-3",
      title: "Take-Away Team",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-2digit-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "47 − 23 = ?",
              spokenText: "Now the team takes away! Forty-seven minus twenty-three equals what? Subtract the tens, then the ones!",
            },
            options: [
              { id: "a", label: "24" },
              { id: "b", label: "25" },
              { id: "c", label: "34" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-2digit-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "58 − 6 = ?",
              spokenText: "Fifty-eight minus six equals what? Take the six from the ones!",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "52" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "68 − 25 = ?",
              spokenText: "Sixty-eight minus twenty-five equals what? Fill in the answer!",
            },
            template: "68 − 25 = ___",
            bank: [
              { id: "c1", label: "33" },
              { id: "c2", label: "43" },
              { id: "c3", label: "44" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-2digit-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Seventy-six minus forty-one. Tap the difference!",
            },
            options: [
              { id: "a", label: "25" },
              { id: "b", label: "34" },
              { id: "c", label: "35" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-2digit-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "39 stickers − 17 stickers = ?",
              spokenText: "You have thirty-nine shiny stickers. You give seventeen to your best friend! How many stickers do you have left?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "✨" }, label: "21" },
              { id: "b", visual: { kind: "emoji", value: "✨" }, label: "22" },
              { id: "c", visual: { kind: "emoji", value: "✨" }, label: "32" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-2digit-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each difference!",
              spokenText: "Match each subtraction problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "56 − 34" }, right: { label: "22" } },
              { id: "p2", left: { label: "89 − 45" }, right: { label: "44" } },
              { id: "p3", left: { label: "77 − 22" }, right: { label: "55" } },
            ],
          },
        },
        {
          id: "math-e-2digit-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "65 + 23 = ?",
              spokenText: "Surprise, it's a plus! Sixty-five plus twenty-three equals what?",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "87" },
              { id: "c", label: "88" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-2digit-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "These numbers look alike, but watch the tens and ones! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "34" },
              { id: "i2", label: "43" },
              { id: "i3", label: "23" },
              { id: "i4", label: "32" },
            ],
            correctOrder: ["i3", "i4", "i1", "i2"],
          },
        },
      ],
    },
  ],
};
