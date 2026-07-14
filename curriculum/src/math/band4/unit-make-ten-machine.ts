import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Make-Ten Machine
 * Teaches the make-a-ten move within 20: break the second addend to fill
 * the first addend up to ten, then add what's left. 9 + 7 -> 10 + 6.
 * Lesson 1 anchors on 9 as the addend that gets filled to ten.
 * Lesson 2 anchors on 8, and introduces a number-line landmark route.
 * Lesson 3 mixes which addend gets broken and pulls facts that cross ten.
 */
export const makeTenMachine: UnitSeed = {
  id: "math-u-maketen",
  bandId: "math-b4",
  title: "Make-Ten Machine",
  icon: "🔟",
  lessons: [
    {
      id: "math-l-maketen-1",
      title: "Fill Up to Ten",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-maketen-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "9 + 7 = ?",
              spokenText: "Nine plus seven equals what? Give the nine one from the seven to make ten!",
            },
            options: [
              { id: "a", label: "15" },
              { id: "b", label: "16" },
              { id: "c", label: "17" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "9 + 7 = 10 + ___",
              spokenText: "Nine plus seven is the same as ten plus what? Fill in the missing number!",
            },
            template: "9 + 7 = 10 + ___",
            bank: [
              { id: "c1", label: "5" },
              { id: "c2", label: "6" },
              { id: "c3", label: "7" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-maketen-1-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its made-ten twin!",
              spokenText: "Match each problem to its made-ten twin!",
            },
            pairs: [
              { id: "p1", left: { label: "9 + 7" }, right: { label: "10 + 6" } },
              { id: "p2", left: { label: "9 + 4" }, right: { label: "10 + 3" } },
              { id: "p3", left: { label: "9 + 8" }, right: { label: "10 + 7" } },
            ],
          },
        },
        {
          id: "math-e-maketen-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Nine plus five. Tap the answer!",
            },
            options: [
              { id: "a", label: "13" },
              { id: "b", label: "14" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 9 + 6?",
              spokenText: "Which problem is the same as nine plus six?",
            },
            options: [
              { id: "a", label: "10 + 5" },
              { id: "b", label: "10 + 6" },
              { id: "c", label: "9 + 5" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-maketen-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "9 + 3 = ?",
              spokenText: "Nine plus three equals what? Fill the nine up to ten first!",
            },
            options: [
              { id: "a", label: "11" },
              { id: "b", label: "12" },
              { id: "c", label: "22" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One more with your ears! Nine plus two. Tap the answer!",
            },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "11" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-maketen-2",
      title: "Eight's Turn",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-maketen-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 5 = ?",
              spokenText: "Eight plus five equals what? Give the eight two from the five to make ten!",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "13" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "8 + 5 = 10 + ___",
              spokenText: "Eight plus five is the same as ten plus what? Fill in the missing number!",
            },
            template: "8 + 5 = 10 + ___",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "5" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-maketen-2-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Hop along the number line for 8 + 5!",
              spokenText: "Hop along the number line for eight plus five! Put these stops in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "8" },
              { id: "i2", label: "10" },
              { id: "i3", label: "13" },
            ],
            correctOrder: ["i1", "i2", "i3"],
          },
        },
        {
          id: "math-e-maketen-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its made-ten twin!",
              spokenText: "Match each problem to its made-ten twin!",
            },
            pairs: [
              { id: "p1", left: { label: "8 + 5" }, right: { label: "10 + 3" } },
              { id: "p2", left: { label: "8 + 4" }, right: { label: "10 + 2" } },
              { id: "p3", left: { label: "8 + 6" }, right: { label: "10 + 4" } },
            ],
          },
        },
        {
          id: "math-e-maketen-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Eight plus three. Tap the answer!",
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
          id: "math-e-maketen-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 8 + 7?",
              spokenText: "Which problem is the same as eight plus seven?",
            },
            options: [
              { id: "a", label: "10 + 5" },
              { id: "b", label: "10 + 6" },
              { id: "c", label: "10 + 7" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-maketen-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 9 = ?",
              spokenText: "Eight plus nine equals what? Give the eight two from the nine to make ten!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "17" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-maketen-3",
      title: "Break Any Addend",
      primarySkillId: "math-add-sub-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-maketen-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "7 + 5 = ?",
              spokenText: "Seven plus five equals what? Give the seven three from the five to make ten!",
            },
            options: [
              { id: "a", label: "11" },
              { id: "b", label: "12" },
              { id: "c", label: "13" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "7 + 5 = 10 + ___",
              spokenText: "Seven plus five is the same as ten plus what? Fill in the missing number!",
            },
            template: "7 + 5 = 10 + ___",
            bank: [
              { id: "c1", label: "1" },
              { id: "c2", label: "2" },
              { id: "c3", label: "3" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-maketen-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 6 + 8?",
              spokenText: "Which problem is the same as six plus eight? This time it's the second number that fills to ten!",
            },
            options: [
              { id: "a", label: "10 + 3" },
              { id: "b", label: "10 + 4" },
              { id: "c", label: "10 + 6" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its made-ten twin!",
              spokenText: "Match each problem to its made-ten twin!",
            },
            pairs: [
              { id: "p1", left: { label: "7 + 5" }, right: { label: "10 + 2" } },
              { id: "p2", left: { label: "6 + 8" }, right: { label: "10 + 4" } },
              { id: "p3", left: { label: "9 + 9" }, right: { label: "10 + 8" } },
            ],
          },
        },
        {
          id: "math-e-maketen-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Six plus nine. Tap the answer!",
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
          id: "math-e-maketen-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Hop along the number line for 7 + 5!",
              spokenText: "Hop along the number line for seven plus five! Put these stops in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "7" },
              { id: "i2", label: "10" },
              { id: "i3", label: "12" },
            ],
            correctOrder: ["i1", "i2", "i3"],
          },
        },
        {
          id: "math-e-maketen-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "8 + 8 = ?",
              spokenText: "Eight plus eight equals what? Give the eight two to make ten!",
            },
            options: [
              { id: "a", label: "15" },
              { id: "b", label: "16" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-maketen-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Last one! Seven plus six. Tap the answer!",
            },
            options: [
              { id: "a", label: "12" },
              { id: "b", label: "13" },
              { id: "c", label: "14" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
