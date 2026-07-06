import type { UnitSeed } from "../../schema/pack";

/**
 * Reading Band 8 · Feelings Finder
 * Infer a character's feelings and motives from what they DO, not from a word
 * that names the feeling. Passages (2–3 sentences) live in prompt.text;
 * spokenText reads the passage then asks. Emoji faces make warm option visuals.
 * L1 = clear feelings, L2 = mixed/subtle feelings, L3 = WHY a character did it.
 */
export const feelingsFinder: UnitSeed = {
  id: "read-u-feelings",
  bandId: "reading-b8",
  title: "Feelings Finder",
  icon: "💛",
  lessons: [
    {
      id: "read-l-feelings-1",
      title: "How Do They Feel?",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-feelings-1-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Leo slammed his door and stomped up the stairs.\nHe crossed his arms and would not talk to anyone.\n\nHow does Leo feel?",
              spokenText:
                "Leo slammed his door and stomped up the stairs. He crossed his arms and would not talk to anyone. How does Leo feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😠" }, label: "angry" },
              { id: "b", visual: { kind: "emoji", value: "😊" }, label: "happy" },
              { id: "c", visual: { kind: "emoji", value: "😢" }, label: "sad" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-feelings-1-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Priya jumped up and down and hugged everyone.\nShe shouted, 'This is the best day ever!'\n\nHow does Priya feel?",
              spokenText:
                "Priya jumped up and down and hugged everyone. She shouted, this is the best day ever! How does Priya feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😢" }, label: "sad" },
              { id: "b", visual: { kind: "emoji", value: "😊" }, label: "happy" },
              { id: "c", visual: { kind: "emoji", value: "😠" }, label: "angry" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-1-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Sam's ice cream slipped and fell in the dirt. His lip trembled and a big tear rolled down his cheek. How does Sam feel?",
            },
            options: [
              { id: "a", label: "happy" },
              { id: "b", label: "surprised" },
              { id: "c", label: "sad" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-feelings-1-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "A loud crash of thunder shook the whole house.\nMia pulled the blanket over her head and hid.\n\nHow does Mia feel?",
              spokenText:
                "A loud crash of thunder shook the whole house. Mia pulled the blanket over her head and hid. How does Mia feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😊" }, label: "cheerful" },
              { id: "b", visual: { kind: "emoji", value: "😨" }, label: "scared" },
              { id: "c", visual: { kind: "emoji", value: "🥱" }, label: "bored" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-1-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Noah's eyes went wide and his mouth dropped open.\n'A puppy? For me?' he gasped.\n\nHow does Noah feel?",
              spokenText:
                "Noah's eyes went wide and his mouth dropped open. A puppy? For me? he gasped. How does Noah feel? Finish the sentence!",
            },
            template: "Noah feels ___.",
            bank: [
              { id: "a", label: "bored" },
              { id: "b", label: "angry" },
              { id: "c", label: "surprised" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-feelings-1-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The car ride went on and on and on.\nElla sighed, yawned, and stared out the window.\n\nHow does Ella feel?",
              spokenText:
                "The car ride went on and on and on. Ella sighed, yawned, and stared out the window. How does Ella feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😲" }, label: "excited" },
              { id: "b", visual: { kind: "emoji", value: "😠" }, label: "angry" },
              { id: "c", visual: { kind: "emoji", value: "🥱" }, label: "bored" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-feelings-1-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each face to its feeling!",
              spokenText: "Tap a face, then tap the feeling that matches it.",
            },
            pairs: [
              { id: "p1", left: { visual: { kind: "emoji", value: "😊" } }, right: { label: "happy" } },
              { id: "p2", left: { visual: { kind: "emoji", value: "😢" } }, right: { label: "sad" } },
              { id: "p3", left: { visual: { kind: "emoji", value: "😠" } }, right: { label: "angry" } },
            ],
          },
        },
        {
          id: "read-e-feelings-1-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Ben tripped in front of the whole class and his cheeks turned bright red. He wished he could disappear. How does Ben feel?",
            },
            options: [
              { id: "a", label: "embarrassed" },
              { id: "b", label: "cheerful" },
              { id: "c", label: "bored" },
            ],
            correctOptionId: "a",
          },
        },
      ],
    },
    {
      id: "read-l-feelings-2",
      title: "Mixed-Up Feelings",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-feelings-2-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Maya smiled and waved as she got on the bus to summer camp.\nBut she hugged her mom extra tight, and her eyes were wet.\n\nHow does Maya feel?",
              spokenText:
                "Maya smiled and waved as she got on the bus to summer camp. But she hugged her mom extra tight, and her eyes were wet. How does Maya feel?",
            },
            options: [
              { id: "a", label: "only angry" },
              { id: "b", label: "happy but also a little sad" },
              { id: "c", label: "completely bored" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-2-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Kai kept sneaking peeks at the big wrapped box.\nHe bounced in his seat and could not stop grinning.\n\nHow does Kai feel?",
              spokenText:
                "Kai kept sneaking peeks at the big wrapped box. He bounced in his seat and could not stop grinning. How does Kai feel?",
            },
            options: [
              { id: "a", visual: { kind: "emoji", value: "😲" }, label: "excited" },
              { id: "b", visual: { kind: "emoji", value: "😨" }, label: "scared" },
              { id: "c", visual: { kind: "emoji", value: "🥱" }, label: "bored" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-feelings-2-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Rosa said, I'm fine, but she turned away and her voice was very quiet. She didn't even touch her favorite snack. How does Rosa really feel?",
            },
            options: [
              { id: "a", label: "thrilled" },
              { id: "b", label: "hungry" },
              { id: "c", label: "upset" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-feelings-2-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Ted laughed out loud at the scary movie.\nBut he also hugged the pillow close and peeked through his fingers.\n\nHow does Ted feel?",
              spokenText:
                "Ted laughed out loud at the scary movie. But he also hugged the pillow close and peeked through his fingers. How does Ted feel?",
            },
            options: [
              { id: "a", label: "totally bored" },
              { id: "b", label: "having fun but also a bit scared" },
              { id: "c", label: "very angry" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-2-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Amina finished last in the race.\nEven so, she was smiling and cheering loudly for her friends.\n\nHow does Amina feel toward her friends?",
              spokenText:
                "Amina finished last in the race. Even so, she was smiling and cheering loudly for her friends. How does Amina feel toward her friends? Finish the sentence!",
            },
            template: "Amina feels ___ for her friends.",
            bank: [
              { id: "a", label: "jealous" },
              { id: "b", label: "angry" },
              { id: "c", label: "happy" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-feelings-2-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Jon loved the gift he had asked for.\nBut his smile faded when he saw his sister got a bigger one.\n\nHow does Jon feel now?",
              spokenText:
                "Jon loved the gift he had asked for. But his smile faded when he saw his sister got a bigger one. How does Jon feel now?",
            },
            options: [
              { id: "a", label: "jealous" },
              { id: "b", label: "thrilled" },
              { id: "c", label: "sleepy" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-feelings-2-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match each clue to the feeling!",
              spokenText: "Tap a clue about what someone did, then tap the feeling it shows.",
            },
            pairs: [
              { id: "p1", left: { label: "hugging mom extra tight" }, right: { label: "nervous" } },
              { id: "p2", left: { label: "peeking at a wrapped gift" }, right: { label: "excited" } },
              { id: "p3", left: { label: "arms crossed, won't talk" }, right: { label: "upset" } },
            ],
          },
        },
        {
          id: "read-e-feelings-2-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Dev's team lost the big game. Even so, he shook hands with the other team and said good game with a real smile. How does Dev feel?",
            },
            options: [
              { id: "a", label: "furious" },
              { id: "b", label: "proud and okay about it" },
              { id: "c", label: "terrified" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
    {
      id: "read-l-feelings-3",
      title: "But Why?",
      primarySkillId: "read-inference",
      xpReward: 10,
      exercises: [
        {
          id: "read-e-feelings-3-01",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Zoe gave her umbrella to a shivering stray dog.\nThen she walked the whole way home in the rain.\n\nWhy did Zoe give away her umbrella?",
              spokenText:
                "Zoe gave her umbrella to a shivering stray dog. Then she walked the whole way home in the rain. Why did Zoe give away her umbrella?",
            },
            options: [
              { id: "a", label: "to keep the dog cold" },
              { id: "b", label: "she felt kind and wanted to help" },
              { id: "c", label: "she hated her umbrella" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-3-02",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "Marcus quietly found his little brother's lost teddy bear.\nHe set it on his brother's pillow before bedtime.\n\nWhy did Marcus do this?",
              spokenText:
                "Marcus quietly found his little brother's lost teddy bear. He set it on his brother's pillow before bedtime. Why did Marcus do this?",
            },
            options: [
              { id: "a", label: "to surprise and cheer up his brother" },
              { id: "b", label: "to make his brother cry" },
              { id: "c", label: "to hide the bear forever" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-feelings-3-03",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Lila does not like carrots one bit, but she ate every one on her plate. Grandma had cooked them just for her. Why did Lila eat the carrots?",
            },
            options: [
              { id: "a", label: "she was still very hungry" },
              { id: "b", label: "she didn't want to hurt Grandma's feelings" },
              { id: "c", label: "carrots are her favorite" },
            ],
            correctOptionId: "b",
          },
        },
        {
          id: "read-e-feelings-3-04",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "During the spelling test, Sam curled his arm around his paper.\nHe leaned away from the kid sitting next to him.\n\nWhy did Sam cover his paper?",
              spokenText:
                "During the spelling test, Sam curled his arm around his paper. He leaned away from the kid sitting next to him. Why did Sam cover his paper?",
            },
            options: [
              { id: "a", label: "his arm felt cold" },
              { id: "b", label: "he wanted to take a nap" },
              { id: "c", label: "so no one could copy his answers" },
            ],
            correctOptionId: "c",
          },
        },
        {
          id: "read-e-feelings-3-05",
          type: "fillBlankWordBank",
          payload: {
            prompt: {
              text: "Nadia practiced the piano every single day for a whole month.\nHer big show was coming up soon.\n\nWhy did she practice so much?",
              spokenText:
                "Nadia practiced the piano every single day for a whole month. Her big show was coming up soon. Why did she practice so much? Finish the sentence!",
            },
            template: "Nadia practiced so much because she wanted to ___.",
            bank: [
              { id: "a", label: "break the piano" },
              { id: "b", label: "fall asleep" },
              { id: "c", label: "do a great job" },
            ],
            correctChipId: "c",
          },
        },
        {
          id: "read-e-feelings-3-06",
          type: "multipleChoiceImage",
          payload: {
            prompt: {
              text: "The new kid had nothing to eat at lunch.\nOwen quietly split his sandwich in half and shared it.\n\nWhy did Owen share his lunch?",
              spokenText:
                "The new kid had nothing to eat at lunch. Owen quietly split his sandwich in half and shared it. Why did Owen share his lunch?",
            },
            options: [
              { id: "a", label: "to be kind and make a friend" },
              { id: "b", label: "he was not hungry at all" },
              { id: "c", label: "he didn't like his sandwich" },
            ],
            correctOptionId: "a",
          },
        },
        {
          id: "read-e-feelings-3-07",
          type: "tapMatchPairs",
          payload: {
            prompt: {
              text: "Match what they did to WHY they did it!",
              spokenText: "Tap what a person did, then tap the reason why they did it.",
            },
            pairs: [
              { id: "p1", left: { label: "gave away her umbrella" }, right: { label: "to help" } },
              { id: "p2", left: { label: "hid behind the couch" }, right: { label: "to surprise" } },
              { id: "p3", left: { label: "practiced every day" }, right: { label: "to improve" } },
            ],
          },
        },
        {
          id: "read-e-feelings-3-08",
          type: "listenAndPick",
          payload: {
            prompt: {
              text: "Listen closely!",
              spokenText:
                "Theo turned off the TV and put away all his toys before his tired mom even asked. Why did Theo clean up on his own?",
            },
            options: [
              { id: "a", label: "to break his toys" },
              { id: "b", label: "to make his tired mom happy" },
              { id: "c", label: "because he was bored" },
            ],
            correctOptionId: "b",
          },
        },
      ],
    },
  ],
};
