import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 2 · Sound Friends (A–M)
 * Orton-Gillingham three-part drill (letter → keyword → sound) for the first
 * half of the alphabet, anchored entirely in words — never raw phonemes.
 * Lesson 1 covers A–G, lesson 2 covers H–M, lesson 3 is a mixed review over
 * about ten of the letters with extra weight on the b/d discrimination.
 * Keywords: ant, bus, cow, duck, egg, fish, goat, horse, iguana, jellyfish,
 * kangaroo, lion, moon (see FUNDATIONS_MAP.md — keywords never appear as options).
 */
export const soundFriendsAM: UnitSeed = {
  id: "read-u-soundfriends-am",
  bandId: "reading-b2",
  title: "Sound Friends",
  icon: "🎶",
  lessons: [
    {
      id: "read-l-soundfriends-am-1",
      title: "Sounds A to G",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-am-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Ant starts with the letter A! Which letter starts the word ant?" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "I" },
              { id: "c", label: "A" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Bus starts with B! Which picture starts like bus?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍌" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🌳" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "The letter C! C is for cow. Tap the letter that starts cow.",
            },
            options: [
              { id: "a", label: "G" },
              { id: "b", label: "C" },
              { id: "c", label: "S" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Duck starts with D! Which picture starts like duck?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍕" } },
              { id: "b", visual: { kind: "emoji", value: "🐕" } },
              { id: "c", visual: { kind: "emoji", value: "🔑" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-1-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Egg starts with E! Which letter starts the word egg?" },
            options: [
              { id: "a", label: "E" },
              { id: "b", label: "A" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the picture!",
              spokenText: "Fish starts with F! Which picture starts like fish?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥛" } },
              { id: "b", visual: { kind: "emoji", value: "🐝" } },
              { id: "c", visual: { kind: "emoji", value: "🐸" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-1-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Goat starts with G! Which picture starts like goat?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍇" } },
              { id: "b", visual: { kind: "emoji", value: "🚗" } },
              { id: "c", visual: { kind: "emoji", value: "🐘" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with it!",
            },
            pairs: [
              { id: "p1", left: { label: "A" }, right: { visual: { kind: "emoji", value: "🍎" } } },
              { id: "p2", left: { label: "D" }, right: { visual: { kind: "emoji", value: "🥁" } } },
              { id: "p3", left: { label: "F" }, right: { visual: { kind: "emoji", value: "🦊" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-soundfriends-am-2",
      title: "Sounds H to M",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-am-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Horse starts with H! Which letter starts the word horse?" },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "M" },
              { id: "c", label: "H" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Kangaroo starts with K! Which picture starts like kangaroo?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍋" } },
              { id: "b", visual: { kind: "emoji", value: "🔑" } },
              { id: "c", visual: { kind: "emoji", value: "🐸" } },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "The letter J! J is for jellyfish. Tap the letter that starts jellyfish.",
            },
            options: [
              { id: "a", label: "J" },
              { id: "b", label: "G" },
              { id: "c", label: "I" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Moon starts with M! Which picture starts like moon?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐒" } },
              { id: "b", visual: { kind: "emoji", value: "🍎" } },
              { id: "c", visual: { kind: "emoji", value: "🎩" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-2-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Iguana starts with the letter I! Which letter starts the word iguana?" },
            options: [
              { id: "a", label: "L" },
              { id: "b", label: "I" },
              { id: "c", label: "E" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the picture!",
              spokenText: "Lion starts with L! Which picture starts like lion?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐕" } },
              { id: "b", visual: { kind: "emoji", value: "🍌" } },
              { id: "c", visual: { kind: "emoji", value: "🍋" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-2-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Bus starts with B! Which letter starts the word bus?" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "P" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with it!",
            },
            pairs: [
              { id: "p1", left: { label: "H" }, right: { visual: { kind: "emoji", value: "🏠" } } },
              { id: "p2", left: { label: "J" }, right: { visual: { kind: "emoji", value: "🧃" } } },
              { id: "p3", left: { label: "M" }, right: { visual: { kind: "emoji", value: "🍄" } } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-soundfriends-am-3",
      title: "Sound Mix-Up",
      primarySkillId: "read-letter-sounds",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-soundfriends-am-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word duck?" },
            options: [
              { id: "a", label: "D" },
              { id: "b", label: "B" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Moon starts with M! Which picture starts like moon?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐝" } },
              { id: "b", visual: { kind: "emoji", value: "🌳" } },
              { id: "c", visual: { kind: "emoji", value: "🥛" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen!",
              spokenText: "Which letter starts the word moon?",
            },
            options: [
              { id: "a", label: "N" },
              { id: "b", label: "M" },
              { id: "c", label: "W" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Bus starts with B! Which picture starts like bus?" },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🥁" } },
              { id: "b", visual: { kind: "emoji", value: "🎩" } },
              { id: "c", visual: { kind: "emoji", value: "🍌" } },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word cow?" },
            options: [
              { id: "a", label: "K" },
              { id: "b", label: "C" },
              { id: "c", label: "G" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-soundfriends-am-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Find the picture!",
              spokenText: "Egg starts with E! Which picture starts like egg?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐘" } },
              { id: "b", visual: { kind: "emoji", value: "🍇" } },
              { id: "c", visual: { kind: "emoji", value: "🦊" } },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-soundfriends-am-3-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Which letter starts the word bear?" },
            options: [
              { id: "a", label: "R" },
              { id: "b", label: "P" },
              { id: "c", label: "B" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-soundfriends-am-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match!",
              spokenText: "Match each letter to the picture that starts with it!",
            },
            pairs: [
              { id: "p1", left: { label: "K" }, right: { visual: { kind: "emoji", value: "🪁" } } },
              { id: "p2", left: { label: "A" }, right: { visual: { kind: "emoji", value: "🍎" } } },
              { id: "p3", left: { label: "F" }, right: { visual: { kind: "emoji", value: "🐸" } } },
            ],
          },
        },
      ],
    },
  ],
};
