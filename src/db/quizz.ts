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
      ques: "What is website deployment?",
      choose: [
        "a) Writing code for a website",
        "b) Saving your work locally",
        "c) Publishing your website online",
        "d) Designing website UI",
      ],
      ans: 2,
    },
    {
      ques: "Which is NOT a free website hosting platform?",
      choose: ["a) GitHub Pages", "b) Vercel", "c) Wix", "d) Netlify"],
      ans: 2,
    },
    {
      ques: "What does HTTPS mean?",
      choose: [
        "a) HyperText Transfer Protocol Secure",
        "b) High Text Transfer Page System",
        "c) Host Type Transfer Program System",
        "d) HyperText Tagging Protocol Secure",
      ],
      ans: 0,
    },
    {
      ques: "Why is SSL important?",
      choose: [
        "a) It speeds up your site",
        "b) It encrypts data to secure your site",
        "c) It adds animations",
        "d) It helps with SEO only",
      ],
      ans: 1,
    },
    {
      ques: "What is a domain name?",
      choose: [
        "a) A browser plugin",
        "b) A programming language",
        "c) The address of a website",
        "d) A file on your computer",
      ],
      ans: 2,
    },
    {
      ques: "Which of the following is NOT a purpose of deployment?",
      choose: [
        "a) Testing code on your local device",
        "b) Making the site available to users",
        "c) Hosting files on a web server",
        "d) Getting a live website URL",
      ],
      ans: 0,
    },
  ],
  medium: [
    {
      ques: "What is Git?",
      choose: [
        "a) A cloud hosting service",
        "b) A text editor",
        "c) A version control system",
        "d) A design tool",
      ],
      ans: 2,
    },
    {
      ques: "What does GitHub do?",
      choose: [
        "a) Hosts web servers",
        "b) Stores code and tracks changes",
        "c) Builds websites automatically",
        "d) Creates email lists",
      ],
      ans: 1,
    },
    {
      ques: "What command initializes a Git repository?",
      choose: ["a) git start", "b) git create", "c) git init", "d) git new"],
      ans: 2,
    },
    {
      ques: "What command stages all changes for commit?",
      choose: [
        "a) git commit -m",
        "b) git push",
        "c) git stage",
        "d) git add .",
      ],
      ans: 3,
    },
    {
      ques: "Which command uploads your code to GitHub?",
      choose: ["a) git fetch", "b) git pull", "c) git push", "d) git upload"],
      ans: 2,
    },
    {
      ques: "What is a repository on GitHub?",
      choose: [
        "a) A website builder",
        "b) A place to store your code and its history",
        "c) A list of HTML tags",
        "d) A network protocol",
      ],
      ans: 1,
    },
    {
      ques: "Where do you enable GitHub Pages for a project?",
      choose: [
        "a) In the Issues tab",
        "b) In the README file",
        "c) In the Settings tab",
        "d) In the Commits log",
      ],
      ans: 2,
    },
    {
      ques: "Which branch is typically used for GitHub Pages deployment?",
      choose: ["a) test", "b) main", "c) private", "d) develop"],
      ans: 1,
    },
    {
      ques: "GitHub Pages only supports which type of project?",
      choose: [
        "a) PHP + MySQL websites",
        "b) Static frontend websites (HTML/CSS/JS)",
        "c) Node.js backend APIs",
        "d) React Native apps",
      ],
      ans: 1,
    },
    {
      ques: "Which of these URLs is likely a GitHub Pages site?",
      choose: [
        "a) https://username.github.io/projectname",
        "b) http://localhost:3000",
        "c) https://myhost.dev/index.html",
        "d) http://ftp.server.com",
      ],
      ans: 0,
    },
  ],

  hard: [
    {
      ques: "What is Netlify used for?",
      choose: [
        "a) Writing JavaScript",
        "b) Storing CSS files",
        "c) Hosting and deploying frontend websites",
        "d) Running SQL databases",
      ],
      ans: 2,
    },
    {
      ques: "To connect a GitHub repo to Netlify, you must...",
      choose: [
        "a) Add a script tag",
        "b) Install Netlify CLI only",
        "c) Authorize GitHub in your Netlify account",
        "d) Use FTP",
      ],
      ans: 2,
    },
    {
      ques: "What does “continuous deployment” mean?",
      choose: [
        "a) Sites are redeployed after every GitHub push",
        "b) Code never stops running",
        "c) Website is published manually",
        "d) The browser refreshes continuously",
      ],
      ans: 0,
    },
    {
      ques: "Which folder should you deploy in a React project?",
      choose: ["a) src/", "b) public/", "c) build/", "d) node_modules/"],
      ans: 2,
    },
    {
      ques: "A common reason a deployed site shows a blank screen is:",
      choose: [
        "a) Too much CSS",
        "b) Incorrect build folder or script path",
        "c) You used HTML5",
        "d) GitHub blocked your IP",
      ],
      ans: 1,
    },
    {
      ques: "What should you check first if GitHub Pages shows 404 error?",
      choose: [
        "a) JavaScript syntax",
        "b) Your index.html location",
        "c) Page color scheme",
        "d) Favicon.ico file",
      ],
      ans: 1,
    },
    {
      ques: "What’s the best way to test your deployed site?",
      choose: [
        "a) Use only your laptop",
        "b) Check it only on mobile",
        "c) Test on different devices and browsers",
        "d) Ask a friend",
      ],
      ans: 2,
    },
    {
      ques: "How can you improve performance of your deployed site?",
      choose: [
        "a) Add background music",
        "b) Use larger images",
        "c) Minify CSS/JS and optimize images",
        "d) Use inline styles everywhere",
      ],
      ans: 2,
    },
    {
      ques: "Why is having a live website beneficial for developers?",
      choose: [
        "a) Easier to copy from others",
        "b) Shows their work to employers or clients",
        "c) Faster coding",
        "d) Improves typing speed",
      ],
      ans: 1,
    },
    {
      ques: "Which tool helps track changes in your code over time?",
      choose: ["a) VS Code", "b) Git", "c) Chrome", "d) Netlify"],
      ans: 1,
    },
    {
      ques: "What’s a recommended way to organize a deployable frontend project?",
      choose: [
        "a) Everything in one file",
        "b) Build directory for output, separate folders for assets",
        "c) Only use .txt files",
        "d) Random file structure",
      ],
      ans: 1,
    },
    {
      ques: "Which of the following is NOT required to use GitHub Pages?",
      choose: [
        "a) A GitHub account",
        "b) HTML/CSS project",
        "c) Node.js backend",
        "d) GitHub repository",
      ],
      ans: 2,
    },
    {
      ques: "Which file is usually the homepage in a deployed project?",
      choose: ["a) main.css", "b) index.html", "c) readme.md", "d) script.js"],
      ans: 1,
    },
    {
      ques: "What is the benefit of using a custom domain?",
      choose: [
        "a) Makes the site faster",
        "b) Makes your site easier to remember and more professional",
        "c) Saves disk space",
        "d) Helps write JavaScript",
      ],
      ans: 1,
    },
  ],
};
