import type { UnitSeed } from "../../schema/pack";

/**
 * Band 2 · Star Word Sprouts (F4 trick-words track, first unit)
 * High-frequency trick words: me, up, to, go, my, we, is, no.
 * Band 2 = pre-readers, so recognition ONLY — the printed word IS the
 * stimulus (F4 band-2 carve-out): listenAndPick (spoken prompt names the
 * target inside a usage sentence) + tapMatchPairs (word-twin matching).
 * No sentence reading, no fill-blank, no ordering.
 * Lesson 1 introduces me, up, to, go. Lesson 2 introduces my, we, is, no.
 * Lesson 3 mixes all eight. Distractors kept visually DISTINCT at band 2
 * (never no/on, to/two, me/we, go/no, my/me in one option set).
 */
export const sightWordSprouts: UnitSeed = {
  id: "read-u-sight-start",
  bandId: "reading-b2",
  title: "Star Word Sprouts",
  icon: "🌱",
  lessons: [
    {
      id: "read-l-sightstart-1",
      title: "First Sprouts",
      primarySkillId: "read-sight-start",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightstart-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word me! Me, like look at me go!" },
            options: [
              { id: "a", label: "me" },
              { id: "b", label: "up" },
              { id: "c", label: "cat" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-1-02",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "me" }, right: { label: "me" } },
              { id: "p2", left: { label: "up" }, right: { label: "up" } },
              { id: "p3", left: { label: "go" }, right: { label: "go" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-1-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word up! Up, like jump up high!" },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "up" },
              { id: "c", label: "to" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word to! To, like off to the park!" },
            options: [
              { id: "a", label: "sun" },
              { id: "b", label: "bee" },
              { id: "c", label: "to" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightstart-1-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word go! Go, like ready, set, go!" },
            options: [
              { id: "a", label: "me" },
              { id: "b", label: "go" },
              { id: "c", label: "pig" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-1-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word up! Up, like the sun is up!" },
            options: [
              { id: "a", label: "up" },
              { id: "b", label: "cat" },
              { id: "c", label: "me" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "to" }, right: { label: "to" } },
              { id: "p2", left: { label: "go" }, right: { label: "go" } },
              { id: "p3", left: { label: "up" }, right: { label: "up" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-1-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word to! To, like give it to me!" },
            options: [
              { id: "a", label: "big" },
              { id: "b", label: "hop" },
              { id: "c", label: "to" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sightstart-2",
      title: "More Sprouts",
      primarySkillId: "read-sight-start",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightstart-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word my! My, like this is my hat!" },
            options: [
              { id: "a", label: "my" },
              { id: "b", label: "sun" },
              { id: "c", label: "up" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word we! We, like we can play!" },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "we" },
              { id: "c", label: "to" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-2-03",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "my" }, right: { label: "my" } },
              { id: "p2", left: { label: "we" }, right: { label: "we" } },
              { id: "p3", left: { label: "is" }, right: { label: "is" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word is! Is, like here is my dog!" },
            options: [
              { id: "a", label: "cat" },
              { id: "b", label: "go" },
              { id: "c", label: "is" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightstart-2-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word no! No, like no, thank you!" },
            options: [
              { id: "a", label: "no" },
              { id: "b", label: "pig" },
              { id: "c", label: "up" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-2-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word my! My, like my dog can run!" },
            options: [
              { id: "a", label: "bee" },
              { id: "b", label: "my" },
              { id: "c", label: "to" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "no" }, right: { label: "no" } },
              { id: "p2", left: { label: "is" }, right: { label: "is" } },
              { id: "p3", left: { label: "we" }, right: { label: "we" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-2-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word we! We, like we like to sing!" },
            options: [
              { id: "a", label: "bug" },
              { id: "b", label: "sun" },
              { id: "c", label: "we" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-sightstart-3",
      title: "Star Word Garden",
      primarySkillId: "read-sight-start",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightstart-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word up! Up, like jump up and down!" },
            options: [
              { id: "a", label: "up" },
              { id: "b", label: "sun" },
              { id: "c", label: "go" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-3-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word to! To, like come to me!" },
            options: [
              { id: "a", label: "cat" },
              { id: "b", label: "to" },
              { id: "c", label: "my" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word we! We, like we love pizza!" },
            options: [
              { id: "a", label: "sun" },
              { id: "b", label: "dog" },
              { id: "c", label: "we" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightstart-3-04",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "me" }, right: { label: "me" } },
              { id: "p2", left: { label: "is" }, right: { label: "is" } },
              { id: "p3", left: { label: "up" }, right: { label: "up" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-3-05",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word my! My, like my cat is soft!" },
            options: [
              { id: "a", label: "my" },
              { id: "b", label: "we" },
              { id: "c", label: "pig" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightstart-3-06",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word no! No, like no, not yet!" },
            options: [
              { id: "a", label: "bee" },
              { id: "b", label: "no" },
              { id: "c", label: "up" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightstart-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "go" }, right: { label: "go" } },
              { id: "p2", left: { label: "me" }, right: { label: "me" } },
              { id: "p3", left: { label: "is" }, right: { label: "is" } },
            ],
          },
        },
        {
          id: "read-e-sightstart-3-08",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word go! Go, like let us go now!" },
            options: [
              { id: "a", label: "cat" },
              { id: "b", label: "my" },
              { id: "c", label: "go" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
