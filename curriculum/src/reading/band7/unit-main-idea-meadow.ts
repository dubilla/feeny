import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 7 · Main Idea Meadow
 * Finding the main idea of a mini-passage. Passages live in prompt.text;
 * spokenText reads the passage then the question. listenAndPick keeps the
 * passage in spokenText only (audio is the stimulus).
 * L1 "what is this mostly about?" · L2 "the best title" · L3 which detail
 * belongs / does NOT belong (difficulty ramps).
 */
export const mainIdeaMeadow: UnitSeed = {
  id: "read-u-mainidea",
  bandId: "reading-b7",
  title: "Main Idea Meadow",
  icon: "🌼",
  lessons: [
    {
      id: "read-l-mainidea-1",
      title: "Mostly About",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-mainidea-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Dogs can run fast.\nDogs can bark loud.\nDogs wag their tails.\n\nThis is mostly about…",
              spokenText:
                "Dogs can run fast. Dogs can bark loud. Dogs wag their tails. What is this mostly about?",
            },
            options: [
              { id: "a", label: "cats" },
              { id: "b", label: "dogs" },
              { id: "c", label: "cars" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-mainidea-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Apples are sweet.\nBananas are yummy.\nGrapes are juicy.\n\nWhat is this mostly about?",
              spokenText:
                "Apples are sweet. Bananas are yummy. Grapes are juicy. What is this mostly about?",
            },
            options: [
              { id: "a", label: "toys" },
              { id: "b", label: "hats" },
              { id: "c", label: "fruit" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The sun is hot. The sun is bright. The sun helps plants grow big and green. What is this mostly about?",
            },
            options: [
              { id: "a", label: "the moon" },
              { id: "b", label: "the sun" },
              { id: "c", label: "the rain" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-mainidea-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Fire trucks are bright red.\nThey race to fires.\nThey spray lots of water.\n\nThis is mostly about…",
              spokenText:
                "Fire trucks are bright red. They race to fires. They spray lots of water. What is this mostly about?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚒" }, label: "fire trucks" },
              { id: "b", visual: { kind: "emoji", value: "⛵" }, label: "boats" },
              { id: "c", visual: { kind: "emoji", value: "🚲" }, label: "bikes" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-mainidea-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the story to what it's about!",
              spokenText: "Tap each little story, then tap the animal it is about.",
            },
            pairs: [
              { id: "p1", left: { label: "It hops. It has long ears." }, right: { label: "rabbit" } },
              { id: "p2", left: { label: "It flies. It has wings." }, right: { label: "bird" } },
              { id: "p3", left: { label: "It swims. It has fins." }, right: { label: "fish" } },
            ],
          },
        },
        {
          id: "read-e-mainidea-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Bees buzz all day.\nBees make sweet honey.\nBees live in a hive.\n\nFinish the sentence!",
              spokenText:
                "Bees buzz all day. Bees make sweet honey. Bees live in a hive. Finish the sentence: this story is mostly about what?",
            },
            template: "This story is about ___.",
            bank: [
              { id: "a", label: "bees" },
              { id: "b", label: "ants" },
              { id: "c", label: "birds" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-mainidea-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "We planted seeds in the dirt.\nWe pulled out the weeds.\nWe picked ripe veggies.\n\nThis is mostly about…",
              spokenText:
                "We planted seeds in the dirt. We pulled out the weeds. We picked ripe veggies. What is this mostly about?",
            },
            options: [
              { id: "a", label: "a beach" },
              { id: "b", label: "a store" },
              { id: "c", label: "a garden" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "Rain falls from the gray clouds. Rain makes big puddles. Rain helps the flowers grow. What is this mostly about?",
            },
            options: [
              { id: "a", label: "snow" },
              { id: "b", label: "wind" },
              { id: "c", label: "rain" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-mainidea-2",
      title: "The Best Title",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-mainidea-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Sam's dog loves to fetch.\nIt fetches balls and sticks.\nIt even fetches slippers!\n\nWhat is the best title?",
              spokenText:
                "Sam's dog loves to fetch. It fetches balls and sticks. It even fetches slippers! What is the best title for this story?",
            },
            options: [
              { id: "a", label: "The Fetching Dog" },
              { id: "b", label: "The Sleepy Cat" },
              { id: "c", label: "The Fast Car" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-mainidea-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "In space there are many planets.\nThere are bright, twinkling stars.\nThere is a big round moon.\n\nWhat is the best title?",
              spokenText:
                "In space there are many planets. There are bright, twinkling stars. There is a big round moon. What is the best title?",
            },
            options: [
              { id: "a", label: "At the Beach" },
              { id: "b", label: "In Space" },
              { id: "c", label: "On the Farm" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-mainidea-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "First the caterpillar was tiny. It ate and ate and grew bigger. Then it turned into a beautiful butterfly. What is the best title for this story?",
            },
            options: [
              { id: "a", label: "The Fast Car" },
              { id: "b", label: "A Rainy Day" },
              { id: "c", label: "The Growing Butterfly" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Maya loves pizza.\nShe likes extra cheese on top.\nShe eats it every Friday.\n\nWhat is the best title?",
              spokenText:
                "Maya loves pizza. She likes extra cheese on top. She eats it every Friday. What is the best title?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🍕" }, label: "Maya's Favorite Food" },
              { id: "b", visual: { kind: "emoji", value: "🚲" }, label: "Maya's New Bike" },
              { id: "c", visual: { kind: "emoji", value: "🐶" }, label: "Maya's Pet Dog" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-mainidea-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the story to its title!",
              spokenText: "Tap each little story, then tap the best title for it.",
            },
            pairs: [
              { id: "p1", left: { label: "A boy builds a sandcastle." }, right: { label: "Beach Day" } },
              { id: "p2", left: { label: "A girl plants flowers." }, right: { label: "In the Garden" } },
              { id: "p3", left: { label: "A cat chases yarn." }, right: { label: "Playful Kitten" } },
            ],
          },
        },
        {
          id: "read-e-mainidea-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The snow fell all night.\nWe made a big snowman.\nWe had a snowball fight.\n\nFinish the title!",
              spokenText:
                "The snow fell all night. We made a big snowman. We had a snowball fight. Finish the title: a blank day.",
            },
            template: "A ___ Day",
            bank: [
              { id: "a", label: "Snowy" },
              { id: "b", label: "Sunny" },
              { id: "c", label: "Rainy" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-mainidea-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Bella packed her bag.\nShe got on a big plane.\nShe flew away to see Grandma.\n\nWhat is the best title?",
              spokenText:
                "Bella packed her bag. She got on a big plane. She flew away to see Grandma. What is the best title?",
            },
            options: [
              { id: "a", label: "A Nap Time" },
              { id: "b", label: "Bella's Big Trip" },
              { id: "c", label: "Lunch at Home" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-mainidea-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "The farmer feeds the cows every morning. He collects the eggs from the hens. He drives the big red tractor. What is the best title?",
            },
            options: [
              { id: "a", label: "A Day in the City" },
              { id: "b", label: "At the Zoo" },
              { id: "c", label: "Life on the Farm" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-mainidea-3",
      title: "Which Detail Fits?",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-mainidea-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "This is a story about DOGS.\n\nWhich sentence does NOT belong?",
              spokenText:
                "This is a story about dogs. Which sentence does not belong in it?",
            },
            options: [
              { id: "a", label: "Dogs like to bark." },
              { id: "b", label: "Dogs can fetch." },
              { id: "c", label: "Cars go fast." },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "This is a story about the BEACH.\n\nWhich sentence BELONGS?",
              spokenText:
                "This is a story about the beach. Which sentence belongs in it?",
            },
            options: [
              { id: "a", label: "We did our homework." },
              { id: "b", label: "We built a sandcastle." },
              { id: "c", label: "We fed the cows." },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-mainidea-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Here is a story about winter. Snow falls softly. We wear warm coats. The ice cream truck drove by. Which sentence does not belong in the winter story?",
            },
            options: [
              { id: "a", label: "Snow falls softly." },
              { id: "b", label: "We wear warm coats." },
              { id: "c", label: "The ice cream truck drove by." },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "This is a story about SPACE.\n\nWhich sentence BELONGS?",
              spokenText:
                "This is a story about space. Which sentence belongs in it?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🚀" }, label: "The rocket flew to the moon." },
              { id: "b", visual: { kind: "emoji", value: "🐕" }, label: "The dog dug a hole." },
              { id: "c", visual: { kind: "emoji", value: "🎂" }, label: "We baked a cake." },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-mainidea-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each fact to its topic!",
              spokenText: "Tap each fact, then tap the thing it tells you about.",
            },
            pairs: [
              { id: "p1", left: { label: "It has stripes and roars." }, right: { label: "tiger" } },
              { id: "p2", left: { label: "It has wheels and a bell." }, right: { label: "bike" } },
              { id: "p3", left: { label: "It is round and juicy." }, right: { label: "apple" } },
            ],
          },
        },
        {
          id: "read-e-mainidea-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "This is a story about a birthday party.\n\nAdd the detail that fits!",
              spokenText:
                "This is a story about a birthday party. Add the detail that fits: we ate blank at the party.",
            },
            template: "We ate ___ at the party.",
            bank: [
              { id: "a", label: "cake" },
              { id: "b", label: "rocks" },
              { id: "c", label: "socks" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-mainidea-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "This is a story about FARM animals.\n\nWhich one does NOT belong?",
              spokenText:
                "This is a story about farm animals. Which one does not belong?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐄" }, label: "a cow" },
              { id: "b", visual: { kind: "emoji", value: "🐖" }, label: "a pig" },
              { id: "c", visual: { kind: "emoji", value: "🦈" }, label: "a shark" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-mainidea-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "This is a story about making soup. Which sentence belongs in it?",
            },
            options: [
              { id: "a", label: "We flew a kite." },
              { id: "b", label: "We chopped the carrots." },
              { id: "c", label: "We rode the bus." },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
