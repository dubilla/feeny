import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 5 · Story Time
 * Tiny read-it-yourself passages with who/what/where/color/feeling questions.
 * The passage lives in prompt.text; spokenText is only encouragement + the
 * question (never the passage — reading it is the whole point).
 * Passage length ramps from two lines (L1) to three lines (L3).
 */
export const storyTime: UnitSeed = {
  id: "read-u-stories",
  bandId: "reading-b5",
  title: "Story Time",
  icon: "📖",
  lessons: [
    {
      id: "read-l-stories-1",
      title: "Read It Yourself",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-stories-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Sam has a red hat.\nThe hat is big.\n\nWhat does Sam have?",
              spokenText: "Read the little story all by yourself! Then tap: what does Sam have?",
            },
            options: [
              { id: "a", label: "a hat" },
              { id: "b", label: "a cap" },
              { id: "c", label: "a bag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-stories-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The cat sat on a mat.\nIt had a nap.\n\nWho sat on the mat?",
              spokenText: "You can read this one! Then tap: who sat on the mat?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐕" }, label: "the dog" },
              { id: "b", visual: { kind: "emoji", value: "🐈" }, label: "the cat" },
              { id: "c", visual: { kind: "emoji", value: "🐷" }, label: "the pig" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-stories-1-03",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ben is on a ship.\nThe ship is red.\n\nWhat color is the ship?",
              spokenText: "Read the story, then tap: what color is the ship?",
            },
            options: [
              { id: "a", label: "green" },
              { id: "b", label: "blue" },
              { id: "c", label: "red" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-stories-1-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "wet" },
              { id: "w2", label: "dog" },
              { id: "w3", label: "The" },
              { id: "w4", label: "is" },
            ],
            correctOrder: ["w3", "w2", "w4", "w1"],
          },
        },
        {
          id: "read-e-stories-1-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Jen has a fish.\nThe fish is in a tub.\n\nWhere is the fish?",
              spokenText: "Read the little story! Then tap: where is the fish?",
            },
            options: [
              { id: "a", label: "in a tub" },
              { id: "b", label: "on a bed" },
              { id: "c", label: "in a bag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-stories-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Max sat in the hot sun.\nMax got hot!\n\nHow does Max feel?",
              spokenText: "Read it yourself, then tap: how does Max feel?",
            },
            options: [
              { id: "a", label: "sad" },
              { id: "b", label: "hot" },
              { id: "c", label: "cold" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-stories-1-07",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Finish the sentence!",
              spokenText: "Read the words, then pick the best one. A fish can... what?",
            },
            template: "A fish can ___.",
            bank: [
              { id: "a", label: "hop" },
              { id: "b", label: "sing" },
              { id: "c", label: "swim" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-stories-1-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Pam ran to the shop.\nShe got a bun.\n\nWhere did Pam go?",
              spokenText: "Read the little story! Then tap: where did Pam go?",
            },
            options: [
              { id: "a", label: "to the vet" },
              { id: "b", label: "to the shop" },
              { id: "c", label: "to the park" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-stories-2",
      title: "Bigger Stories",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-stories-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Tom has a dog.\nThe dog can dig.\nIt dug a big pit!\n\nWhat can the dog do?",
              spokenText: "This story has three lines! Read it, then tap: what can the dog do?",
            },
            options: [
              { id: "a", label: "dig" },
              { id: "b", label: "sing" },
              { id: "c", label: "swim" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-stories-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Liz got on the bus.\nThe bus was big and red.\nLiz sat with Sam.\n\nWho sat with Liz?",
              spokenText: "Read the story all by yourself! Then tap: who sat with Liz?",
            },
            options: [
              { id: "a", label: "Ben" },
              { id: "b", label: "Mom" },
              { id: "c", label: "Sam" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-stories-2-03",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Put the words in order to make a sentence! The capital letter goes first.",
            },
            items: [
              { id: "w1", label: "swim" },
              { id: "w2", label: "The" },
              { id: "w3", label: "can" },
              { id: "w4", label: "fish" },
            ],
            correctOrder: ["w2", "w4", "w3", "w1"],
          },
        },
        {
          id: "read-e-stories-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The hen sat on the nest.\nShe sat and sat.\nOut came a chick!\n\nWho came out?",
              spokenText: "Read the little story! Then tap: who came out?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" }, label: "a pup" },
              { id: "b", visual: { kind: "emoji", value: "🐥" }, label: "a chick" },
              { id: "c", visual: { kind: "emoji", value: "🦆" }, label: "a duck" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-stories-2-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Dan got in the tub.\nThe tub had lots of suds.\nDan got so wet!\n\nWhere was Dan?",
              spokenText: "Read it yourself, super reader! Then tap: where was Dan?",
            },
            options: [
              { id: "a", label: "in a ship" },
              { id: "b", label: "in the tub" },
              { id: "c", label: "at the shop" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-stories-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Ben is sad.\nHis cup fell.\n\nFinish the sentence!",
              spokenText: "Read the little story, then finish the sentence. Ben is... what?",
            },
            template: "Ben is ___.",
            bank: [
              { id: "a", label: "sad" },
              { id: "b", label: "big" },
              { id: "c", label: "wet" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-stories-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Meg ran in the rain.\nShe had lots of fun.\nMeg was glad!\n\nHow did Meg feel?",
              spokenText: "Read the story! Then tap: how did Meg feel?",
            },
            options: [
              { id: "a", label: "mad" },
              { id: "b", label: "sad" },
              { id: "c", label: "glad" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-stories-2-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "A frog sat on a log.\nA bug came by.\nZap! The frog ate the bug.\n\nWhat did the frog eat?",
              spokenText: "Read the frog's story! Then tap: what did the frog eat?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐞" }, label: "the bug" },
              { id: "b", visual: { kind: "emoji", value: "🪵" }, label: "the log" },
              { id: "c", visual: { kind: "emoji", value: "🐟" }, label: "a fish" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-stories-3",
      title: "Story Champ",
      primarySkillId: "read-passages",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-stories-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Kim went to the pond.\nShe fed the ducks.\nThe ducks said quack, quack!\n\nWhere did Kim go?",
              spokenText: "Read the story all by yourself! Then tap: where did Kim go?",
            },
            options: [
              { id: "a", label: "to the shop" },
              { id: "b", label: "to the den" },
              { id: "c", label: "to the pond" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-stories-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Rex the dog lost his ball.\nHe dug in the sand.\nHe found it at last!\n\nWhat did Rex lose?",
              spokenText: "Read Rex's story! Then tap: what did Rex lose?",
            },
            options: [
              { id: "a", label: "his ball" },
              { id: "b", label: "his hat" },
              { id: "c", label: "his dish" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-stories-3-03",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Tim has a red sled.\nHe zips down the hill!\n\nFinish the sentence!",
              spokenText: "Read the story, then finish it. Tim zips down the... what?",
            },
            template: "Tim zips down the ___.",
            bank: [
              { id: "a", label: "hat" },
              { id: "b", label: "hill" },
              { id: "c", label: "bed" },
            ],
            correctChipId: "b",
          },
        },
        {
          id: "read-e-stories-3-04",
          type: "ordering",
          payload: {
            prompt: {
              text: "Make the sentence!",
              spokenText: "Five words this time! Put them in order to make a sentence.",
            },
            items: [
              { id: "w1", label: "run" },
              { id: "w2", label: "The" },
              { id: "w3", label: "can" },
              { id: "w4", label: "big" },
              { id: "w5", label: "dog" },
            ],
            correctOrder: ["w2", "w4", "w5", "w3", "w1"],
          },
        },
        {
          id: "read-e-stories-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Jill had a shell.\nThe shell was pink.\nShe put it in a box.\n\nWhat color was the shell?",
              spokenText: "Read the little story! Then tap: what color was the shell?",
            },
            options: [
              { id: "a", label: "red" },
              { id: "b", label: "black" },
              { id: "c", label: "pink" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-stories-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The bus was late.\nMax had to wait and wait.\nMax got mad!\n\nHow did Max feel?",
              spokenText: "Read the story yourself! Then tap: how did Max feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😠" }, label: "mad" },
              { id: "b", visual: { kind: "emoji", value: "😊" }, label: "glad" },
              { id: "c", visual: { kind: "emoji", value: "😢" }, label: "sad" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-stories-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Beth got a big box.\nIn the box was a pup!\nBeth hugged the pup.\n\nWhat was in the box?",
              spokenText: "Read the story! Then tap: what was in the box?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐈" }, label: "a cat" },
              { id: "b", visual: { kind: "emoji", value: "🐶" }, label: "a pup" },
              { id: "c", visual: { kind: "emoji", value: "🦆" }, label: "a duck" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-stories-3-08",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Nick put on his hat.\nHe made a snowman.\nBrr, it was so cold!\n\nWhat did Nick make?",
              spokenText: "Last story — you can do it! Read it, then tap: what did Nick make?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🎂" }, label: "a cake" },
              { id: "b", visual: { kind: "emoji", value: "🚢" }, label: "a ship" },
              { id: "c", visual: { kind: "emoji", value: "⛄" }, label: "a snowman" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
  ],
};
