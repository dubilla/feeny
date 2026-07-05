import type { UnitSeed } from "../../schema/pack";

/**
 * Band 1 · Uppercase letter recognition · A–M
 * Lesson 1 introduces A–E, lesson 2 adds F–J, lesson 3 finishes K–M
 * and mixes in review. Kids cannot read: the spoken prompt is always
 * the full stimulus, and letter labels ARE the content.
 */
export const abcAdventure: UnitSeed = {
  id: "read-u-abc",
  bandId: "reading-b1",
  title: "ABC Adventure",
  icon: "🔤",
  lessons: [
    {
      id: "read-l-abc-1",
      title: "First Letters",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-abc-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter A!" },
            options: [
              { id: "a", label: "A" },
              { id: "b", label: "H" },
              { id: "c", label: "V" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter B!" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "C",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "O" },
              { id: "b", label: "G" },
              { id: "c", label: "C" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-abc-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter D!" },
            options: [
              { id: "a", label: "B" },
              { id: "b", label: "D" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same letters!",
              spokenText: "Some letters are twins! Tap two letters that look exactly the same.",
            },
            pairs: [
              { id: "p1", left: { label: "A" }, right: { label: "A" } },
              { id: "p2", left: { label: "B" }, right: { label: "B" } },
              { id: "p3", left: { label: "D" }, right: { label: "D" } },
            ],
          },
        },
        {
          id: "read-e-abc-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter E!" },
            options: [
              { id: "a", label: "F" },
              { id: "b", label: "E" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "B",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "B" },
              { id: "b", label: "D" },
              { id: "c", label: "R" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter C!" },
            options: [
              { id: "a", label: "G" },
              { id: "b", label: "O" },
              { id: "c", label: "C" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-abc-2",
      title: "More Letters",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-abc-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter F!" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "F" },
              { id: "c", label: "T" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter G!" },
            options: [
              { id: "a", label: "C" },
              { id: "b", label: "O" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-abc-2-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "H",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "H" },
              { id: "b", label: "N" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter I!" },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "L" },
              { id: "c", label: "T" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-2-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "ABC order!",
              spokenText: "Put the letters in alphabet order! Which letter comes first?",
            },
            items: [
              { id: "a", label: "A" },
              { id: "b", label: "B" },
              { id: "c", label: "C" },
              { id: "d", label: "D" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-abc-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter J!" },
            options: [
              { id: "a", label: "G" },
              { id: "b", label: "J" },
              { id: "c", label: "I" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Find the matching letters!",
              spokenText: "Time to find letter twins! Tap two letters that look exactly the same.",
            },
            pairs: [
              { id: "p1", left: { label: "E" }, right: { label: "E" } },
              { id: "p2", left: { label: "F" }, right: { label: "F" } },
              { id: "p3", left: { label: "H" }, right: { label: "H" } },
            ],
          },
        },
        {
          id: "read-e-abc-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter H!" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "N" },
              { id: "c", label: "H" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-abc-3",
      title: "Letter Round-Up",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-abc-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter K!" },
            options: [
              { id: "a", label: "X" },
              { id: "b", label: "K" },
              { id: "c", label: "H" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-abc-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter L!" },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "T" },
              { id: "c", label: "L" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-abc-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen close!", spokenText: "Tap the letter M!" },
            options: [
              { id: "a", label: "M" },
              { id: "b", label: "N" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "J",
              spokenText: "Look at the big letter up top! Tap the letter that matches it!",
            },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "G" },
              { id: "c", label: "J" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-abc-3-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "ABC order!",
              spokenText: "Put these letters in alphabet order, just like the ABC song!",
            },
            items: [
              { id: "a", label: "J" },
              { id: "b", label: "K" },
              { id: "c", label: "L" },
              { id: "d", label: "M" },
            ],
            correctOrder: ["a", "b", "c", "d"],
          },
        },
        {
          id: "read-e-abc-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same letters!",
              spokenText: "These letters look a lot alike! Look carefully and match the twins.",
            },
            pairs: [
              { id: "p1", left: { label: "B" }, right: { label: "B" } },
              { id: "p2", left: { label: "D" }, right: { label: "D" } },
              { id: "p3", left: { label: "P" }, right: { label: "P" } },
            ],
          },
        },
        {
          id: "read-e-abc-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the letter E!" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "F" },
              { id: "c", label: "L" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-abc-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Tap what you hear!", spokenText: "Tap the letter D!" },
            options: [
              { id: "a", label: "P" },
              { id: "b", label: "D" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
