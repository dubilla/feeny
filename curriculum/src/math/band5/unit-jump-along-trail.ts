import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Jump-Along Trail
 * Teaches Counting On and Count Back in chunks (second-grade strategies).
 * Lesson 1 counts ON (27 + 16 → 27 → +10 → 37 → +3 → 40 → +3 → 43).
 * Lesson 2 counts BACK (32 − 15 → 32 → −10 → 22 → −2 → 20 → −3 → 17).
 * Lesson 3 mixes both directions. Problems cross a ten on purpose — that's
 * the point of chunking instead of counting by ones.
 */
export const jumpAlongTrail: UnitSeed = {
  id: "math-u-jumps",
  bandId: "math-b5",
  title: "Jump-Along Trail",
  icon: "🐸",
  lessons: [
    {
      id: "math-l-jumps-1",
      title: "Jumping Forward",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-jumps-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "27 + 16 = ?",
              spokenText: "Twenty-seven plus sixteen equals what? Let's count on in chunks!",
            },
            options: [
              { id: "a", label: "43" },
              { id: "b", label: "33" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-jumps-1-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the jump-along stops in order!",
              spokenText:
                "We're jumping from twenty-seven all the way to forty-three! Put the stops in order, first to last.",
            },
            items: [
              { id: "i1", label: "27" },
              { id: "i2", label: "37" },
              { id: "i3", label: "40" },
              { id: "i4", label: "43" },
            ],
            correctOrder: ["i1", "i2", "i3", "i4"],
          },
        },
        {
          id: "math-e-jumps-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "27 + 10 = ?",
              spokenText: "Twenty-seven plus ten equals what? That's our first big jump!",
            },
            template: "27 + 10 = ___",
            bank: [
              { id: "c1", label: "27" },
              { id: "c2", label: "37" },
              { id: "c3", label: "47" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-jumps-1-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "37 + 3 = ?",
              spokenText: "Thirty-seven plus three equals what? Almost to forty!",
            },
            template: "37 + 3 = ___",
            bank: [
              { id: "c1", label: "34" },
              { id: "c2", label: "40" },
              { id: "c3", label: "41" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-jumps-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Forty plus three, counting on by ones. Tap the answer!",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "43" },
              { id: "c", label: "53" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-jumps-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "40 + 3 = ?",
              spokenText: "We're at forty! Plus three more equals what?",
            },
            options: [
              { id: "a", label: "41" },
              { id: "b", label: "43" },
              { id: "c", label: "50" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-jumps-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "34 + 18 = ?",
              spokenText: "Thirty-four plus eighteen equals what? Count on in chunks!",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "52" },
              { id: "c", label: "62" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-jumps-2",
      title: "Jumping Back",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-jumps-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "32 − 15 = ?",
              spokenText: "Thirty-two minus fifteen equals what? Let's count back in chunks!",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "17" },
              { id: "c", label: "22" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-jumps-2-02",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the jump-back stops in order!",
              spokenText:
                "We're jumping back from thirty-two all the way to seventeen! Put the stops in order, first to last.",
            },
            items: [
              { id: "i1", label: "32" },
              { id: "i2", label: "22" },
              { id: "i3", label: "20" },
              { id: "i4", label: "17" },
            ],
            correctOrder: ["i1", "i2", "i3", "i4"],
          },
        },
        {
          id: "math-e-jumps-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "32 − 10 = ?",
              spokenText: "Thirty-two minus ten equals what? That's our first big jump back!",
            },
            template: "32 − 10 = ___",
            bank: [
              { id: "c1", label: "22" },
              { id: "c2", label: "32" },
              { id: "c3", label: "42" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-jumps-2-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "22 − 2 = ?",
              spokenText: "Twenty-two minus two equals what? Getting closer to twenty!",
            },
            template: "22 − 2 = ___",
            bank: [
              { id: "c1", label: "20" },
              { id: "c2", label: "21" },
              { id: "c3", label: "24" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-jumps-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Thirty minus three, counting back by ones. Tap the answer!",
            },
            options: [
              { id: "a", label: "27" },
              { id: "b", label: "28" },
              { id: "c", label: "37" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-jumps-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "20 − 3 = ?",
              spokenText: "We're at twenty! Minus three more equals what?",
            },
            options: [
              { id: "a", label: "10" },
              { id: "b", label: "17" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-jumps-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "45 − 17 = ?",
              spokenText: "Forty-five minus seventeen equals what? Count back in chunks!",
            },
            options: [
              { id: "a", label: "18" },
              { id: "b", label: "28" },
              { id: "c", label: "38" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-jumps-3",
      title: "Jump Both Ways",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-jumps-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "28 + 15 = ?",
              spokenText: "Twenty-eight plus fifteen equals what? Count on in chunks!",
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
          id: "math-e-jumps-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "41 − 16 = ?",
              spokenText: "Forty-one minus sixteen equals what? Count back in chunks!",
            },
            options: [
              { id: "a", label: "15" },
              { id: "b", label: "25" },
              { id: "c", label: "35" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-jumps-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "28 + 10 = ?",
              spokenText: "Twenty-eight plus ten equals what? Jumping forward!",
            },
            template: "28 + 10 = ___",
            bank: [
              { id: "c1", label: "28" },
              { id: "c2", label: "38" },
              { id: "c3", label: "48" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-jumps-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "41 − 10 = ?",
              spokenText: "Forty-one minus ten equals what? Jumping back!",
            },
            template: "41 − 10 = ___",
            bank: [
              { id: "c1", label: "21" },
              { id: "c2", label: "31" },
              { id: "c3", label: "41" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-jumps-3-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the jump-along stops in order!",
              spokenText:
                "We're jumping from twenty-eight all the way to forty-three! Put the stops in order, first to last.",
            },
            items: [
              { id: "i1", label: "28" },
              { id: "i2", label: "38" },
              { id: "i3", label: "41" },
              { id: "i4", label: "43" },
            ],
            correctOrder: ["i1", "i2", "i3", "i4"],
          },
        },
        {
          id: "math-e-jumps-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Nineteen minus two, counting back by ones. Tap the answer!",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "18" },
              { id: "c", label: "27" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-jumps-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "38 + 3 = ?",
              spokenText: "We're at thirty-eight! Plus three more equals what?",
            },
            options: [
              { id: "a", label: "40" },
              { id: "b", label: "41" },
              { id: "c", label: "48" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
