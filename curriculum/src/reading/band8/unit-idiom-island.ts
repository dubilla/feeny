import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 8 · Idiom Island
 * Figurative language: idioms and similes mean something other than their
 * words. The literal misreading is always the fun distractor. Passages live in
 * prompt.text; spokenText reads them then asks. L1 = common kid idioms,
 * L2 = similes ("as quiet as a mouse"), L3 = pick the right saying for a
 * situation (fillBlankWordBank shines here).
 */
export const idiomIsland: UnitSeed = {
  id: "read-u-idioms",
  bandId: "reading-b8",
  title: "Idiom Island",
  icon: "🏝️",
  lessons: [
    {
      id: "read-l-idioms-1",
      title: "What It Really Means",
      primarySkillId: "read-figurative",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-idioms-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Grandpa looked at the math test and grinned.\n'This is a piece of cake,' he said.\n\nWhat does he mean?",
              spokenText:
                "Grandpa looked at the math test and grinned. This is a piece of cake, he said. What does he really mean?",
            },
            options: [
              { id: "a", label: "the test is very easy" },
              { id: "b", label: "the test is made of cake" },
              { id: "c", label: "he wants to eat cake" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-idioms-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Mom looked out the window and said,\n'It's raining cats and dogs!'\n\nWhat does she mean?",
              spokenText:
                "Mom looked out the window and said, it's raining cats and dogs! What does she really mean?",
            },
            options: [
              { id: "a", label: "pets are falling from the sky" },
              { id: "b", label: "it is raining very hard" },
              { id: "c", label: "the dog is getting wet" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-idioms-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "When Ben saw the mess, he groaned that his little sister had let the cat out of the bag. What does that mean?",
            },
            options: [
              { id: "a", label: "she told a secret" },
              { id: "b", label: "she set a real cat free" },
              { id: "c", label: "she lost her bag" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-idioms-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Before the school play, the teacher smiled and said,\n'Break a leg out there!'\n\nWhat does she mean?",
              spokenText:
                "Before the school play, the teacher smiled and said, break a leg out there! What does she really mean?",
            },
            options: [
              { id: "a", label: "go and hurt yourself" },
              { id: "b", label: "good luck!" },
              { id: "c", label: "run away quickly" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-idioms-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "It was very late, so Dad yawned and told me to 'hit the hay.'\n\nWhat does he want me to do?",
              spokenText:
                "It was very late, so Dad yawned and told me to hit the hay. What does he want me to do? Finish the sentence!",
            },
            template: "Dad wants me to go to ___.",
            bank: [
              { id: "a", label: "bed" },
              { id: "b", label: "the farm" },
              { id: "c", label: "the gym" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-idioms-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "I ran ahead down the trail.\n'Hold your horses!' Grandma called after me.\n\nWhat does she mean?",
              spokenText:
                "I ran ahead down the trail. Hold your horses! Grandma called after me. What does she really mean?",
            },
            options: [
              { id: "a", label: "go and grab a horse" },
              { id: "b", label: "run even faster" },
              { id: "c", label: "wait and slow down" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each saying to what it really means!",
              spokenText: "Tap a saying, then tap what it really means.",
            },
            pairs: [
              { id: "p1", left: { label: "piece of cake" }, right: { label: "very easy" } },
              { id: "p2", left: { label: "hit the hay" }, right: { label: "go to sleep" } },
              { id: "p3", left: { label: "hold your horses" }, right: { label: "wait" } },
            ],
          },
        },
        {
          id: "read-e-idioms-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Priya was feeling under the weather, so she stayed home from school today. What does under the weather mean?",
            },
            options: [
              { id: "a", label: "she was standing out in the rain" },
              { id: "b", label: "she was looking up at the sky" },
              { id: "c", label: "she was feeling sick" },
            ],
            correctOptionId: "c",
          },
        },
      ],
    },
    {
      id: "read-l-idioms-2",
      title: "As Quiet As a Mouse",
      primarySkillId: "read-figurative",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-idioms-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The baby was fast asleep.\nSo we were 'as quiet as a mouse.'\n\nWhat does that mean?",
              spokenText:
                "The baby was fast asleep. So we were as quiet as a mouse. What does that really mean?",
            },
            options: [
              { id: "a", label: "we squeaked a lot" },
              { id: "b", label: "we were very quiet" },
              { id: "c", label: "we turned into mice" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-idioms-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "All morning, Tom cleaned, cooked, and tidied up.\nHe was 'as busy as a bee.'\n\nWhat does that mean?",
              spokenText:
                "All morning, Tom cleaned, cooked, and tidied up. He was as busy as a bee. What does that really mean?",
            },
            options: [
              { id: "a", label: "he was buzzing loudly" },
              { id: "b", label: "he was stinging people" },
              { id: "c", label: "he was working hard and fast" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "After playing in the snow, Grandma's hands were as cold as ice. What does as cold as ice mean?",
            },
            options: [
              { id: "a", label: "her hands were made of ice" },
              { id: "b", label: "her hands were on fire" },
              { id: "c", label: "her hands were very cold" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Lin lifted the fluffy pillow with one finger.\nIt was 'as light as a feather.'\n\nWhat does that mean?",
              spokenText:
                "Lin lifted the fluffy pillow with one finger. It was as light as a feather. What does that really mean?",
            },
            options: [
              { id: "a", label: "it was full of feathers" },
              { id: "b", label: "it was very light to hold" },
              { id: "c", label: "it could fly away" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-idioms-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "The shiny new coin sparkled without a single spot.\n\nFinish the saying!",
              spokenText:
                "The shiny new coin sparkled without a single spot. Finish the saying to describe it: it was as blank as a whistle.",
            },
            template: "It was as ___ as a whistle.",
            bank: [
              { id: "a", label: "clean" },
              { id: "b", label: "loud" },
              { id: "c", label: "round" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-idioms-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Leo is 'as brave as a lion' when he tries new things.\nHe is never afraid to give it a go.\n\nWhat does that mean?",
              spokenText:
                "Leo is as brave as a lion when he tries new things. He is never afraid to give it a go. What does that really mean?",
            },
            options: [
              { id: "a", label: "he roars out loud" },
              { id: "b", label: "he has a fuzzy mane" },
              { id: "c", label: "he is very brave" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match the start of each saying to its ending!",
              spokenText: "Tap the start of a saying, then tap the ending that finishes it.",
            },
            pairs: [
              { id: "p1", left: { label: "as quiet as…" }, right: { label: "a mouse" } },
              { id: "p2", left: { label: "as busy as…" }, right: { label: "a bee" } },
              { id: "p3", left: { label: "as light as…" }, right: { label: "a feather" } },
            ],
          },
        },
        {
          id: "read-e-idioms-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Building sandcastles all day, Nina was as happy as a clam. What does as happy as a clam mean?",
            },
            options: [
              { id: "a", label: "she was very happy" },
              { id: "b", label: "she turned into a clam" },
              { id: "c", label: "she was feeling sad" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-idioms-3",
      title: "Say It Just Right",
      primarySkillId: "read-figurative",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-idioms-3-01",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Rain is pouring down in buckets outside!\n\nPick the saying that fits.",
              spokenText:
                "Rain is pouring down in buckets outside! Pick the saying that fits the blank: it's raining blank out there.",
            },
            template: "It's raining ___ out there!",
            bank: [
              { id: "a", label: "cats and dogs" },
              { id: "b", label: "socks and shoes" },
              { id: "c", label: "pots and pans" },
            ],
            correctChipId: "a",
          },
        },
        {
          id: "read-e-idioms-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Your friend is nervous just before the big show.\n\nWhich saying cheers them on?",
              spokenText:
                "Your friend is nervous just before the big show. Which saying should you use to cheer them on?",
            },
            options: [
              { id: "a", label: "'Hit the hay!'" },
              { id: "b", label: "'Hold your horses!'" },
              { id: "c", label: "'Break a leg!'" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Your little brother is running way too far ahead and you want him to wait for you. Which saying should you call out?",
            },
            options: [
              { id: "a", label: "'Piece of cake!'" },
              { id: "b", label: "'Hold your horses!'" },
              { id: "c", label: "'Break a leg!'" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-idioms-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The homework was SO easy for Mia.\nShe finished it in two minutes flat.\n\nWhich saying fits?",
              spokenText:
                "The homework was so easy for Mia. She finished it in two minutes flat. Which saying fits best?",
            },
            options: [
              { id: "a", label: "'It was a piece of cake.'" },
              { id: "b", label: "'It was a rainy day.'" },
              { id: "c", label: "'It was a sleepy mouse.'" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-idioms-3-05",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Grandpa is yawning and rubbing his eyes.\nIt is very late at night.\n\nWhat might he say?",
              spokenText:
                "Grandpa is yawning and rubbing his eyes. It is very late at night. What might he say?",
            },
            options: [
              { id: "a", label: "'Let the cat out of the bag.'" },
              { id: "b", label: "'This is a piece of cake.'" },
              { id: "c", label: "'Time to hit the hay.'" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-3-06",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Nina has a cough and a fever, so she is staying home from school today. Which saying tells how she feels?",
            },
            options: [
              { id: "a", label: "'She's as busy as a bee.'" },
              { id: "b", label: "'She spilled the beans.'" },
              { id: "c", label: "'She's under the weather.'" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-idioms-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each situation to the right saying!",
              spokenText: "Tap a situation, then tap the saying that fits it best.",
            },
            pairs: [
              { id: "p1", left: { label: "something very easy" }, right: { label: "piece of cake" } },
              { id: "p2", left: { label: "raining really hard" }, right: { label: "cats and dogs" } },
              { id: "p3", left: { label: "time for bed" }, right: { label: "hit the hay" } },
            ],
          },
        },
        {
          id: "read-e-idioms-3-08",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Sam accidentally told everyone about the surprise party.\n\nPick the saying that fits.",
              spokenText:
                "Sam accidentally told everyone about the surprise party. Pick the saying that fits the blank: oops, Sam blank about the party!",
            },
            template: "Oops, Sam ___ about the party!",
            bank: [
              { id: "a", label: "hit the hay" },
              { id: "b", label: "spilled the beans" },
              { id: "c", label: "held his horses" },
            ],
            correctChipId: "b",
          },
        },
      ],
    },
  ],
};
