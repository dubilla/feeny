import type { UnitSeed } from "../../schema/pack";

/**
 * Band 8 · Big Number Blastoff
 * Lesson 1 builds three-digit place value (hundreds, tens, ones).
 * Lesson 2 adds two-digit numbers WITH regrouping (ones carry over ten).
 * Lesson 3 subtracts two- and three-digit numbers.
 * Every sum and difference is ≤ 999. Space-crew energy; prompts still read aloud.
 */
export const bigNumberBlastoff: UnitSeed = {
  id: "math-u-bignum",
  bandId: "math-b8",
  title: "Big Number Blastoff",
  icon: "🚀",
  lessons: [
    {
      id: "math-l-bignum-1",
      title: "Hundreds, Tens, and Ones",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bignum-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "3 hundreds, 4 tens, 2 ones = ?",
              spokenText: "Blast off with big numbers! Three hundreds, four tens, and two ones make what number?",
            },
            options: [
              { id: "a", label: "342" },
              { id: "b", label: "324" },
              { id: "c", label: "234" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "In 758, what does the 7 mean?",
              spokenText: "Look at the number seven hundred fifty-eight. The seven sits in the hundreds spot. How much is it worth?",
            },
            options: [
              { id: "a", label: "7" },
              { id: "b", label: "70" },
              { id: "c", label: "700" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-bignum-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "200 + 50 + 6 = ?",
              spokenText: "Add the parts together! Two hundred plus fifty plus six equals what number?",
            },
            template: "200 + 50 + 6 = ___",
            bank: [
              { id: "c1", label: "256" },
              { id: "c2", label: "265" },
              { id: "c3", label: "200" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-bignum-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "5 hundreds and 9 ones = ?",
              spokenText: "This number has five hundreds, zero tens, and nine ones. What number is it?",
            },
            options: [
              { id: "a", label: "590" },
              { id: "b", label: "509" },
              { id: "c", label: "59" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears! Six hundreds, zero tens, and three ones. Tap that number!",
            },
            options: [
              { id: "a", label: "630" },
              { id: "b", label: "603" },
              { id: "c", label: "360" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4 hundreds, 1 ten, 8 ones = ?",
              spokenText: "Four hundreds, one ten, and eight ones team up. What big number do they make?",
            },
            options: [
              { id: "a", label: "418" },
              { id: "b", label: "481" },
              { id: "c", label: "148" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each number!",
              spokenText: "Match each set of hundreds, tens, and ones to the number it makes!",
            },
            pairs: [
              { id: "p1", left: { label: "300 + 20 + 5" }, right: { label: "325" } },
              { id: "p2", left: { label: "500 + 0 + 7" }, right: { label: "507" } },
              { id: "p3", left: { label: "100 + 90 + 4" }, right: { label: "194" } },
            ],
          },
        },
        {
          id: "math-e-bignum-1-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "These numbers use the same digits, so check the hundreds first! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "342" },
              { id: "i2", label: "234" },
              { id: "i3", label: "324" },
              { id: "i4", label: "243" },
            ],
            correctOrder: ["i2", "i4", "i3", "i1"],
          },
        },
      ],
    },
    {
      id: "math-l-bignum-2",
      title: "Carry to the Stars",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bignum-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "27 + 15 = ?",
              spokenText: "The ones make more than ten, so we carry! Twenty-seven plus fifteen equals what?",
            },
            options: [
              { id: "a", label: "42" },
              { id: "b", label: "32" },
              { id: "c", label: "43" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "48 + 36 = ?",
              spokenText: "Forty-eight plus thirty-six equals what? Eight and six make fourteen, so carry a ten!",
            },
            options: [
              { id: "a", label: "74" },
              { id: "b", label: "84" },
              { id: "c", label: "94" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "56 + 28 = ?",
              spokenText: "Fifty-six plus twenty-eight equals what? Six plus eight is fourteen — carry the ten!",
            },
            template: "56 + 28 = ___",
            bank: [
              { id: "c1", label: "74" },
              { id: "c2", label: "84" },
              { id: "c3", label: "85" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-bignum-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "37 + 25 = ?",
              spokenText: "Thirty-seven plus twenty-five equals what? Add the ones, carry, then the tens!",
            },
            options: [
              { id: "a", label: "62" },
              { id: "b", label: "52" },
              { id: "c", label: "61" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Nineteen plus seven. Tap the sum!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "26" },
              { id: "c", label: "27" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-2-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Ears ready! Forty-five plus twenty-nine. Tap the answer!",
            },
            options: [
              { id: "a", label: "64" },
              { id: "b", label: "75" },
              { id: "c", label: "74" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-bignum-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each sum!",
              spokenText: "Every one of these needs a carry! Match each problem to its sum.",
            },
            pairs: [
              { id: "p1", left: { label: "18 + 13" }, right: { label: "31" } },
              { id: "p2", left: { label: "26 + 27" }, right: { label: "53" } },
              { id: "p3", left: { label: "39 + 44" }, right: { label: "83" } },
            ],
          },
        },
        {
          id: "math-e-bignum-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "58 rockets + 24 rockets = ?",
              spokenText: "Fifty-eight rockets wait on the launch pad. Twenty-four more roll out! How many rockets in all?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚀" }, label: "72" },
              { id: "b", visual: { kind: "emoji", value: "🚀" }, label: "81" },
              { id: "c", visual: { kind: "emoji", value: "🚀" }, label: "82" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-bignum-3",
      title: "Countdown Subtraction",
      primarySkillId: "math-multi-digit",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-bignum-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "52 − 27 = ?",
              spokenText: "Countdown time! Fifty-two minus twenty-seven equals what? You may need to borrow a ten.",
            },
            options: [
              { id: "a", label: "25" },
              { id: "b", label: "35" },
              { id: "c", label: "24" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "84 − 39 = ?",
              spokenText: "Eighty-four minus thirty-nine equals what? Borrow a ten so you can take away the nine!",
            },
            options: [
              { id: "a", label: "55" },
              { id: "b", label: "45" },
              { id: "c", label: "44" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "356 − 124 = ?",
              spokenText: "Now a three-digit blast! Three hundred fifty-six minus one hundred twenty-four equals what?",
            },
            options: [
              { id: "a", label: "232" },
              { id: "b", label: "242" },
              { id: "c", label: "222" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "475 − 130 = ?",
              spokenText: "Four hundred seventy-five minus one hundred thirty equals what? Subtract the tens and hundreds!",
            },
            template: "475 − 130 = ___",
            bank: [
              { id: "c1", label: "335" },
              { id: "c2", label: "345" },
              { id: "c3", label: "355" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-bignum-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears for this one! Ninety-one minus forty-six. Tap the difference!",
            },
            options: [
              { id: "a", label: "35" },
              { id: "b", label: "45" },
              { id: "c", label: "55" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-bignum-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "642 stars − 218 stars = ?",
              spokenText: "A space station has six hundred forty-two stars painted on it. Two hundred eighteen fade away! How many stars are left?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "⭐" }, label: "424" },
              { id: "b", visual: { kind: "emoji", value: "⭐" }, label: "434" },
              { id: "c", visual: { kind: "emoji", value: "⭐" }, label: "414" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-bignum-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each difference!",
              spokenText: "Match each take-away problem to its answer!",
            },
            pairs: [
              { id: "p1", left: { label: "70 − 45" }, right: { label: "25" } },
              { id: "p2", left: { label: "263 − 130" }, right: { label: "133" } },
              { id: "p3", left: { label: "88 − 29" }, right: { label: "59" } },
            ],
          },
        },
        {
          id: "math-e-bignum-3-08",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "These numbers all use fours, fives, and zeros! Check the hundreds and tens, then order them from smallest to biggest.",
            },
            items: [
              { id: "i1", label: "540" },
              { id: "i2", label: "405" },
              { id: "i3", label: "504" },
              { id: "i4", label: "450" },
            ],
            correctOrder: ["i2", "i4", "i3", "i1"],
          },
        },
      ],
    },
  ],
};
