import type { UnitSeed } from "../../schema/pack";

/**
 * Band 7 · Fraction Picnic
 * Lesson 1 lays out halves.
 * Lesson 2 slices into quarters (and peeks at three-quarters).
 * Lesson 3 serves thirds and mixes all the fractions together.
 * Fractions are shown as text labels ("1/2") and as fraction-of-a-group emoji stimuli.
 */
export const fractionPicnic: UnitSeed = {
  id: "math-u-fracs",
  bandId: "math-b7",
  title: "Fraction Picnic",
  icon: "🍉",
  lessons: [
    {
      id: "math-l-fracs-1",
      title: "Halves at the Picnic",
      primarySkillId: "math-fractions-intro",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fracs-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍎🍏 — what fraction are red?",
              spokenText:
                "Welcome to the Fraction Picnic! There are two apples. One is red and one is green. What fraction of the apples are red?",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/4" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fracs-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍕 cut into 2 equal slices. You eat 1. What fraction?",
              spokenText:
                "A pizza is cut into two equal slices. You eat one slice. What fraction of the pizza did you eat?",
            },
            options: [
              { id: "a", label: "1/4" },
              { id: "b", label: "1/2" },
              { id: "c", label: "1/3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍓🍓🍓🍓 — eat half. How many is that?",
              spokenText: "There are four strawberries. You eat half of them. How many strawberries is that?",
            },
            options: [
              { id: "a", label: "1" },
              { id: "b", label: "3" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fracs-1-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen closely! Tap the fraction that means one half.",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/3" },
              { id: "c", label: "1/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fracs-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🐟🐟🐟🐟 — half swim away. How many swim away?",
              spokenText: "Four fish are in the pond. Half of them swim away. How many fish swim away?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "1" },
              { id: "c", label: "2" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fracs-1-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each group to half of it!",
              spokenText: "Match each group of snacks to half of it!",
            },
            pairs: [
              { id: "p1", left: { label: "half of 4" }, right: { label: "2" } },
              { id: "p2", left: { label: "half of 6" }, right: { label: "3" } },
              { id: "p3", left: { label: "half of 10" }, right: { label: "5" } },
            ],
          },
        },
        {
          id: "math-e-fracs-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Half of 8 is ___",
              spokenText: "Half of eight is what number? Which chip fills the blank?",
            },
            template: "Half of 8 is ___",
            bank: [
              { id: "c1", label: "3" },
              { id: "c2", label: "4" },
              { id: "c3", label: "5" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-fracs-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍪🍪🍪🍪🍪🍪 shared by 2 friends. What fraction does each get?",
              spokenText:
                "Six cookies are shared equally between two friends. What fraction of the cookies does each friend get?",
            },
            options: [
              { id: "a", label: "1/4" },
              { id: "b", label: "1/2" },
              { id: "c", label: "1/3" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "math-l-fracs-2",
      title: "Quarter Cuts",
      primarySkillId: "math-fractions-intro",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fracs-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍕 cut into 4 equal slices. You eat 1. What fraction?",
              spokenText:
                "A pizza is cut into four equal slices. You eat one slice. What fraction of the pizza did you eat?",
            },
            options: [
              { id: "a", label: "1/4" },
              { id: "b", label: "1/2" },
              { id: "c", label: "1/3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fracs-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🚗🚗🚗🚗 — what fraction is red?",
              spokenText:
                "There are four toy cars. One of them is red. What fraction of the cars are red?",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/4" },
              { id: "c", label: "1/3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍌🍌🍌🍌🍌🍌🍌🍌 — eat a quarter. How many is that?",
              spokenText: "There are eight bananas. You eat a quarter of them. How many bananas is that?",
            },
            options: [
              { id: "a", label: "4" },
              { id: "b", label: "2" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-2-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen up! Tap the fraction that means one quarter.",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/3" },
              { id: "c", label: "1/4" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fracs-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is bigger, 1/2 or 1/4?",
              spokenText:
                "A half and a quarter are both pieces of the same treat. Which piece is bigger, one half or one quarter?",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/4" },
              { id: "c", label: "same size" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fracs-2-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each group to a quarter of it!",
              spokenText: "Match each group of picnic snacks to a quarter of it!",
            },
            pairs: [
              { id: "p1", left: { label: "quarter of 4" }, right: { label: "1" } },
              { id: "p2", left: { label: "quarter of 8" }, right: { label: "2" } },
              { id: "p3", left: { label: "quarter of 12" }, right: { label: "3" } },
            ],
          },
        },
        {
          id: "math-e-fracs-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "A quarter of 8 is ___",
              spokenText: "A quarter of eight is what number? Which chip fills the blank?",
            },
            template: "A quarter of 8 is ___",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "4" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-fracs-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍕 has 4 slices. 3 are eaten. What fraction is eaten?",
              spokenText:
                "A pizza has four equal slices. Three of them are eaten. What fraction of the pizza has been eaten?",
            },
            options: [
              { id: "a", label: "1/4" },
              { id: "b", label: "2/4" },
              { id: "c", label: "3/4" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-fracs-3",
      title: "Thirds and a Big Mix",
      primarySkillId: "math-fractions-intro",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fracs-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍊🍊🍊 — what fraction is peeled?",
              spokenText: "There are three oranges. One of them is peeled. What fraction of the oranges are peeled?",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/3" },
              { id: "c", label: "1/4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍫 broken into 3 equal pieces. You eat 1. What fraction?",
              spokenText:
                "A chocolate bar breaks into three equal pieces. You eat one piece. What fraction of the bar did you eat?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/2" },
              { id: "c", label: "1/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fracs-3-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🌭🌭🌭🌭🌭🌭🌭🌭🌭 — eat a third. How many is that?",
              spokenText: "There are nine hot dogs. You eat a third of them. How many hot dogs is that?",
            },
            options: [
              { id: "a", label: "2" },
              { id: "b", label: "4" },
              { id: "c", label: "3" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fracs-3-04",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Listen carefully! Tap the fraction that means one third.",
            },
            options: [
              { id: "a", label: "1/4" },
              { id: "b", label: "1/3" },
              { id: "c", label: "1/2" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is bigger, 1/3 or 1/2?",
              spokenText: "Which piece of the picnic cake is bigger, one third or one half?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/2" },
              { id: "c", label: "same size" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fracs-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order the fractions, smallest first!",
              spokenText:
                "Here are pieces of the same picnic pie. Put the fractions in order from the smallest piece to the biggest, ending with the whole pie!",
            },
            items: [
              { id: "i1", label: "1/2" },
              { id: "i2", label: "1/4" },
              { id: "i3", label: "1" },
              { id: "i4", label: "1/3" },
            ],
            correctOrder: ["i2", "i4", "i1", "i3"],
          },
        },
        {
          id: "math-e-fracs-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "A third of 9 is ___",
              spokenText: "A third of nine is what number? Which chip fills the blank?",
            },
            template: "A third of 9 is ___",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "4" },
            ],
            correctChipId: "c2",
          },
        },
        {
          id: "math-e-fracs-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "🍉🍉🍉 — 2 are ripe. What fraction is ripe?",
              spokenText: "There are three watermelons. Two of them are ripe. What fraction of the watermelons are ripe?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "2/3" },
              { id: "c", label: "3/3" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
