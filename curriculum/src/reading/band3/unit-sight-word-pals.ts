import type { UnitSeed } from "../../schema/pack";

/**
 * Band 3 · Star Word Pals
 * High-frequency trick words: one, two, what, who, want, put, some, your.
 * Shares skill `read-sight-grow` with the sibling unit (F3/F4 precedent —
 * a per-unit skill would fragment review mastery).
 * Lesson 1 introduces one, two, what, who.
 * Lesson 2 introduces want, put, some, your.
 * Lesson 3 mixes all eight; band-3 allows what/who/want look-alike distractors.
 *
 * Homophone hazards (F4 rule): never co-present to/two or won/one; "to" and
 * "won" never appear anywhere in this unit. "two" targets are always phrased
 * with the number meaning; "one" targets never sit beside "won".
 */
export const sightWordPals: UnitSeed = {
  id: "read-u-sight-pals",
  bandId: "reading-b3",
  title: "Star Word Pals",
  icon: "🤝",
  lessons: [
    {
      id: "read-l-sightpals-1",
      title: "New Word Pals",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightpals-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word one! One, like one little bird!" },
            options: [
              { id: "a", label: "on" },
              { id: "b", label: "one" },
              { id: "c", label: "own" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightpals-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word two! Two, like two shoes on your feet!" },
            options: [
              { id: "a", label: "two" },
              { id: "b", label: "top" },
              { id: "c", label: "tag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightpals-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I see one cat. Tap the missing word!",
            },
            template: "I see ___ cat.",
            bank: [
              { id: "a", label: "one" },
              { id: "b", label: "big" },
              { id: "c", label: "wet" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightpals-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word what! What, like what is that?" },
            options: [
              { id: "a", label: "wet" },
              { id: "b", label: "what" },
              { id: "c", label: "win" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightpals-1-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word who! Who, like who is at the door?" },
            options: [
              { id: "a", label: "who" },
              { id: "b", label: "how" },
              { id: "c", label: "hop" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightpals-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I see two dogs. Two dogs! Tap the missing word!",
            },
            template: "I see ___ dogs.",
            bank: [
              { id: "a", label: "jump" },
              { id: "b", label: "two" },
              { id: "c", label: "sit" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightpals-1-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: See two cats! Tap the words in order.",
            },
            items: [
              { id: "a", label: "two" },
              { id: "b", label: "See" },
              { id: "c", label: "cats" },
            ],
            correctOrder: ["b", "a", "c"],
          },
        },
        {
          id: "read-e-sightpals-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "one" }, right: { label: "one" } },
              { id: "p2", left: { label: "two" }, right: { label: "two" } },
              { id: "p3", left: { label: "what" }, right: { label: "what" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sightpals-2",
      title: "More Word Pals",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightpals-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word want! Want, like I want a hug!" },
            options: [
              { id: "a", label: "want" },
              { id: "b", label: "went" },
              { id: "c", label: "wag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightpals-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word put! Put, like put it on the shelf!" },
            options: [
              { id: "a", label: "pet" },
              { id: "b", label: "put" },
              { id: "c", label: "pot" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightpals-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I want some milk. Tap the missing word!",
            },
            template: "I want ___ milk.",
            bank: [
              { id: "a", label: "jump" },
              { id: "b", label: "some" },
              { id: "c", label: "sit" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightpals-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word your! Your, like this is your hat!" },
            options: [
              { id: "a", label: "your" },
              { id: "b", label: "you" },
              { id: "c", label: "yes" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightpals-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Put the cat down. Tap the missing word!",
            },
            template: "___ the cat down.",
            bank: [
              { id: "a", label: "put" },
              { id: "b", label: "some" },
              { id: "c", label: "big" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightpals-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Get your hat! Tap the missing word!",
            },
            template: "Get ___ hat!",
            bank: [
              { id: "a", label: "some" },
              { id: "b", label: "your" },
              { id: "c", label: "put" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightpals-2-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: I want some milk! Tap the words in order.",
            },
            items: [
              { id: "a", label: "want" },
              { id: "b", label: "I" },
              { id: "c", label: "milk" },
              { id: "d", label: "some" },
            ],
            correctOrder: ["b", "a", "d", "c"],
          },
        },
        {
          id: "read-e-sightpals-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word some! Some, like I want some cake!" },
            options: [
              { id: "a", label: "sun" },
              { id: "b", label: "sit" },
              { id: "c", label: "some" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sightpals-3",
      title: "Word Pal Champs",
      primarySkillId: "read-sight-grow",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightpals-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word what! What, like what did you find?" },
            options: [
              { id: "a", label: "who" },
              { id: "b", label: "what" },
              { id: "c", label: "want" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightpals-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word who! Who, like who is at the door?" },
            options: [
              { id: "a", label: "what" },
              { id: "b", label: "who" },
              { id: "c", label: "want" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightpals-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: What is your name? Tap the missing word!",
            },
            template: "___ is your name?",
            bank: [
              { id: "a", label: "one" },
              { id: "b", label: "what" },
              { id: "c", label: "put" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightpals-3-04",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Who has my hat? Tap the missing word!",
            },
            template: "___ has my hat?",
            bank: [
              { id: "a", label: "two" },
              { id: "b", label: "put" },
              { id: "c", label: "who" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightpals-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I put two hats on. Two hats! Tap the missing word!",
            },
            template: "I put ___ hats on.",
            bank: [
              { id: "a", label: "want" },
              { id: "b", label: "who" },
              { id: "c", label: "two" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightpals-3-06",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "some" }, right: { label: "some" } },
              { id: "p2", left: { label: "your" }, right: { label: "your" } },
              { id: "p3", left: { label: "want" }, right: { label: "want" } },
            ],
          },
        },
        {
          id: "read-e-sightpals-3-07",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: I want your hat! Tap the words in order.",
            },
            items: [
              { id: "a", label: "your" },
              { id: "b", label: "I" },
              { id: "c", label: "hat" },
              { id: "d", label: "want" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "read-e-sightpals-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word one! One, like one big star!" },
            options: [
              { id: "a", label: "own" },
              { id: "b", label: "on" },
              { id: "c", label: "one" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
