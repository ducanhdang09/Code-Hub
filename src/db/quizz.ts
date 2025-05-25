import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image?: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques: 'What is the plural form of "child"?',
      choose: ["a) childs", "b) child's' ", "c) children's'", "d) children"],
      ans: 3,
    },
    {
      ques: "She _____ to school every day.",
      choose: ["	a) go", "	b) goes", "c) going", "	d) gone"],
      ans: 1,
    },
    {
      ques: "Which sentence is correct?",
      choose: ["a. Their going to the beach.", "b. They're going to the beach.", "c. There going to the beach.", 'd. Theres going to the beach.'],
      ans: 1,
    },
    {
      ques: "What is the correct form of the adjective 'big' for a comparison with more than one object?",
      choose: [
        "a. big",
        "b. bigger",
        "c. biggest",
        'd. more big'
      ],
      ans: 2,
    },
    {
      ques: "Which sentence is grammatically correct?",
      choose: ["a. She don't like pizza.", "b. She doesn't like pizza.", "c. She don't likes pizza.", "d. She not like pizza."],
      ans: 1,
    },
    {
      ques: "Which sentence is grammatically correct??",
      choose: [
        "a. Me and my friend went to the park.",
        "b. My friend and I went to the park.",
        "c. My friend and me went to the park.",
        'd. Me went to the park with my friend.'
      ],
      ans: 1,
    },
    {
      ques: "'What is the correct preposition in the following sentence? 'I'm going _____ the store.'",
      choose: [
        "a. at",
        "b. in",
        "c. on",
        'd.to'
      ],
      ans: 3,
    },
    {
      ques: "What is the correct form of the verb 'to be' in the present tense, third person singular?",
      choose: ["a. am", "b. is", "c. are", 'd.be'],
      ans: 1,
    },
  ],
  medium: [
    {
      ques: "Which sentence is correct?",
      choose: [
        "a. I have never been to France.",
        "b. I have never went to France.",
        "c. I never have been to France.",
        'd. I never went to France.'
      ],
      ans: 0,
    },
    {
      ques: "What is the correct form of the verb 'to be' in the future tense, third person singular?",
      choose: ["a. will be", "b. is going to be", "c. will have been", 'd. is being'],
      ans: 1,
    },
    {
      ques: "Which sentence is correct?",
      choose: [
        "a. She can sings well.",
        "b. She can sing well.",
        "c. She can singing well.",
        'd. She can to sing well.'
      ],
      ans: 1,
    },
    {
      ques: "Choose the correct word: I _____ a book.'",
      choose: [
        "a. reads",
        "b. reading",
        "c. read",
        'd. to read'
      ],
      ans: 2,
    },
    {
      ques: "Which sentence is correct?",
      choose: ["a. He don't like coffee.", "b. He doesn't like coffee.", "c. He don't likes coffee.", 'd. He not like coffee.'],
      ans: 1,
    },
  ],
  hard: [
    {
      ques: "Choose the correct question: '_____ you like tea?'",
      choose: [
        "a. Do",
        "b. Does",
        "c. Are",
        'd. Is'
      ],
      ans: 0,
    },
    {
      ques: "Which sentence is correct?",
      choose: ["a. I am going to the store.", "b. I am go to the store.", "c. I going to the store.", 'd. I goes to the store.'],
      ans: 0,
    },
    {
      ques: "Choose the correct word: 'She _____ a teacher'",
      choose: ["a. am", "b. is", "c. are", 'd.be'],
      ans: 1,
    },
    {
      ques: "Which sentence is correct?",
      choose: ["a. They is my friends.", "b. They are my friends.", "c. They am my friends.", 'd. They be my friends.'],
      ans: 1,
    },
    {
      ques: "Choose the correct word: 'I _____ a student.'",
      choose: ["a. am", "b. is", "c. are", 'd.be'],
      ans: 0,
    },
    {
      ques: "Which sentence is correct?",
      choose:["a. She can to swim.", "b. She can swim.", "c. She can swimming.", 'd.She can swims.'],
      ans: 1,
    },
    {
      ques: "Choose the correct question: '_____ she like music?'",
      choose: [
        "a. do",
        "b. does",
        "c. is",
        'd. are'
      ],
      ans: 1,
    },
    {
      ques: "Which sentence is correct?",
      choose: [
        "a. I have two brothers.",
        "b. I have two brother.",
        "c. I has two brothers.",
        'd. I have two brotheres.'
      ],
      ans: 0,
    },
    {
      ques: "Choose the correct word: 'They _____ in the park.'",
      choose: ["a. am", "b. is", "c. are", 'd.be'],
      ans: 2,
    },
  
  ],
};
