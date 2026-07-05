import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Number order to 20 · Number Parade
 * Lesson 1: ordering and next/before within 1–10.
 * Lesson 2: crossing ten — ordering and counting on through the teens.
 * Lesson 3: the road to twenty, plus a skip-around ordering stretch.
 * Ordering is this unit's whole topic, so each lesson carries two
 * ordering exercises instead of the usual one.
 */
export const numberParade: UnitSeed = {
  id: "math-u-order20",
  bandId: "math-b2",
  title: "Number Parade",
  icon: "🎪",
  lessons: [
    {
      id: "math-l-order20-1",
      title: "Little Number Lines",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-order20-1-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "The number parade is starting! Line up the numbers from smallest to biggest.",
            },
            items: [
              { id: "a", label: "4" },
              { id: "b", label: "3" },
              { id: "c", label: "5" },
            ],
            correctOrder: ["b", "a", "c"],
          },
        },
        {
          id: "math-e-order20-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1, 2, 3, __",
              spokenText: "Count with me: one, two, three... what number comes next? Tap it!",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "4" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-order20-1-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "These numbers are all mixed up! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "a", label: "8" },
              { id: "b", label: "6" },
              { id: "c", label: "9" },
              { id: "d", label: "7" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "math-e-order20-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen: seven, eight, nine... Tap the number that comes next!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "10" },
              { id: "c", label: "11" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-order20-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "__, 5",
              spokenText: "What number comes just before five when you count? Tap it!",
            },
            options: [
              { id: "a", label: "6" },
              { id: "b", label: "3" },
              { id: "c", label: "4" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-order20-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "4, __, 6",
              spokenText: "A number is missing from the parade! Four, something, six. Tap the missing number!",
            },
            options: [
              { id: "a", label: "5" },
              { id: "b", label: "7" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-order20-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each number to the number that comes right after it!",
            },
            pairs: [
              { id: "p1", left: { label: "2" }, right: { label: "3" } },
              { id: "p2", left: { label: "5" }, right: { label: "6" } },
              { id: "p3", left: { label: "8" }, right: { label: "9" } },
            ],
          },
        },
        {
          id: "math-e-order20-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number that comes right after four!",
            },
            options: [
              { id: "a", label: "3" },
              { id: "b", label: "6" },
              { id: "c", label: "5" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-order20-2",
      title: "Into the Teens",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-order20-2-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "March the numbers into the parade, from smallest to biggest!",
            },
            items: [
              { id: "a", label: "11" },
              { id: "b", label: "9" },
              { id: "c", label: "12" },
              { id: "d", label: "10" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "math-e-order20-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "10, __",
              spokenText: "You counted all the way to ten! What number comes next? Tap it!",
            },
            options: [
              { id: "a", label: "11" },
              { id: "b", label: "9" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-order20-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen: eleven, twelve, thirteen... Tap the number that comes next!",
            },
            options: [
              { id: "a", label: "15" },
              { id: "b", label: "14" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-order20-2-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "Five teen numbers got jumbled! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "a", label: "13" },
              { id: "b", label: "15" },
              { id: "c", label: "11" },
              { id: "d", label: "14" },
              { id: "e", label: "12" },
            ],
            correctOrder: ["c", "e", "a", "d", "b"],
          },
        },
        {
          id: "math-e-order20-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "__, 15",
              spokenText: "What number comes just before fifteen when you count? Tap it!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "13" },
              { id: "c", label: "14" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-order20-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each number to the one that comes right after it!",
            },
            pairs: [
              { id: "p1", left: { label: "10" }, right: { label: "11" } },
              { id: "p2", left: { label: "13" }, right: { label: "14" } },
              { id: "p3", left: { label: "15" }, right: { label: "16" } },
            ],
          },
        },
        {
          id: "math-e-order20-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "12, 13, 14, __",
              spokenText: "Count on with me: twelve, thirteen, fourteen... what comes next? Tap it!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "11" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-order20-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number that comes between thirteen and fifteen!",
            },
            options: [
              { id: "a", label: "14" },
              { id: "b", label: "16" },
              { id: "c", label: "12" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "math-l-order20-3",
      title: "The Big Parade to Twenty",
      primarySkillId: "math-count-to-20",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-order20-3-01",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "The biggest numbers are joining the parade! Line them up from smallest to biggest.",
            },
            items: [
              { id: "a", label: "18" },
              { id: "b", label: "20" },
              { id: "c", label: "16" },
              { id: "d", label: "19" },
              { id: "e", label: "17" },
            ],
            correctOrder: ["c", "e", "a", "d", "b"],
          },
        },
        {
          id: "math-e-order20-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "17, __",
              spokenText: "What number comes right after seventeen? Tap it!",
            },
            options: [
              { id: "a", label: "16" },
              { id: "b", label: "18" },
              { id: "c", label: "19" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-order20-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen: eighteen, nineteen... Tap the number that comes next!",
            },
            options: [
              { id: "a", label: "20" },
              { id: "b", label: "21" },
              { id: "c", label: "18" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-order20-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "__, 20",
              spokenText: "What number comes just before twenty when you count? Tap it!",
            },
            options: [
              { id: "a", label: "21" },
              { id: "b", label: "18" },
              { id: "c", label: "19" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-order20-3-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Line them up!",
              spokenText: "These numbers skip around, but you can still line them up! Put them in order from smallest to biggest.",
            },
            items: [
              { id: "a", label: "10" },
              { id: "b", label: "2" },
              { id: "c", label: "18" },
              { id: "d", label: "6" },
              { id: "e", label: "14" },
            ],
            correctOrder: ["b", "d", "a", "e", "c"],
          },
        },
        {
          id: "math-e-order20-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each number to the one that comes right after it!",
            },
            pairs: [
              { id: "p1", left: { label: "14" }, right: { label: "15" } },
              { id: "p2", left: { label: "17" }, right: { label: "18" } },
              { id: "p3", left: { label: "19" }, right: { label: "20" } },
            ],
          },
        },
        {
          id: "math-e-order20-3-07",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Tap the number that comes between sixteen and eighteen!",
            },
            options: [
              { id: "a", label: "19" },
              { id: "b", label: "17" },
              { id: "c", label: "15" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-order20-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "17, 18, 19, __",
              spokenText: "Count to the very top: seventeen, eighteen, nineteen... what comes next? Tap it!",
            },
            options: [
              { id: "a", label: "20" },
              { id: "b", label: "18" },
              { id: "c", label: "21" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
