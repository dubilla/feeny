import type { UnitSeed } from "../../schema/pack";

/**
 * Band 5 · Hundred Chart Hike
 * Lesson 1 takes small steps: one more, one less, first peeks at ten more.
 * Lesson 2 jumps by tens: ten more, ten less, adding tens.
 * Lesson 3 stretches: subtracting tens, missing numbers, edges of the chart.
 */
export const hundredChartHike: UnitSeed = {
  id: "math-u-hundred",
  bandId: "math-b5",
  title: "Hundred Chart Hike",
  icon: "🗺️",
  lessons: [
    {
      id: "math-l-hundred-1",
      title: "One Step at a Time",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-hundred-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "One more than 46?",
              spokenText: "We're hiking up the hundred chart! What number is one more than forty-six?",
            },
            options: [
              { id: "a", label: "45" },
              { id: "b", label: "47" },
              { id: "c", label: "56" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-hundred-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "One less than 30?",
              spokenText: "Take one step back! What number is one less than thirty?",
            },
            options: [
              { id: "a", label: "29" },
              { id: "b", label: "31" },
              { id: "c", label: "40" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-hundred-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the blank!",
              spokenText: "Keep walking along the path! Fifty-eight, fifty-nine... which number comes next?",
            },
            template: "58, 59, ___",
            bank: [
              { id: "c1", label: "50" },
              { id: "c2", label: "60" },
              { id: "c3", label: "70" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-hundred-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the number that is one more than seventy-nine.",
            },
            options: [
              { id: "a", label: "78" },
              { id: "b", label: "80" },
              { id: "c", label: "89" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-hundred-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ten more than 23?",
              spokenText: "Big hop! On the hundred chart, hopping down one row adds ten. What is ten more than twenty-three?",
            },
            options: [
              { id: "a", label: "13" },
              { id: "b", label: "24" },
              { id: "c", label: "33" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-hundred-1-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the trail markers!",
              spokenText: "The trail markers fell over! Put them back in counting order, from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "49" },
              { id: "i2", label: "47" },
              { id: "i3", label: "50" },
              { id: "i4", label: "48" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-hundred-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match ten more!",
              spokenText: "Match each number to the number that is ten more!",
            },
            pairs: [
              { id: "p1", left: { label: "20" }, right: { label: "30" } },
              { id: "p2", left: { label: "45" }, right: { label: "55" } },
              { id: "p3", left: { label: "62" }, right: { label: "72" } },
            ],
          },
        },
        {
          id: "math-e-hundred-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ten less than 60?",
              spokenText: "Hop back up a row! What number is ten less than sixty?",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "59" },
              { id: "c", label: "70" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-hundred-2",
      title: "Jumping by Tens",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-hundred-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ten more than 42?",
              spokenText: "Time for ten-jumps! What number is ten more than forty-two?",
            },
            options: [
              { id: "a", label: "32" },
              { id: "b", label: "43" },
              { id: "c", label: "52" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-hundred-2-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Fill in the blank!",
              spokenText: "Keep jumping by tens! Thirty-four, forty-four, fifty-four... which number fills the blank?",
            },
            template: "34, 44, 54, ___",
            bank: [
              { id: "c1", label: "55" },
              { id: "c2", label: "64" },
              { id: "c3", label: "74" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-hundred-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up, hiker! Tap the number that is ten less than sixty-five.",
            },
            options: [
              { id: "a", label: "64" },
              { id: "b", label: "55" },
              { id: "c", label: "75" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-hundred-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ten less than 80?",
              spokenText: "Step back one row! What number is ten less than eighty?",
            },
            options: [
              { id: "a", label: "70" },
              { id: "b", label: "79" },
              { id: "c", label: "90" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-hundred-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "40 + 30 = ?",
              spokenText: "Let's add tens! Forty plus thirty equals what? Think: four tens plus three tens.",
            },
            options: [
              { id: "a", label: "43" },
              { id: "b", label: "60" },
              { id: "c", label: "70" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-hundred-2-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the ten-jumps!",
              spokenText: "Put these numbers in order from smallest to biggest. Each one is a ten-jump apart!",
            },
            items: [
              { id: "i1", label: "46" },
              { id: "i2", label: "26" },
              { id: "i3", label: "56" },
              { id: "i4", label: "36" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-hundred-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "30 + 30 = ?",
              spokenText: "Two hills the same size! Thirty plus thirty equals what?",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "60" },
              { id: "c", label: "70" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-hundred-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sum!",
              spokenText: "Match each tens problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "20 + 20" }, right: { label: "40" } },
              { id: "p2", left: { label: "30 + 40" }, right: { label: "70" } },
              { id: "p3", left: { label: "50 + 10" }, right: { label: "60" } },
            ],
          },
        },
      ],
    },
    {
      id: "math-l-hundred-3",
      title: "Big Jumps on the Chart",
      primarySkillId: "math-add-sub-100",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-hundred-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ten more than 87?",
              spokenText: "We're near the top of the chart! What number is ten more than eighty-seven?",
            },
            options: [
              { id: "a", label: "77" },
              { id: "b", label: "88" },
              { id: "c", label: "97" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-hundred-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "70 − 20 = ?",
              spokenText: "Take away tens! Seventy minus twenty equals what? Think: seven tens take away two tens.",
            },
            template: "70 − 20 = ___",
            bank: [
              { id: "c1", label: "40" },
              { id: "c2", label: "50" },
              { id: "c3", label: "90" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-hundred-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "60 − 40 = ?",
              spokenText: "Sixty minus forty equals what? Count back four tens from sixty!",
            },
            options: [
              { id: "a", label: "20" },
              { id: "b", label: "30" },
              { id: "c", label: "100" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-hundred-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Here's a tricky one! Tap the number that is one less than one hundred.",
            },
            options: [
              { id: "a", label: "90" },
              { id: "b", label: "99" },
              { id: "c", label: "100" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-hundred-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "45, 55, ?, 75",
              spokenText: "A trail marker is missing! Forty-five, fifty-five, something, seventy-five. Each jump adds ten. Which number is missing?",
            },
            options: [
              { id: "a", label: "56" },
              { id: "b", label: "60" },
              { id: "c", label: "65" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-hundred-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the checkpoints!",
              spokenText: "Order the checkpoint numbers from smallest to biggest. Each one is ten apart!",
            },
            items: [
              { id: "i1", label: "57" },
              { id: "i2", label: "27" },
              { id: "i3", label: "67" },
              { id: "i4", label: "37" },
              { id: "i5", label: "47" },
            ],
            correctOrder: ["i2", "i4", "i5", "i1", "i3"],
          },
        },
        {
          id: "math-e-hundred-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each problem!",
              spokenText: "Match each ten-jump problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "34 + 10" }, right: { label: "44" } },
              { id: "p2", left: { label: "80 − 10" }, right: { label: "70" } },
              { id: "p3", left: { label: "25 + 10" }, right: { label: "35" } },
            ],
          },
        },
        {
          id: "math-e-hundred-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "90 − 30 = ?",
              spokenText: "Last big jump! Ninety minus thirty equals what?",
            },
            options: [
              { id: "a", label: "50" },
              { id: "b", label: "60" },
              { id: "c", label: "70" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
