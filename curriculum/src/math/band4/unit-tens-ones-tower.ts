import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Place value · Tens & Ones Tower
 * Lesson 1 introduces reading tens and ones as two-digit numbers.
 * Lesson 2 practices counting by tens, naming digits, and comparing.
 * Lesson 3 stretches with ten-more/ten-less and tricky digit swaps.
 */
export const tensOnesTower: UnitSeed = {
  id: "math-u-tensones",
  bandId: "math-b4",
  title: "Tens & Ones Tower",
  icon: "🧱",
  lessons: [
    {
      id: "math-l-tensones-1",
      title: "Build with Tens",
      primarySkillId: "math-place-value",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-tensones-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 tens and 2 ones = ?",
              spokenText: "Four tens and two ones! What number does that build?",
            },
            options: [
              { id: "a", label: "24" },
              { id: "b", label: "42" },
              { id: "c", label: "6" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-tensones-1-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the number.",
              spokenText: "Two tens and zero ones. What number is that? Tap it!",
            },
            template: "2 tens and 0 ones = ___",
            bank: [
              { id: "b1", label: "2" },
              { id: "b2", label: "12" },
              { id: "b3", label: "20" },
            ],
            correctChipId: "b3",
          },
        },
        {
          id: "math-e-tensones-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which number is 3 tens and 5 ones?",
              spokenText: "Which number is three tens and five ones?",
            },
            options: [
              { id: "a", label: "35" },
              { id: "b", label: "53" },
              { id: "c", label: "30" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-tensones-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number that has six tens and one one!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "61" },
              { id: "c", label: "60" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-tensones-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to its tens and ones.",
              spokenText: "Match each number to its blocks! Tap a number, then tap its tens and ones.",
            },
            pairs: [
              { id: "p1", left: { label: "26" }, right: { label: "2 tens 6 ones" } },
              { id: "p2", left: { label: "62" }, right: { label: "6 tens 2 ones" } },
              { id: "p3", left: { label: "40" }, right: { label: "4 tens 0 ones" } },
            ],
          },
        },
        {
          id: "math-e-tensones-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "How many tens are in 70?",
              spokenText: "Seventy! How many tens are inside it?",
            },
            options: [
              { id: "a", label: "70" },
              { id: "b", label: "17" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-tensones-1-07",
          type: "countObjects",
          payload: {
            prompt: {
              text: "Count the bricks!",
              spokenText: "One tower floor holds exactly ten bricks. Count these bricks. How many are there?",
            },
            object: { kind: "emoji", value: "🧱" },
            count: 10,
            choices: [9, 10, 11],
          },
        },
        {
          id: "math-e-tensones-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 tens and 9 ones = ?",
              spokenText: "Five tens and nine ones! What number does that build?",
            },
            options: [
              { id: "a", label: "59" },
              { id: "b", label: "95" },
              { id: "c", label: "14" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-tensones-2",
      title: "Count by Tens, Compare",
      primarySkillId: "math-place-value",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-tensones-2-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Stack the tower floors!",
              spokenText: "Stack the tower! Tap the floors counting by tens, starting at ten.",
            },
            items: [
              { id: "i1", label: "10" },
              { id: "i2", label: "30" },
              { id: "i3", label: "20" },
              { id: "i4", label: "40" },
            ],
            correctOrder: ["i1", "i3", "i2", "i4"],
          },
        },
        {
          id: "math-e-tensones-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is more?",
              spokenText: "Which number is bigger, forty-seven or fifty-one? Check the tens first!",
            },
            options: [
              { id: "a", label: "47" },
              { id: "b", label: "51" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-tensones-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the number.",
              spokenText: "Eight tens and three ones. What number is that? Tap it!",
            },
            template: "8 tens and 3 ones = ___",
            bank: [
              { id: "b1", label: "38" },
              { id: "b2", label: "83" },
              { id: "b3", label: "11" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-tensones-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number fifty-four!",
            },
            options: [
              { id: "a", label: "54" },
              { id: "b", label: "45" },
              { id: "c", label: "44" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-tensones-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "How many ones are in 37?",
              spokenText: "Thirty-seven! How many ones does it have?",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "37" },
              { id: "c", label: "7" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-tensones-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number to its blocks.",
              spokenText: "Match each number to its tens and ones! Tap a number, then tap its match.",
            },
            pairs: [
              { id: "p1", left: { label: "40" }, right: { label: "4 tens" } },
              { id: "p2", left: { label: "9" }, right: { label: "9 ones" } },
              { id: "p3", left: { label: "19" }, right: { label: "1 ten 9 ones" } },
            ],
          },
        },
        {
          id: "math-e-tensones-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is smaller?",
              spokenText: "Which number is smaller, sixty-eight or eighty-six?",
            },
            options: [
              { id: "a", label: "68" },
              { id: "b", label: "86" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-tensones-2-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "How many tens?",
              spokenText: "Seventy-two is some tens and two ones. How many tens? Tap the number!",
            },
            template: "72 = ___ tens and 2 ones",
            bank: [
              { id: "b1", label: "7" },
              { id: "b2", label: "2" },
              { id: "b3", label: "72" },
            ],
            correctChipId: "b1",
          },
        },
      ],
    },
    {
      id: "math-l-tensones-3",
      title: "Tower Master",
      primarySkillId: "math-place-value",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-tensones-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which has more tens?",
              spokenText: "Thirty-nine has three tens. Sixty-one has six tens. Tap the number with more tens!",
            },
            options: [
              { id: "a", label: "39" },
              { id: "b", label: "61" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-tensones-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Build the number.",
              spokenText: "Six tens and six ones. What number is that? Tap it!",
            },
            template: "6 tens and 6 ones = ___",
            bank: [
              { id: "b1", label: "60" },
              { id: "b2", label: "66" },
              { id: "b3", label: "12" },
            ],
            correctChipId: "b2",
          },
        },
        {
          id: "math-e-tensones-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What is 10 more than 45?",
              spokenText: "Add one more floor to the tower! What number is ten more than forty-five?",
            },
            options: [
              { id: "a", label: "46" },
              { id: "b", label: "35" },
              { id: "c", label: "55" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-tensones-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number that is ten less than seventy-three!",
            },
            options: [
              { id: "a", label: "63" },
              { id: "b", label: "72" },
              { id: "c", label: "83" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-tensones-3-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Smallest to biggest!",
              spokenText: "Careful, the digits are tricky! Tap the numbers from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "27" },
              { id: "i2", label: "72" },
              { id: "i3", label: "17" },
              { id: "i4", label: "71" },
            ],
            correctOrder: ["i3", "i1", "i4", "i2"],
          },
        },
        {
          id: "math-e-tensones-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 90?",
              spokenText: "Which blocks build ninety?",
            },
            options: [
              { id: "a", label: "9 tens 0 ones" },
              { id: "b", label: "0 tens 9 ones" },
              { id: "c", label: "9 tens 9 ones" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-tensones-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "How many ones?",
              spokenText: "Fifty-eight is five tens and some ones. How many ones? Tap the number!",
            },
            template: "58 = 5 tens and ___ ones",
            bank: [
              { id: "b1", label: "8" },
              { id: "b2", label: "5" },
              { id: "b3", label: "3" },
            ],
            correctChipId: "b1",
          },
        },
        {
          id: "math-e-tensones-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "What is 10 more than 89?",
              spokenText: "Almost at the top! What number is ten more than eighty-nine?",
            },
            options: [
              { id: "a", label: "90" },
              { id: "b", label: "99" },
              { id: "c", label: "79" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
