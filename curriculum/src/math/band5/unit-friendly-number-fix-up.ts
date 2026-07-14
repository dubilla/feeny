import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Friendly Number Fix-Up
 * Lesson 1 teaches compensation for addition (27 + 16 → 30 + 13: shift
 * +3/−3 to land on a friendly ten). Lesson 2 teaches "add up" for
 * subtraction, rewriting it as a missing addend and jumping in friendly
 * hops to a landmark ten (15 + ___ = 32: 15 → 25 → 30 → 32). Lesson 3
 * mixes both strategies with regrouping throughout.
 */
export const friendlyNumberFixUp: UnitSeed = {
  id: "math-u-friendly",
  bandId: "math-b5",
  title: "Friendly Number Fix-Up",
  icon: "🤗",
  lessons: [
    {
      id: "math-l-friendly-1",
      title: "Make It Friendly",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-friendly-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 27 + 16?",
              spokenText:
                "Let's make a friendly number! Twenty-seven plus sixteen — which problem gives the exact same answer?",
            },
            options: [
              { id: "a", label: "30 + 13" },
              { id: "b", label: "30 + 16" },
              { id: "c", label: "24 + 13" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 19 + 24?",
              spokenText:
                "Nineteen plus twenty-four — which problem gives the exact same answer?",
            },
            options: [
              { id: "a", label: "20 + 24" },
              { id: "b", label: "20 + 23" },
              { id: "c", label: "18 + 23" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-friendly-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "28 + 15 = 30 + ?",
              spokenText:
                "Twenty-eight plus fifteen is the same as thirty plus what number? Fill in the friendly twin!",
            },
            template: "28 + 15 = 30 + ___",
            bank: [
              { id: "c1", label: "13" },
              { id: "c2", label: "15" },
              { id: "c3", label: "17" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-friendly-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its friendly twin!",
              spokenText:
                "Match each problem to its friendly twin — the one made from a friendly ten!",
            },
            pairs: [
              { id: "p1", left: { label: "27 + 16" }, right: { label: "30 + 13" } },
              { id: "p2", left: { label: "19 + 14" }, right: { label: "20 + 13" } },
              { id: "p3", left: { label: "38 + 25" }, right: { label: "40 + 23" } },
            ],
          },
        },
        {
          id: "math-e-friendly-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "27 + 16 = ?",
              spokenText:
                "Twenty-seven plus sixteen equals what? Try making a friendly ten first!",
            },
            options: [
              { id: "a", label: "43" },
              { id: "b", label: "42" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-1-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Thirty-eight plus twenty-five. Tap the answer!",
            },
            options: [
              { id: "a", label: "63" },
              { id: "b", label: "62" },
              { id: "c", label: "73" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 38 + 25?",
              spokenText:
                "Thirty-eight plus twenty-five — which problem gives the exact same answer?",
            },
            options: [
              { id: "a", label: "40 + 23" },
              { id: "b", label: "40 + 25" },
              { id: "c", label: "36 + 23" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-friendly-2",
      title: "Jump Up to Subtract",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-friendly-2-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "15 + ? = 32",
              spokenText:
                "Turn thirty-two minus fifteen into an adding problem! Fifteen plus what number makes thirty-two?",
            },
            template: "15 + ___ = 32",
            bank: [
              { id: "c1", label: "17" },
              { id: "c2", label: "15" },
              { id: "c3", label: "22" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-friendly-2-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the jumps from 15 up to 32!",
              spokenText:
                "Jump from fifteen up to thirty-two! Put these landmark numbers in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "15" },
              { id: "i2", label: "25" },
              { id: "i3", label: "30" },
              { id: "i4", label: "32" },
            ],
            correctOrder: ["i1", "i2", "i3", "i4"],
          },
        },
        {
          id: "math-e-friendly-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "43 − 26 = ?",
              spokenText:
                "Forty-three minus twenty-six equals what? Jump up from twenty-six to find out!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "16" },
              { id: "c", label: "27" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its answer!",
              spokenText: "Match each subtraction problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "32 − 15" }, right: { label: "17" } },
              { id: "p2", left: { label: "41 − 26" }, right: { label: "15" } },
              { id: "p3", left: { label: "52 − 24" }, right: { label: "28" } },
            ],
          },
        },
        {
          id: "math-e-friendly-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Fifty-two minus twenty-four. Tap the answer!",
            },
            options: [
              { id: "a", label: "28" },
              { id: "b", label: "27" },
              { id: "c", label: "38" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 32 − 15 as an adding-up problem?",
              spokenText:
                "Thirty-two minus fifteen — which adding problem matches it exactly?",
            },
            options: [
              { id: "a", label: "15 + ? = 32" },
              { id: "b", label: "32 + ? = 15" },
              { id: "c", label: "17 + ? = 32" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "26 + ? = 41",
              spokenText:
                "Turn forty-one minus twenty-six into an adding problem! Twenty-six plus what number makes forty-one?",
            },
            template: "26 + ___ = 41",
            bank: [
              { id: "c1", label: "15" },
              { id: "c2", label: "14" },
              { id: "c3", label: "21" },
            ],
            correctChipId: "c1",
          },
        },
      ],
    },
    {
      id: "math-l-friendly-3",
      title: "Mix It Up",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-friendly-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 36 + 27?",
              spokenText:
                "Thirty-six plus twenty-seven — which problem gives the exact same answer?",
            },
            options: [
              { id: "a", label: "40 + 23" },
              { id: "b", label: "39 + 27" },
              { id: "c", label: "33 + 24" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "38 + ? = 52",
              spokenText:
                "Turn fifty-two minus thirty-eight into an adding problem! Thirty-eight plus what number makes fifty-two?",
            },
            template: "38 + ___ = 52",
            bank: [
              { id: "c1", label: "14" },
              { id: "c2", label: "12" },
              { id: "c3", label: "24" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-friendly-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "36 + 27 = ?",
              spokenText:
                "Thirty-six plus twenty-seven equals what? Try making a friendly ten first!",
            },
            options: [
              { id: "a", label: "63" },
              { id: "b", label: "53" },
              { id: "c", label: "73" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-3-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the jumps from 38 up to 52!",
              spokenText:
                "Jump from thirty-eight up to fifty-two! Put these landmark numbers in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "38" },
              { id: "i2", label: "40" },
              { id: "i3", label: "50" },
              { id: "i4", label: "52" },
            ],
            correctOrder: ["i1", "i2", "i3", "i4"],
          },
        },
        {
          id: "math-e-friendly-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its friendly twin!",
              spokenText:
                "Match each problem to its friendly twin — the one made from a friendly ten!",
            },
            pairs: [
              { id: "p1", left: { label: "36 + 27" }, right: { label: "40 + 23" } },
              { id: "p2", left: { label: "45 + 28" }, right: { label: "50 + 23" } },
              { id: "p3", left: { label: "24 + 19" }, right: { label: "30 + 13" } },
            ],
          },
        },
        {
          id: "math-e-friendly-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "46 + 27 = ?",
              spokenText:
                "A farmer has forty-six apples and picks twenty-seven more! How many apples does the farmer have now?",
            },
            options: [
              { id: "a", label: "73" },
              { id: "b", label: "63" },
              { id: "c", label: "83" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "61 − 27 = ?",
              spokenText:
                "Sixty-one minus twenty-seven equals what? Jump up from twenty-seven to find out!",
            },
            options: [
              { id: "a", label: "34" },
              { id: "b", label: "33" },
              { id: "c", label: "44" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-friendly-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the same as 45 + 18?",
              spokenText:
                "Forty-five plus eighteen — which problem gives the exact same answer?",
            },
            options: [
              { id: "a", label: "50 + 13" },
              { id: "b", label: "50 + 18" },
              { id: "c", label: "40 + 13" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
