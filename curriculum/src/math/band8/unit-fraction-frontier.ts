import type { UnitSeed } from "../../schema/pack";

/**
 * Band 8 · Fraction Frontier
 * Lesson 1 finds equivalent fractions (1/2 = 2/4), with shaded emoji groups.
 * Lesson 2 compares fractions with the SAME denominator (bigger top = bigger).
 * Lesson 3 compares unit fractions (1/2 vs 1/3): more pieces means each is smaller.
 * Space-frontier energy; every prompt reads the fractions aloud.
 */
export const fractionFrontier: UnitSeed = {
  id: "math-u-fraccomp",
  bandId: "math-b8",
  title: "Fraction Frontier",
  icon: "🌌",
  lessons: [
    {
      id: "math-l-fraccomp-1",
      title: "Same Piece, New Name",
      primarySkillId: "math-compare-fractions",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fraccomp-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "1/2 = ?",
              spokenText: "One half can wear a different name! Which fraction is the same size as one half?",
            },
            options: [
              { id: "a", label: "2/4" },
              { id: "b", label: "1/4" },
              { id: "c", label: "3/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows the same as one half?",
              spokenText: "Which picture has the same amount shaded as one half — that means half the boxes are blue!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟦🟦⬜⬜" }, label: "2/4" },
              { id: "b", visual: { kind: "emoji", value: "🟦⬜⬜⬜" }, label: "1/4" },
              { id: "c", visual: { kind: "emoji", value: "🟦🟦🟦⬜" }, label: "3/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "1/2 = ?/4",
              spokenText: "One half is the same as how many fourths? Fill in the top number!",
            },
            template: "1/2 = ___/4",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "1" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-fraccomp-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "2/4 = ?",
              spokenText: "Two fourths has a shorter name too! Which fraction is the same size as two fourths?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/2" },
              { id: "c", label: "3/4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fraccomp-1-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears! Which fraction is the same size as two fourths? Tap it!",
            },
            options: [
              { id: "a", label: "1/2" },
              { id: "b", label: "1/4" },
              { id: "c", label: "1/3" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which shows 2/4 shaded?",
              spokenText: "Which picture has two of its four boxes shaded green? That's two fourths!",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🟩⬜⬜⬜" }, label: "1/4" },
              { id: "b", visual: { kind: "emoji", value: "🟩🟩⬜⬜" }, label: "2/4" },
              { id: "c", visual: { kind: "emoji", value: "🟩🟩🟩⬜" }, label: "3/4" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fraccomp-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the equal fractions!",
              spokenText: "Match each fraction to another fraction that is exactly the same size!",
            },
            pairs: [
              { id: "p1", left: { label: "1/2" }, right: { label: "2/4" } },
              { id: "p2", left: { label: "1/3" }, right: { label: "2/6" } },
              { id: "p3", left: { label: "1/4" }, right: { label: "2/8" } },
            ],
          },
        },
        {
          id: "math-e-fraccomp-1-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "2/4 = 1/?",
              spokenText: "Two fourths is really one out of how many equal pieces? Fill in the bottom number!",
            },
            template: "2/4 = 1/___",
            bank: [
              { id: "c1", label: "2" },
              { id: "c2", label: "3" },
              { id: "c3", label: "4" },
            ],
            correctChipId: "c1",
          },
        },
      ],
    },
    {
      id: "math-l-fraccomp-2",
      title: "Which Slice Wins?",
      primarySkillId: "math-compare-fractions",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fraccomp-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is bigger: 3/4 or 1/4?",
              spokenText: "Same size pieces, but a different number of them! Which is bigger, three fourths or one fourth?",
            },
            options: [
              { id: "a", label: "3/4" },
              { id: "b", label: "1/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is smaller: 4/5 or 2/5?",
              spokenText: "The bottoms match, so count the top! Which is smaller, four fifths or two fifths?",
            },
            options: [
              { id: "a", label: "4/5" },
              { id: "b", label: "2/5" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fraccomp-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "3/6 is ? than 5/6",
              spokenText: "When the bottoms match, more pieces on top means more. Is three sixths less or more than five sixths?",
            },
            template: "3/6 is ___ than 5/6",
            bank: [
              { id: "c1", label: "less" },
              { id: "c2", label: "more" },
              { id: "c3", label: "equal" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-fraccomp-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the biggest?",
              spokenText: "All of these are eighths! The one with the most pieces wins. Which is the biggest?",
            },
            options: [
              { id: "a", label: "2/8" },
              { id: "b", label: "5/8" },
              { id: "c", label: "7/8" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fraccomp-2-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears! Which is bigger, three sevenths or six sevenths? Tap the bigger one!",
            },
            options: [
              { id: "a", label: "3/7" },
              { id: "b", label: "6/7" },
              { id: "c", label: "5/7" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fraccomp-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the smallest?",
              spokenText: "All of these are sixths! The one with the fewest pieces is smallest. Which one is it?",
            },
            options: [
              { id: "a", label: "1/6" },
              { id: "b", label: "3/6" },
              { id: "c", label: "4/6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from smallest to biggest!",
              spokenText: "These are all fifths! Put them in order from smallest to biggest by counting the top numbers.",
            },
            items: [
              { id: "i1", label: "3/5" },
              { id: "i2", label: "1/5" },
              { id: "i3", label: "4/5" },
            ],
            correctOrder: ["i2", "i1", "i3"],
          },
        },
        {
          id: "math-e-fraccomp-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "One more with your ears! Which is more, seven ninths or two ninths? Tap the bigger piece!",
            },
            options: [
              { id: "a", label: "2/9" },
              { id: "b", label: "4/9" },
              { id: "c", label: "7/9" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "math-l-fraccomp-3",
      title: "Fewer Sharers, Bigger Piece",
      primarySkillId: "math-compare-fractions",
      xpReward: 10,
      exercises: [
        {
          id: "math-e-fraccomp-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is bigger: 1/2 or 1/3?",
              spokenText: "When fewer friends share, each piece is bigger! Which is bigger, one half or one third?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/2" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "math-e-fraccomp-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is smaller: 1/4 or 1/6?",
              spokenText: "More pieces means each one is smaller! Which is smaller, one fourth or one sixth?",
            },
            options: [
              { id: "a", label: "1/6" },
              { id: "b", label: "1/4" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "1/3 is ? than 1/5",
              spokenText: "Cutting into three pieces or five pieces — which makes bigger pieces? Is one third bigger or smaller than one fifth?",
            },
            template: "1/3 is ___ than 1/5",
            bank: [
              { id: "c1", label: "bigger" },
              { id: "c2", label: "smaller" },
              { id: "c3", label: "equal" },
            ],
            correctChipId: "c1",
          },
        },
        {
          id: "math-e-fraccomp-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Which is the biggest piece?",
              spokenText: "One whole cut into halves, fourths, or eighths. The fewest cuts make the biggest piece! Which is the biggest?",
            },
            options: [
              { id: "a", label: "1/8" },
              { id: "b", label: "1/4" },
              { id: "c", label: "1/2" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "math-e-fraccomp-3-05",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Use your ears! Which is bigger, one third or one sixth? Tap the bigger piece!",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/6" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "math-e-fraccomp-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each unit fraction!",
              spokenText: "Match each fraction to what it means — one piece out of that many equal pieces!",
            },
            pairs: [
              { id: "p1", left: { label: "1/2" }, right: { label: "1 of 2 pieces" } },
              { id: "p2", left: { label: "1/3" }, right: { label: "1 of 3 pieces" } },
              { id: "p3", left: { label: "1/4" }, right: { label: "1 of 4 pieces" } },
            ],
          },
        },
        {
          id: "math-e-fraccomp-3-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Order from biggest to smallest!",
              spokenText: "Careful — biggest to smallest this time! The fewer the pieces, the bigger each one. Order one half, one fourth, one eighth.",
            },
            items: [
              { id: "i1", label: "1/8" },
              { id: "i2", label: "1/2" },
              { id: "i3", label: "1/4" },
            ],
            correctOrder: ["i2", "i3", "i1"],
          },
        },
        {
          id: "math-e-fraccomp-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Bigger piece: shared by 2 or by 3?",
              spokenText: "A moon cake shared by two astronauts is one half each. Shared by three is one third each. Which piece is bigger?",
            },
            options: [
              { id: "a", label: "1/3" },
              { id: "b", label: "1/2" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
