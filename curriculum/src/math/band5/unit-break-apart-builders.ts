import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Break-Apart Builders
 * Teaches two named strategies for two-digit add/sub within 100:
 * Lesson 1 — Adding by Place Value (decompose both numbers, add tens, add ones, combine).
 * Lesson 2 — Subtract in Parts (keep the larger whole, break the smaller into tens + ones).
 * Lesson 3 — Mixed practice with regrouping (ones cross/borrow a ten).
 */
export const breakApartBuilders: UnitSeed = {
  id: "math-u-breakapart",
  bandId: "math-b5",
  title: "Break-Apart Builders",
  icon: "🧱",
  lessons: [
    {
      id: "math-l-breakapart-1",
      title: "Adding by Place Value",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-breakapart-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Count tens first! 🧱🧱 = ?",
              spokenText: "Let's count tens first! Two blocks of ten. How many is that?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧱🧱" }, label: "20" },
              { id: "b", visual: { kind: "emoji", value: "🧱🧱" }, label: "12" },
              { id: "c", visual: { kind: "emoji", value: "🧱🧱" }, label: "2" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-breakapart-1-02",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to its break-apart!",
              spokenText: "Break each number apart into tens and ones, then match the pair!",
            },
            pairs: [
              { id: "p1", left: { label: "27" }, right: { label: "20 + 7" } },
              { id: "p2", left: { label: "16" }, right: { label: "10 + 6" } },
              { id: "p3", left: { label: "43" }, right: { label: "40 + 3" } },
            ],
          },
        },
        {
          id: "math-e-breakapart-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "20 + 10 = ?",
              spokenText: "Let's add the tens first! Twenty plus ten equals what?",
            },
            template: "20 + 10 = ___",
            bank: [
              { id: "c1", label: "30" },
              { id: "c2", label: "20" },
              { id: "c3", label: "40" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-breakapart-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "7 + 6 = ?",
              spokenText: "Now let's add the ones! Seven plus six equals what?",
            },
            template: "7 + 6 = ___",
            bank: [
              { id: "c1", label: "12" },
              { id: "c2", label: "13" },
              { id: "c3", label: "14" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-breakapart-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "30 + 13 = ?",
              spokenText: "Now combine the tens and ones! Thirty plus thirteen equals what?",
            },
            template: "30 + 13 = ___",
            bank: [
              { id: "c1", label: "33" },
              { id: "c2", label: "42" },
              { id: "c3", label: "43" },
            ],
            correctChipId: "c3",
          },
        },
        {
          id: "math-e-breakapart-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "27 + 16 = ?",
              spokenText: "Twenty-seven plus sixteen equals what? Break both numbers apart and add the tens, then the ones!",
            },
            options: [
              { id: "a", label: "33" },
              { id: "b", label: "43" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-1-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Break apart thirty-four plus twenty-two. Add the tens, then the ones. Tap the answer!",
            },
            options: [
              { id: "a", label: "46" },
              { id: "b", label: "56" },
              { id: "c", label: "66" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "45 + 32 = ?",
              spokenText: "You have forty-five marbles. A friend gives you thirty-two more! How many marbles do you have now?",
            },
            options: [
              { id: "a", label: "67" },
              { id: "b", label: "77" },
              { id: "c", label: "87" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-breakapart-2",
      title: "Subtract in Parts",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-breakapart-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Count tens first! 🧱🧱🧱 = ?",
              spokenText: "Let's count tens first! Three blocks of ten. How many is that?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧱🧱🧱" }, label: "13" },
              { id: "b", visual: { kind: "emoji", value: "🧱🧱🧱" }, label: "30" },
              { id: "c", visual: { kind: "emoji", value: "🧱🧱🧱" }, label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-2-02",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to its break-apart!",
              spokenText: "Break each small number apart into tens and ones, then match the pair!",
            },
            pairs: [
              { id: "p1", left: { label: "15" }, right: { label: "10 + 5" } },
              { id: "p2", left: { label: "23" }, right: { label: "20 + 3" } },
            ],
          },
        },
        {
          id: "math-e-breakapart-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "32 − 10 = ?",
              spokenText: "Keep thirty-two whole and take away ten first! Thirty-two minus ten equals what?",
            },
            template: "32 − 10 = ___",
            bank: [
              { id: "c1", label: "22" },
              { id: "c2", label: "32" },
              { id: "c3", label: "12" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-breakapart-2-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "22 − 5 = ?",
              spokenText: "Now take away the last five! Twenty-two minus five equals what?",
            },
            template: "22 − 5 = ___",
            bank: [
              { id: "c1", label: "16" },
              { id: "c2", label: "17" },
              { id: "c3", label: "27" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-breakapart-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "32 − 15 = ?",
              spokenText: "Thirty-two minus fifteen equals what? Keep the thirty-two whole and break the fifteen into parts!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "27" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-breakapart-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Keep the whole and break apart the smaller part. Forty-one minus eighteen. Tap the answer!",
            },
            options: [
              { id: "a", label: "13" },
              { id: "b", label: "23" },
              { id: "c", label: "33" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "38 − 19 = ?",
              spokenText: "You had thirty-eight stickers. You use nineteen of them on a poster! How many stickers are left?",
            },
            options: [
              { id: "a", label: "9" },
              { id: "b", label: "19" },
              { id: "c", label: "29" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-2-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the differences from smallest to biggest!",
              spokenText: "Solve each subtraction problem, then put the differences in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "34 − 12 = 22" },
              { id: "i2", label: "45 − 30 = 15" },
              { id: "i3", label: "50 − 40 = 10" },
            ],
            correctOrder: ["i3", "i2", "i1"],
          },
        },
      ],
    },
    {
      id: "math-l-breakapart-3",
      title: "Build and Break, Mixed Up",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-breakapart-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "27 + 16 = ?",
              spokenText: "Twenty-seven plus sixteen equals what? Watch out, the ones cross a ten!",
            },
            options: [
              { id: "a", label: "33" },
              { id: "b", label: "43" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "32 − 15 = ?",
              spokenText: "Thirty-two minus fifteen equals what? The ones borrow from a ten!",
            },
            template: "32 − 15 = ___",
            bank: [
              { id: "c1", label: "17" },
              { id: "c2", label: "27" },
              { id: "c3", label: "23" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-breakapart-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "35 + 27 = ?",
              spokenText: "Thirty-five plus twenty-seven equals what? Break both numbers apart and add the tens, then the ones!",
            },
            options: [
              { id: "a", label: "52" },
              { id: "b", label: "62" },
              { id: "c", label: "72" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-breakapart-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "50 − 24 = ?",
              spokenText: "Fifty minus twenty-four equals what? Keep the fifty whole and break the twenty-four apart!",
            },
            template: "50 − 24 = ___",
            bank: [
              { id: "c1", label: "26" },
              { id: "c2", label: "36" },
              { id: "c3", label: "24" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-breakapart-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Nineteen plus twenty-eight. Break it apart and add the tens, then the ones. Tap the answer!",
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
          id: "math-e-breakapart-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem to its answer!",
              spokenText: "Break each problem apart, solve it, then match it to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "26 + 15" }, right: { label: "41" } },
              { id: "p2", left: { label: "42 − 17" }, right: { label: "25" } },
              { id: "p3", left: { label: "38 + 24" }, right: { label: "62" } },
            ],
          },
        },
        {
          id: "math-e-breakapart-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "63 − 28 = ?",
              spokenText: "You had sixty-three baseball cards. You trade away twenty-eight of them! How many cards do you have left?",
            },
            options: [
              { id: "a", label: "35" },
              { id: "b", label: "45" },
              { id: "c", label: "91" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-breakapart-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the answers from smallest to biggest!",
              spokenText: "Solve each problem, then put the answers in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "24 + 19 = 43" },
              { id: "i2", label: "50 − 33 = 17" },
              { id: "i3", label: "18 + 26 = 44" },
              { id: "i4", label: "60 − 45 = 15" },
            ],
            correctOrder: ["i4", "i2", "i1", "i3"],
          },
        },
      ],
    },
  ],
};
