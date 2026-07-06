import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 7 · Story Sleuths
 * Mini-passages (2–3 short sentences) with literal comprehension questions.
 * The passage lives in prompt.text; spokenText reads the whole passage AND
 * the question aloud so a non-reader can still solve it. listenAndPick keeps
 * the passage in spokenText only (audio is the stimulus) with a short prompt.
 * L1 who/what · L2 where/when · L3 why/how (difficulty ramps).
 */
export const storySleuths: UnitSeed = {
  id: "read-u-sleuth",
  bandId: "reading-b7",
  title: "Story Sleuths",
  icon: "🕵️",
  lessons: [
    {
      id: "read-l-sleuth-1",
      title: "Who & What",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sleuth-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Milo the puppy found a red ball.\nHe ran across the yard with it.\n\nWho found the ball?",
              spokenText:
                "Milo the puppy found a red ball. He ran across the yard with it. Who found the ball?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🐶" }, label: "the puppy" },
              { id: "b", visual: { kind: "emoji", value: "🐱" }, label: "the cat" },
              { id: "c", visual: { kind: "emoji", value: "🦆" }, label: "the duck" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sleuth-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ava was hungry.\nShe made a big cheese sandwich.\n\nWhat did Ava make?",
              spokenText:
                "Ava was hungry. She made a big cheese sandwich. What did Ava make?",
            },
            options: [
              { id: "a", label: "a salad" },
              { id: "b", label: "a cake" },
              { id: "c", label: "a sandwich" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sleuth-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "A green frog sat by the pond. He caught a buzzing fly with his long tongue. What did the frog catch?",
            },
            options: [
              { id: "a", label: "a fish" },
              { id: "b", label: "a fly" },
              { id: "c", label: "a leaf" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ben and Zoe played on the swings.\nThen they went down the slide.\n\nWhat did they go down?",
              spokenText:
                "Ben and Zoe played on the swings. Then they went down the slide. What did they go down?",
            },
            options: [
              { id: "a", label: "the swings" },
              { id: "b", label: "the slide" },
              { id: "c", label: "the steps" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-1-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match who did what!",
              spokenText:
                "Sleuth time! Tap each name, then tap what they had in the story.",
            },
            pairs: [
              { id: "p1", left: { label: "Milo" }, right: { label: "a ball" } },
              { id: "p2", left: { label: "Ava" }, right: { label: "a sandwich" } },
              { id: "p3", left: { label: "the frog" }, right: { label: "a fly" } },
            ],
          },
        },
        {
          id: "read-e-sleuth-1-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "A little ant lifted a crumb.\nIt was so strong!\n\nFinish the sentence!",
              spokenText:
                "A little ant lifted a crumb. It was so strong! Finish the sentence: the ant lifted a what?",
            },
            template: "The ant lifted a ___.",
            bank: [
              { id: "a", label: "crumb" },
              { id: "b", label: "leaf" },
              { id: "c", label: "rock" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sleuth-1-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Luna floated up in her rocket.\nShe saw a bright star and waved.\n\nWho saw the star?",
              spokenText:
                "Luna floated up in her rocket. She saw a bright star and waved. Who saw the star?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🤖" }, label: "a robot" },
              { id: "b", visual: { kind: "emoji", value: "👽" }, label: "an alien" },
              { id: "c", visual: { kind: "emoji", value: "🧑‍🚀" }, label: "Luna" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sleuth-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "Sam packed his bag with a bucket and a towel. Then he headed to the sea. What did Sam pack his bag for?",
            },
            options: [
              { id: "a", label: "the beach" },
              { id: "b", label: "the park" },
              { id: "c", label: "school" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-sleuth-2",
      title: "Where & When",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sleuth-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The picnic was in the park.\nGrandpa spread a big blanket under a tree.\n\nWhere was the picnic?",
              spokenText:
                "The picnic was in the park. Grandpa spread a big blanket under a tree. Where was the picnic?",
            },
            options: [
              { id: "a", label: "in the park" },
              { id: "b", label: "at home" },
              { id: "c", label: "at school" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sleuth-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "After breakfast, Nina rode her bike.\nShe rode all around the block.\n\nWhen did Nina ride her bike?",
              spokenText:
                "After breakfast, Nina rode her bike. She rode all around the block. When did Nina ride her bike?",
            },
            options: [
              { id: "a", label: "before school" },
              { id: "b", label: "at night" },
              { id: "c", label: "after breakfast" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sleuth-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The three kittens curled up in a warm basket by the fire. They slept all afternoon. Where did the kittens sleep?",
            },
            options: [
              { id: "a", label: "in a box" },
              { id: "b", label: "in a basket" },
              { id: "c", label: "on a bed" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The rocket zoomed far away.\nThe astronauts bounced on the gray dust.\n\nWhere did the rocket go?",
              spokenText:
                "The rocket zoomed far away. The astronauts bounced on the gray dust. Where did the rocket go?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "☀️" }, label: "to the sun" },
              { id: "b", visual: { kind: "emoji", value: "🌊" }, label: "to the sea" },
              { id: "c", visual: { kind: "emoji", value: "🌕" }, label: "to the moon" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sleuth-2-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the place to what you do there!",
              spokenText: "Tap each place, then tap what you do there.",
            },
            pairs: [
              { id: "p1", left: { label: "park" }, right: { label: "picnic" } },
              { id: "p2", left: { label: "pool" }, right: { label: "swim" } },
              { id: "p3", left: { label: "bed" }, right: { label: "sleep" } },
            ],
          },
        },
        {
          id: "read-e-sleuth-2-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Buzz the bee flew home.\nAll the other bees were there too.\n\nFinish the sentence!",
              spokenText:
                "Buzz the bee flew home. All the other bees were there too. Finish the sentence: the bee flew to the what?",
            },
            template: "The bee flew to the ___.",
            bank: [
              { id: "a", label: "hive" },
              { id: "b", label: "nest" },
              { id: "c", label: "web" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sleuth-2-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Zoe woke up early.\nThe sun was just coming up.\n\nWhen did Zoe wake up?",
              spokenText:
                "Zoe woke up early. The sun was just coming up. When did Zoe wake up?",
            },
            options: [
              { id: "a", label: "at night" },
              { id: "b", label: "in the morning" },
              { id: "c", label: "at lunch" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "A tiny crab hid under a smooth rock on the sandy beach. The waves rolled past. Where did the crab hide?",
            },
            options: [
              { id: "a", label: "under a rock" },
              { id: "b", label: "in a tree" },
              { id: "c", label: "in the waves" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-sleuth-3",
      title: "Why & How",
      primarySkillId: "read-comprehension",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-sleuth-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Pip the puppy hid under the bed.\nThe loud thunder had scared him.\n\nWhy did Pip hide?",
              spokenText:
                "Pip the puppy hid under the bed. The loud thunder had scared him. Why did Pip hide?",
            },
            options: [
              { id: "a", label: "he was hungry" },
              { id: "b", label: "the thunder scared him" },
              { id: "c", label: "he was sleepy" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Maya built a tall tower.\nShe stacked the blocks one by one.\n\nHow did Maya build the tower?",
              spokenText:
                "Maya built a tall tower. She stacked the blocks one by one. How did Maya build the tower?",
            },
            options: [
              { id: "a", label: "she stacked blocks" },
              { id: "b", label: "she used glue" },
              { id: "c", label: "she drew it" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sleuth-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "The little plants looked dry and droopy, so Leo gave them water. Soon they grew tall and green. Why did Leo give the plants water?",
            },
            options: [
              { id: "a", label: "they were dry" },
              { id: "b", label: "they were cold" },
              { id: "c", label: "they were big" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-sleuth-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The ants worked hard all day.\nThey wanted food saved up for winter.\n\nWhy did the ants store food?",
              spokenText:
                "The ants worked hard all day. They wanted food saved up for winter. Why did the ants store food?",
            },
            options: [
              { id: "a", label: "for a party" },
              { id: "b", label: "for winter" },
              { id: "c", label: "for fun" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-sleuth-3-05",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the problem to what helps!",
              spokenText: "Tap each way you feel, then tap what would help.",
            },
            pairs: [
              { id: "p1", left: { label: "hungry" }, right: { label: "eat" } },
              { id: "p2", left: { label: "sleepy" }, right: { label: "nap" } },
              { id: "p3", left: { label: "cold" }, right: { label: "coat" } },
            ],
          },
        },
        {
          id: "read-e-sleuth-3-06",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The star was far, far away.\nNate used a telescope to see it up close.\n\nFinish the sentence!",
              spokenText:
                "The star was far, far away. Nate used a telescope to see it up close. Finish the sentence: Nate saw the star with a what?",
            },
            template: "Nate saw the star with a ___.",
            bank: [
              { id: "a", label: "telescope" },
              { id: "b", label: "spoon" },
              { id: "c", label: "hat" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-sleuth-3-07",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "A frog wanted to cross a log.\nIt pushed with its strong back legs.\n\nHow did the frog get over the log?",
              spokenText:
                "A frog wanted to cross a log. It pushed with its strong back legs. How did the frog get over the log?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "🌊" }, label: "it swam" },
              { id: "b", visual: { kind: "emoji", value: "🦋" }, label: "it flew" },
              { id: "c", visual: { kind: "emoji", value: "🐸" }, label: "it jumped" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-sleuth-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Put on your listening ears!",
              spokenText:
                "Sara shared her cookies with Tom because he had forgotten his snack at home. Tom smiled and said thank you. Why did Sara share her cookies?",
            },
            options: [
              { id: "a", label: "Tom forgot his snack" },
              { id: "b", label: "Tom was her brother" },
              { id: "c", label: "Tom was sleeping" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
  ],
};
