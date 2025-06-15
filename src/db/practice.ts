import { ImageSourcePropType } from "react-native";

export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: ["T", "O", "R", "T", "O", "I", "S", "E"],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  medium: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: [
        "S",
        "U",
        "L",
        "C",
        "A",
        "T",
        "A",
        " ",
        "T",
        "O",
        "R",
        "T",
        "O",
        "I",
        "S",
        "E",
      ],
    },
    // {
    //   ques:"Question 1: : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  hard: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: [
        "S",
        "U",
        "L",
        "C",
        "A",
        "T",
        "A",
        " ",
        "T",
        "O",
        "R",
        "T",
        "O",
        "I",
        "S",
        "E",
      ],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
};
export type Exercise = {
  title: string;
  description: string;
  image: string | ImageSourcePropType;
  content?: string[];
};

export const excercises: Exercise[] = [
  {
    title: "Practice 1: Deploy a Static Website with GitHub Pages",
    description: "Goal: Deploy a simple HTML/CSS website to GitHub Pages.",
    image: "",
    content: [
      "1. Create a basic website (e.g., index.html, style.css).",
      "2. Push the project to a public GitHub repository.",
      "3. Go to Settings > Pages, select the main branch and the / (root) folder.",
      "4. Save and access your live site at: https://your-username.github.io/project-name/",
    ],
  },
  {
    title: "Practice 2: Deploy a React App with Netlify",
    description: "Goal: Deploy a React application using Netlify.",
    image: "",
    content: [
      "1. Create a React project using create-react-app.",
      "2. Run npm run build to generate the build folder.",
      "3. Push the project to GitHub.",
      "4. Go to Netlify.com, sign in, and connect your GitHub repo.",
      "5. Select the repo, set the build command (npm run build) and publish folder (build).",
      "6. Deploy and share the live URL Netlify provides.",
    ],
  },
  {
    title: "Practice 3: Use a Custom Domain with Vercel",
    description: "Goal: Deploy a project and attach a custom domain.",
    image: "",
    content: [
      "1. Push any frontend project to GitHub.",
      "2. Log in to Vercel.com and import the GitHub repo.",
      "3. Deploy the project.",
      "4. Go to Settings > Domains in Vercel and add your custom domain (from Namecheap, GoDaddy, etc.).",
      "5. Follow DNS instructions to point the domain to Vercel.",
    ],
  },
];
