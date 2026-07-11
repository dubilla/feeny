import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 1 · Letter Friends (A–M)
 * Letter-name ↔ keyword association drill for the first half of the alphabet,
 * using the Feeny keyword set (FUNDATIONS_MAP.md).
 * Lesson 1 = uppercase letters, lesson 2 = lowercase, lesson 3 = mixed review.
 */
export const letterFriendsAM: UnitSeed = {
  id: "read-u-friends-am",
  bandId: "reading-b1",
  title: "Letter Friends",
  icon: "🐜",
  lessons: [
    {
      id: "read-l-friends-am-1",
      title: "Big Letter Friends",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-am-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter B! B is for bus. Tap the letter B!" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "M", spokenText: "M is for moon! Tap the moon!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌙" } },
              { id: "b", visual: { kind: "emoji", value: "⭐" } },
              { id: "c", visual: { kind: "emoji", value: "☁️" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter F! F is for fish. Tap the letter F!" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "T" },
              { id: "c", label: "F" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-1-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to its picture friend!",
            },
            pairs: [
              { id: "p1", left: { label: "C" }, right: { visual: { kind: "emoji", value: "🐮" } } },
              { id: "p2", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🦆" } } },
              { id: "p3", left: { label: "L" }, right: { visual: { kind: "emoji", value: "🦁" } } },
            ],
          },
        },
        {
          id: "read-e-friends-am-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "A", spokenText: "A! A is for ant. Tap the ant!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐌" } },
              { id: "b", visual: { kind: "emoji", value: "🐝" } },
              { id: "c", visual: { kind: "emoji", value: "🐜" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter H! H is for horse. Tap the letter H!" },
            options: [
              { id: "a", label: "H" },
              { id: "b", label: "N" },
              { id: "c", label: "M" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "G", spokenText: "G is for goat! Tap the goat!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐴" } },
              { id: "b", visual: { kind: "emoji", value: "🐐" } },
              { id: "c", visual: { kind: "emoji", value: "🐑" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter K! K is for kangaroo. Tap the letter K!" },
            options: [
              { id: "a", label: "K" },
              { id: "b", label: "X" },
              { id: "c", label: "R" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-friends-am-2",
      title: "Small Letter Friends",
      primarySkillId: "read-letters-lower",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-am-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter E! E is for egg. Tap the letter E!" },
            options: [
              { id: "a", label: "c" },
              { id: "b", label: "o" },
              { id: "c", label: "e" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "j", spokenText: "J is for jellyfish! Tap the jellyfish!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐙" } },
              { id: "b", visual: { kind: "emoji", value: "🪼" } },
              { id: "c", visual: { kind: "emoji", value: "🦀" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-2-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter I! I is for iguana. Tap the letter I!" },
            options: [
              { id: "a", label: "i" },
              { id: "b", label: "l" },
              { id: "c", label: "j" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-2-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to its picture friend!",
            },
            pairs: [
              { id: "p1", left: { label: "b" }, right: { visual: { kind: "emoji", value: "🚌" } } },
              { id: "p2", left: { label: "f" }, right: { visual: { kind: "emoji", value: "🐟" } } },
              { id: "p3", left: { label: "m" }, right: { visual: { kind: "emoji", value: "🌙" } } },
            ],
          },
        },
        {
          id: "read-e-friends-am-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "k", spokenText: "K is for kangaroo! Tap the kangaroo!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐰" } },
              { id: "b", visual: { kind: "emoji", value: "🦘" } },
              { id: "c", visual: { kind: "emoji", value: "🐿️" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter D! D is for duck. Tap the letter D!" },
            options: [
              { id: "a", label: "b" },
              { id: "b", label: "p" },
              { id: "c", label: "d" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "h", spokenText: "H is for horse! Tap the horse!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐴" } },
              { id: "b", visual: { kind: "emoji", value: "🐮" } },
              { id: "c", visual: { kind: "emoji", value: "🐐" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter G! G is for goat. Tap the letter G!" },
            options: [
              { id: "a", label: "q" },
              { id: "b", label: "g" },
              { id: "c", label: "j" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-friends-am-3",
      title: "Letter Friends Party",
      primarySkillId: "read-letters-upper",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-friends-am-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter L! L is for lion. Tap the letter L!" },
            options: [
              { id: "a", label: "I" },
              { id: "b", label: "T" },
              { id: "c", label: "L" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "C", spokenText: "C is for cow! Tap the cow!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐮" } },
              { id: "b", visual: { kind: "emoji", value: "🐐" } },
              { id: "c", visual: { kind: "emoji", value: "🐷" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "A! A is for ant. Tap the letter A!" },
            options: [
              { id: "a", label: "o" },
              { id: "b", label: "a" },
              { id: "c", label: "e" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to its picture friend!",
            },
            pairs: [
              { id: "p1", left: { label: "E" }, right: { visual: { kind: "emoji", value: "🥚" } } },
              { id: "p2", left: { label: "G" }, right: { visual: { kind: "emoji", value: "🐐" } } },
              { id: "p3", left: { label: "J" }, right: { visual: { kind: "emoji", value: "🪼" } } },
            ],
          },
        },
        {
          id: "read-e-friends-am-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter M! M is for moon. Tap the letter M!" },
            options: [
              { id: "a", label: "n" },
              { id: "b", label: "m" },
              { id: "c", label: "w" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-friends-am-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: { text: "I", spokenText: "I! I is for iguana. Tap the iguana!" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐢" } },
              { id: "b", visual: { kind: "emoji", value: "🐸" } },
              { id: "c", visual: { kind: "emoji", value: "🦎" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-friends-am-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "The letter D! D is for duck. Tap the letter D!" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-friends-am-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to its picture friend!",
            },
            pairs: [
              { id: "p1", left: { label: "b" }, right: { visual: { kind: "emoji", value: "🚌" } } },
              { id: "p2", left: { label: "K" }, right: { visual: { kind: "emoji", value: "🦘" } } },
              { id: "p3", left: { label: "f" }, right: { visual: { kind: "emoji", value: "🐟" } } },
            ],
          },
        },
      ],
    },
  ],
};
