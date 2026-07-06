import type { UnitSeed } from "../../schema/pack";

/**
 * Band 8 · Multiply Mission
 * Lesson 1 learns the times-ten patterns (3 × 10, 30 × 2).
 * Lesson 2 breaks apart to multiply (14 × 3 = 10 × 3 + 4 × 3).
 * Lesson 3 multiplies two-digit by one-digit; every product ≤ 200.
 * Space-mission energy; prompts always read aloud.
 */
export const multiplyMission: UnitSeed = {
  id: "math-u-multbig",
  bandId: "math-b8",
  title: "Multiply Mission",
  icon: "🛸",
  lessons: [
    {
      id: "math-l-multbig-1",
      title: "Power of Ten",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-multbig-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 × 10 = ?",
              spokenText: "Times ten just adds a zero! Three times ten equals what?",
            },
            options: [
              { id: "a", label: "30" },
              { id: "b", label: "13" },
              { id: "c", label: "300" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-multbig-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "30 × 2 = ?",
              spokenText: "Thirty times two equals what? Think three tens, then double it!",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "60" },
              { id: "c", label: "32" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10 × 7 = ?",
              spokenText: "Ten times seven equals what? Just pop a zero onto the seven!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "70" },
              { id: "c", label: "71" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "5 × 10 = ?",
              spokenText: "Five times ten equals what? Fill in the answer!",
            },
            template: "5 × 10 = ___",
            bank: [
              { id: "c1", label: "15" },
              { id: "c2", label: "50" },
              { id: "c3", label: "55" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-multbig-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears! Ten times four. Tap the answer!",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "40" },
              { id: "c", label: "44" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "40 × 2 = ?",
              spokenText: "Forty times two equals what? Four tens, doubled!",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "60" },
              { id: "c", label: "80" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-multbig-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each times-ten!",
              spokenText: "Match each times-ten problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "2 × 10" }, right: { label: "20" } },
              { id: "p2", left: { label: "6 × 10" }, right: { label: "60" } },
              { id: "p3", left: { label: "9 × 10" }, right: { label: "90" } },
            ],
          },
        },
        {
          id: "math-e-multbig-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "Each of these is a number times ten! Put the answers in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "50" },
              { id: "i2", label: "20" },
              { id: "i3", label: "70" },
              { id: "i4", label: "40" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
      ],
    },
    {
      id: "math-l-multbig-2",
      title: "Break It Apart",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-multbig-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Break apart 14 × 3. First: 10 × 3 = ?",
              spokenText: "Let's break fourteen times three into pieces! Start with the tens: ten times three equals what?",
            },
            options: [
              { id: "a", label: "30" },
              { id: "b", label: "13" },
              { id: "c", label: "40" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-multbig-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Now the ones: 4 × 3 = ?",
              spokenText: "Now the ones part of fourteen times three! Four times three equals what?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "12" },
              { id: "c", label: "43" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "14 × 3 = 30 + 12 = ?",
              spokenText: "Put the pieces back together! Thirty plus twelve equals what? That's fourteen times three!",
            },
            template: "14 × 3 = 30 + 12 = ___",
            bank: [
              { id: "c1", label: "42" },
              { id: "c2", label: "32" },
              { id: "c3", label: "45" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-multbig-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "13 × 2 = ?",
              spokenText: "Break apart thirteen times two! Ten times two is twenty, three times two is six. What's the total?",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "26" },
              { id: "c", label: "32" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "12 × 4 = 40 + ? = 48",
              spokenText: "Twelve times four breaks into forty plus something. Two times four fills the blank. What is it?",
            },
            template: "12 × 4 = 40 + ___",
            bank: [
              { id: "c1", label: "8" },
              { id: "c2", label: "6" },
              { id: "c3", label: "48" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-multbig-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Break it apart in your head! Fifteen times two. Tap the answer!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "25" },
              { id: "c", label: "30" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-multbig-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each product!",
              spokenText: "Break each one apart, then match it to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "11 × 3" }, right: { label: "33" } },
              { id: "p2", left: { label: "12 × 3" }, right: { label: "36" } },
              { id: "p3", left: { label: "13 × 3" }, right: { label: "39" } },
            ],
          },
        },
        {
          id: "math-e-multbig-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "16 × 2 = ?",
              spokenText: "Each side of the rocket has sixteen windows. Both sides means sixteen times two! How many windows in all?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🛸" }, label: "18" },
              { id: "b", visual: { kind: "emoji", value: "🛸" }, label: "32" },
              { id: "c", visual: { kind: "emoji", value: "🛸" }, label: "36" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-multbig-3",
      title: "Full Thrust Products",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-multbig-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "21 × 4 = ?",
              spokenText: "Full thrust! Twenty-one times four equals what? Twenty times four, plus one times four.",
            },
            options: [
              { id: "a", label: "84" },
              { id: "b", label: "88" },
              { id: "c", label: "24" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-multbig-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "32 × 3 = ?",
              spokenText: "Thirty-two times three equals what? Thirty times three is ninety, two times three is six!",
            },
            options: [
              { id: "a", label: "95" },
              { id: "b", label: "96" },
              { id: "c", label: "93" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "15 × 6 = ?",
              spokenText: "Fifteen times six equals what? Ten sixes is sixty, five sixes is thirty!",
            },
            options: [
              { id: "a", label: "90" },
              { id: "b", label: "80" },
              { id: "c", label: "96" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-multbig-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "24 × 5 = ?",
              spokenText: "Twenty-four times five equals what? Fill in the answer!",
            },
            template: "24 × 5 = ___",
            bank: [
              { id: "c1", label: "100" },
              { id: "c2", label: "120" },
              { id: "c3", label: "125" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-multbig-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Ears ready! Thirteen times five. Tap the product!",
            },
            options: [
              { id: "a", label: "55" },
              { id: "b", label: "65" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-multbig-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "43 × 4 = ?",
              spokenText: "Forty-three times four equals what? Forty times four is one hundred sixty, three times four is twelve!",
            },
            options: [
              { id: "a", label: "172" },
              { id: "b", label: "162" },
              { id: "c", label: "176" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-multbig-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each product!",
              spokenText: "Match each big multiply problem to its product!",
            },
            pairs: [
              { id: "p1", left: { label: "14 × 5" }, right: { label: "70" } },
              { id: "p2", left: { label: "18 × 4" }, right: { label: "72" } },
              { id: "p3", left: { label: "25 × 6" }, right: { label: "150" } },
            ],
          },
        },
        {
          id: "math-e-multbig-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the products, smallest to biggest!",
              spokenText: "Here are four products from our mission! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "96" },
              { id: "i2", label: "84" },
              { id: "i3", label: "120" },
              { id: "i4", label: "90" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
      ],
    },
  ],
};
