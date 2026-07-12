import type { UnitSeed } from "../../schema/pack";

/**
 * Band 4 · Star Word Sky (shares skill read-sight-words with Sight Word Stars)
 * High-frequency trick words: where, there, were, done, gone, very, only, once.
 * Lesson 1 introduces where, very, only, once (the where/were/there look-alike
 *   cluster is kept apart — only "where" appears here, never beside were/there).
 * Lesson 2 introduces there, were, done, gone.
 * Lesson 3 mixes all eight; where/there/were are contrasted only in read/
 *   fill-blank form where the sentence disambiguates, and gone/done contrast is
 *   done by ear (audibly different) — never as a fill-blank double-solve.
 */
export const sightWordSky: UnitSeed = {
  id: "read-u-sight-sky",
  bandId: "reading-b4",
  title: "Star Word Sky",
  icon: "🌠",
  lessons: [
    {
      id: "read-l-sightsky-1",
      title: "New Star Words",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightsky-1-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word where! Where, like where is my hat?" },
            options: [
              { id: "a", label: "when" },
              { id: "b", label: "where" },
              { id: "c", label: "wet" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightsky-1-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word very! Very, like a very big dog!" },
            options: [
              { id: "a", label: "very" },
              { id: "b", label: "vet" },
              { id: "c", label: "van" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightsky-1-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I have only one cat. Tap the missing word!",
            },
            template: "I have ___ one cat.",
            bank: [
              { id: "a", label: "over" },
              { id: "b", label: "only" },
              { id: "c", label: "open" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightsky-1-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word once! Once, like once upon a time!" },
            options: [
              { id: "a", label: "on" },
              { id: "b", label: "one" },
              { id: "c", label: "once" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightsky-1-05",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: Where is my cat? Tap the words in order.",
            },
            items: [
              { id: "a", label: "is" },
              { id: "b", label: "Where" },
              { id: "c", label: "cat" },
              { id: "d", label: "my" },
            ],
            correctOrder: ["b", "a", "d", "c"],
          },
        },
        {
          id: "read-e-sightsky-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The dog is very big. Tap the missing word!",
            },
            template: "The dog is ___ big.",
            bank: [
              { id: "a", label: "very" },
              { id: "b", label: "vet" },
              { id: "c", label: "wet" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightsky-1-07",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word only! Only, like I have only one hat!" },
            options: [
              { id: "a", label: "open" },
              { id: "b", label: "under" },
              { id: "c", label: "only" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightsky-1-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "where" }, right: { label: "where" } },
              { id: "p2", left: { label: "very" }, right: { label: "very" } },
              { id: "p3", left: { label: "once" }, right: { label: "once" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sightsky-2",
      title: "More Star Words",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightsky-2-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word there! There, like over there, by the tree!" },
            options: [
              { id: "a", label: "there" },
              { id: "b", label: "then" },
              { id: "c", label: "they" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightsky-2-02",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word were! Were, like we were at the park!" },
            options: [
              { id: "a", label: "wet" },
              { id: "b", label: "were" },
              { id: "c", label: "went" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightsky-2-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: The cat is gone now. Tap the missing word!",
            },
            template: "The cat is ___ now.",
            bank: [
              { id: "a", label: "gone" },
              { id: "b", label: "goat" },
              { id: "c", label: "game" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightsky-2-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word done! Done, like all done!" },
            options: [
              { id: "a", label: "dog" },
              { id: "b", label: "den" },
              { id: "c", label: "done" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightsky-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Look, there is the moon! Tap the missing word!",
            },
            template: "Look, ___ is the moon!",
            bank: [
              { id: "a", label: "they" },
              { id: "b", label: "there" },
              { id: "c", label: "then" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightsky-2-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: The dog is gone! Tap the words in order.",
            },
            items: [
              { id: "a", label: "dog" },
              { id: "b", label: "The" },
              { id: "c", label: "gone" },
              { id: "d", label: "is" },
            ],
            correctOrder: ["b", "a", "d", "c"],
          },
        },
        {
          id: "read-e-sightsky-2-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: We were at the zoo. Tap the missing word!",
            },
            template: "We ___ at the zoo.",
            bank: [
              { id: "a", label: "wet" },
              { id: "b", label: "well" },
              { id: "c", label: "were" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightsky-2-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "were" }, right: { label: "were" } },
              { id: "p2", left: { label: "gone" }, right: { label: "gone" } },
              { id: "p3", left: { label: "very" }, right: { label: "very" } },
            ],
          },
        },
      ],
    },
    {
      id: "read-l-sightsky-3",
      title: "Star Word Sky Champs",
      primarySkillId: "read-sight-words",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sightsky-3-01",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word very! Very, like a very fast car!" },
            options: [
              { id: "a", label: "very" },
              { id: "b", label: "van" },
              { id: "c", label: "vet" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sightsky-3-02",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: Where did my dog go? Tap the missing word!",
            },
            template: "___ did my dog go?",
            bank: [
              { id: "a", label: "Where" },
              { id: "b", label: "There" },
              { id: "c", label: "Were" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sightsky-3-03",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word there! There, like your hat is right there!" },
            options: [
              { id: "a", label: "they" },
              { id: "b", label: "then" },
              { id: "c", label: "there" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sightsky-3-04",
          type: "listenAndPick",
          payload: {
            prompt: { text: "Listen!", spokenText: "Tap the word gone! Gone, like the bird flew away and is gone!" },
            options: [
              { id: "a", label: "done" },
              { id: "b", label: "gone" },
              { id: "c", label: "got" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sightsky-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: I ate only one plum. Tap the missing word!",
            },
            template: "I ate ___ one plum.",
            bank: [
              { id: "a", label: "over" },
              { id: "b", label: "only" },
              { id: "c", label: "open" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-sightsky-3-06",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Make the sentence: Where is the frog? Tap the words in order.",
            },
            items: [
              { id: "a", label: "the" },
              { id: "b", label: "Where" },
              { id: "c", label: "frog" },
              { id: "d", label: "is" },
            ],
            correctOrder: ["b", "d", "a", "c"],
          },
        },
        {
          id: "read-e-sightsky-3-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Listen: We go there once a week. Tap the missing word!",
            },
            template: "We go there ___ a week.",
            bank: [
              { id: "a", label: "one" },
              { id: "b", label: "only" },
              { id: "c", label: "once" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-sightsky-3-08",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the same words!",
              spokenText: "Match each star word to its twin! Find the pairs that look the same.",
            },
            pairs: [
              { id: "p1", left: { label: "were" }, right: { label: "were" } },
              { id: "p2", left: { label: "done" }, right: { label: "done" } },
              { id: "p3", left: { label: "once" }, right: { label: "once" } },
            ],
          },
        },
      ],
    },
  ],
};
