import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Skip-Count Express
 * Lesson 1 boards the train with twos.
 * Lesson 2 speeds up with fives and tens.
 * Lesson 3 stretches: mid-sequence starts, missing middles, counting back.
 */
export const skipCountExpress: UnitSeed = {
  id: "math-u-skip",
  bandId: "math-b5",
  title: "Skip-Count Express",
  icon: "🚂",
  lessons: [
    {
      id: "math-l-skip-1",
      title: "Two by Two",
      primarySkillId: "math-skip-count",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-skip-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2, 4, 6, ?",
              spokenText: "All aboard the Skip-Count Express! Let's count by twos. Two, four, six... what comes next?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "8" },
              { id: "c", label: "10" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-skip-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Count the socks by twos!",
              spokenText: "Three pairs of socks are hanging on the line. Count them by twos! How many socks in all?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🧦🧦 🧦🧦 🧦🧦" }, label: "6" },
              { id: "b", visual: { kind: "emoji", value: "🧦🧦 🧦🧦" }, label: "4" },
              { id: "c", visual: { kind: "emoji", value: "🧦🧦 🧦🧦 🧦🧦 🧦🧦" }, label: "8" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-skip-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! When you count by twos, tap the number that comes right after six.",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "9" },
              { id: "c", label: "8" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-skip-1-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Put the twos in order!",
              spokenText: "These train cars got mixed up! Put the numbers in order, counting by twos from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "6" },
              { id: "i2", label: "2" },
              { id: "i3", label: "8" },
              { id: "i4", label: "4" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-skip-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the blank!",
              spokenText: "Keep counting by twos! Four, six, eight... which number fills the blank?",
            },
            template: "4, 6, 8, ___",
            bank: [
              { id: "c1", label: "9" },
              { id: "c2", label: "10" },
              { id: "c3", label: "12" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-skip-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10, 12, 14, ?",
              spokenText: "The train is picking up speed! Ten, twelve, fourteen... what number comes next when counting by twos?",
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
          id: "math-e-skip-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to the next!",
              spokenText: "Match each number to the number that comes next when you count by twos!",
            },
            pairs: [
              { id: "p1", left: { label: "4" }, right: { label: "6" } },
              { id: "p2", left: { label: "8" }, right: { label: "10" } },
              { id: "p3", left: { label: "12" }, right: { label: "14" } },
            ],
          },
        },
        {
          id: "math-e-skip-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which list counts by twos?",
              spokenText: "One of these lists counts by twos. Which one is it?",
            },
            options: [
              { id: "a", label: "2, 4, 6" },
              { id: "b", label: "2, 3, 4" },
              { id: "c", label: "1, 2, 4" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-skip-2",
      title: "High Fives and Big Tens",
      primarySkillId: "math-skip-count",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-skip-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5, 10, 15, ?",
              spokenText: "Now let's count by fives! Five, ten, fifteen... what comes next?",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "20" },
              { id: "c", label: "25" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-skip-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the blank!",
              spokenText: "The train jumps by tens! Ten, twenty, thirty... which number fills the blank?",
            },
            template: "10, 20, 30, ___",
            bank: [
              { id: "c1", label: "31" },
              { id: "c2", label: "40" },
              { id: "c3", label: "50" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-skip-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Tap the number that comes after thirty-five when counting by fives.",
            },
            options: [
              { id: "a", label: "30" },
              { id: "b", label: "36" },
              { id: "c", label: "40" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-skip-2-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the tens!",
              spokenText: "Line up the train cars by tens, from smallest to biggest!",
            },
            items: [
              { id: "i1", label: "30" },
              { id: "i2", label: "10" },
              { id: "i3", label: "50" },
              { id: "i4", label: "20" },
              { id: "i5", label: "40" },
            ],
            correctOrder: ["i2", "i4", "i1", "i5", "i3"],
          },
        },
        {
          id: "math-e-skip-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Count the fingers by fives!",
              spokenText: "Three hands are waving hello! Each hand has five fingers. Count by fives... how many fingers in all?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🖐️🖐️🖐️" }, label: "15" },
              { id: "b", visual: { kind: "emoji", value: "🖐️🖐️🖐️🖐️" }, label: "20" },
              { id: "c", visual: { kind: "emoji", value: "🖐️🖐️🖐️🖐️🖐️" }, label: "25" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-skip-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to the next!",
              spokenText: "Match each number to the number that comes next when you count by fives!",
            },
            pairs: [
              { id: "p1", left: { label: "20" }, right: { label: "25" } },
              { id: "p2", left: { label: "40" }, right: { label: "45" } },
              { id: "p3", left: { label: "10" }, right: { label: "15" } },
            ],
          },
        },
        {
          id: "math-e-skip-2-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! When you count by tens, tap the number that comes right after sixty.",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "61" },
              { id: "c", label: "70" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-skip-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which list counts by tens?",
              spokenText: "One of these lists counts by tens. Which one is it?",
            },
            options: [
              { id: "a", label: "10, 15, 20, 25" },
              { id: "b", label: "10, 20, 30, 40" },
              { id: "c", label: "10, 11, 12, 13" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-skip-3",
      title: "Full Steam Ahead",
      primarySkillId: "math-skip-count",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-skip-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "12, 14, 16, ?",
              spokenText: "The express starts in the middle this time! Twelve, fourteen, sixteen... what comes next when counting by twos?",
            },
            options: [
              { id: "a", label: "17" },
              { id: "b", label: "18" },
              { id: "c", label: "20" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-skip-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the blank!",
              spokenText: "Count by fives from twenty-five! Twenty-five, thirty, thirty-five... which number fills the blank?",
            },
            template: "25, 30, 35, ___",
            bank: [
              { id: "c1", label: "36" },
              { id: "c2", label: "40" },
              { id: "c3", label: "45" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-skip-3-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the fives!",
              spokenText: "These stations got scrambled! Put them in order, counting by fives from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "45" },
              { id: "i2", label: "55" },
              { id: "i3", label: "35" },
              { id: "i4", label: "50" },
              { id: "i5", label: "40" },
            ],
            correctOrder: ["i3", "i5", "i1", "i4", "i2"],
          },
        },
        {
          id: "math-e-skip-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Start at forty and count by tens. Forty, fifty, sixty, seventy... tap the number that comes right after seventy!",
            },
            options: [
              { id: "a", label: "71" },
              { id: "b", label: "75" },
              { id: "c", label: "80" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-skip-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "30, 40, ?, 60",
              spokenText: "A number fell off the train! Thirty, forty, something, sixty. Which number is missing?",
            },
            options: [
              { id: "a", label: "41" },
              { id: "b", label: "45" },
              { id: "c", label: "50" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-skip-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each pattern to its rule!",
              spokenText: "Match each counting pattern to its rule. Is it counting by twos, by fives, or by tens?",
            },
            pairs: [
              { id: "p1", left: { label: "2, 4, 6" }, right: { label: "by twos" } },
              { id: "p2", left: { label: "5, 10, 15" }, right: { label: "by fives" } },
              { id: "p3", left: { label: "10, 20, 30" }, right: { label: "by tens" } },
            ],
          },
        },
        {
          id: "math-e-skip-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "90, 80, 70, ?",
              spokenText: "Now the train rolls backwards by tens! Ninety, eighty, seventy... what comes next?",
            },
            options: [
              { id: "a", label: "60" },
              { id: "b", label: "65" },
              { id: "c", label: "69" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-skip-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which list counts by fives?",
              spokenText: "Last stop! One of these lists counts by fives. Which one is it?",
            },
            options: [
              { id: "a", label: "35, 40, 45, 50" },
              { id: "b", label: "35, 45, 55, 65" },
              { id: "c", label: "35, 36, 37, 38" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
