import { ImageSourcePropType } from "react-native";
import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const basic: IData[] = [
  {
    id: 1,
    image: require("../assets/tech1.png"),
    title: "Lesson 1: Introduction to Web Development",
    description:
      "In this lesson, students will be introduced to the fundamentals of web development. We'll explore what web development is, the different roles involved (such as front-end, back-end, and full-stack development), and the technologies that power modern websites. Learners will gain an overview of how websites work, the structure of the web (clients, servers, browsers), and the basic tools used in web development. This lesson lays the groundwork for understanding how web pages are created and delivered across the internet.",
    videoUrl: "https://youtu.be/GHUe4m9s6Zk?si=gR_K4sMPU4b3bkGo",
    content: [
      "Learn what web development is, its roles and real-world applications",
      "Understand the difference between front-end and back-end development",
      "Get familiar with the three core languages: HTML, CSS, and JavaScript",
      "Understand how websites work through the client-server model",
      "Choose and use popular development tools suitable for beginners",
    ],
  },
  {
    id: 2,
    image: require("../assets/tech2.png"),
    title: "Lesson 2: Basic HTML - Advanced HTML ",
    description:
      "Basic HTML introduces you to the fundamental building blocks of web pages. You’ll learn to create simple, structured documents using essential tags like headings, paragraphs, links, images, and lists. This foundation helps you understand how browsers interpret HTML and display content.",
    videoUrl: "",
    content: [
      "Document structure with <html>, <head>, and <body>",
      "Text formatting using headings (<h1> to <h6>) and paragraphs (<p>)",
      "Adding links with <a> and images with <img>",
      "Creating ordered and unordered lists (<ol>, <ul>, <li>)",
      "Basic use of attributes like href and alt",
    ],
  },
  {
    id: 3,
    image: require("../assets/tech3.png"),
    title: "Lesson 3: Basic CSS - Advanced CSS",
    description:
      "Basic CSS focuses on the essentials of styling web pages. You’ll learn how to apply colors, fonts, spacing, and simple layouts to HTML elements, helping you make your pages visually appealing and easier to read.",
    videoUrl: "",
    content: [
      "CSS syntax: selectors, properties, and values",
      "Applying styles with inline, internal, and external CSS",
      "Text styling: color, font-family, font-size, font-weight, and text alignment",
      "The box model: margin, border, padding, and content",
      "Background colors and images",
      "Basic layout techniques using display and positioning",
      "Using classes and IDs to target elements",
    ],
  },
  {
    id: 4,
    image: require("../assets/tech4.png"),
    title: "Lesson 4 : Flexbox & Responsive Design",
    description:
      "In this lesson, you will learn how to build flexible, adaptable layouts using CSS Flexbox and create websites that look great on any device through responsive design techniques.",
    videoUrl: "",
    content: [
      "Understanding the CSS Flexbox model: containers and items",
      "Flexbox properties for containers: display: flex;, flex-direction, justify-content, align-items, flex-wrap",
      "Flexbox properties for items: flex-grow, flex-shrink, flex-basis, order, and align-self",
      "Creating horizontal and vertical layouts with ease",
      "Building flexible navigation bars, card layouts, and grids",
      "Introduction to responsive design principles",
      "Using media queries to apply different styles based on screen size",
      "Mobile-first design approach for better performance and usability",
      "Practical examples of responsive Flexbox layouts",
    ],
  },
  {
    id: 5,
    image: require("../assets/tech5.png"),
    title: "Lesson 5: Overall Summary: Web Development Fundamentals",
    description:
      " Starting with Basic HTML, you learn how to structure web pages using essential tags like headings, paragraphs, links, and images. Moving to Advanced HTML, you explore semantic elements, forms, multimedia embedding, and accessibility enhancements to build richer, more meaningful webpages. In Basic CSS, you gain skills to style these HTML structures—setting colors, fonts, spacing, and simple layouts—while Advanced CSS introduces powerful tools like Flexbox, Grid, animations, and responsive design techniques to create dynamic, adaptable, and polished interfaces. The Flexbox & Responsive Design lesson ties these skills together, teaching you how to build flexible layouts that adjust seamlessly across devices using modern CSS features and media queries. Together, these lessons provide a strong foundation to design and develop functional, attractive, and user-friendly websites that meet today’s web standards.",
    videoUrl: "",
  },
];

export const intermediate: IData[] = [
  {
    id: 6,
    image: require("../assets/tech6.png"),
    title: "Lesson 6: JavaScript Basics",
    description:
      "In this lesson, you will be introduced to JavaScript, the programming language that adds interactivity and dynamic behavior to web pages. You’ll learn how to write and run simple scripts that respond to user actions and manipulate page content.",
    videoUrl: "",
    content: [
      "What is JavaScript and how it works with HTML and CSS",
      "Embedding JavaScript in web pages: inline, internal, and external scripts",
      "Basic syntax: variables, data types, operators, and expressions",
      "Writing functions and understanding scope",
      "Using conditional statements (if, else, switch)",
      "Looping with for and while loops",
      "Handling user input with prompts and alerts",
      "Introduction to the Document Object Model (DOM)",
      "Selecting and modifying HTML elements with JavaScript",
      "Basic event handling (e.g., responding to button clicks)",
    ],
  },
  {
    id: 7,
    image: require("../assets/tech7.png"),
    title: "Lesson 7: Functions, Arrays, and Objects",
    description:
      "In this lesson, you will deepen your understanding of JavaScript by learning about key programming concepts that enable you to write more organized and efficient code. You’ll explore how to use functions to encapsulate reusable logic, manage collections of data with arrays, and structure complex data using objects.",
    videoUrl: "",
    content: [
      "Defining and invoking functions, including parameters and return values",
      "Understanding function scope and hoisting",
      "Working with arrays: creation, accessing elements, common methods (push, pop, shift, unshift, forEach, map)",
      "Iterating over arrays with loops and array methods",
      "Introduction to objects: creating objects, properties, and methods",
      "Accessing and modifying object properties using dot notation and bracket notation",
      "Nested objects and arrays",
      "Practical examples combining functions, arrays, and objects to solve problems",
    ],
  },
  {
    id: 8,
    image: require("../assets/tech8.png"),
    title: "Lesson 8: DOM Manipulation & Events",
    description:
      "In this lesson, you’ll learn how to make your web pages truly interactive by using JavaScript to manipulate the Document Object Model (DOM) and respond to user events. You’ll gain hands-on experience selecting, modifying, and creating HTML elements dynamically, as well as handling events like clicks, key presses, and more.",
    videoUrl: "",
    content: [
      "Understanding the DOM structure and how JavaScript interacts with it",
      "Selecting DOM elements using methods like getElementById, querySelector, and get ElementsByClassName",
      "Changing content, styles, and attributes of HTML elements dynamically",
      "Creating, appending, and removing elements from the DOM",
      "Introduction to event handling: adding event listeners with addEventListener",
      "Common event types: click, mouseover, keydown, submit, and more",
      "Event propagation: capturing and bubbling",
      "Practical examples: interactive buttons, form validation, dynamic content updates",
    ],
  },
  {
    id: 9,
    image: require("../assets/tech9.png"),
    title: "Lesson 9: Advanced JavaScript",
    description:
      "This lesson takes your JavaScript skills to the next level by introducing advanced concepts and techniques that allow you to write more efficient, maintainable, and powerful code. You’ll explore modern JavaScript features and best practices used in real-world web development.",
    videoUrl: "",
    content: [
      "ES6+ features: arrow functions, template literals, destructuring, spread/rest operators",
      "Working with asynchronous JavaScript: callbacks, Promises, and async/await",
      "Closures and lexical scope",
      "The this keyword and how it behaves in different contexts",
      "Prototypes and inheritance in JavaScript",
      "Modules and import/export syntax",
      "Error handling with try...catch",
      "Introduction to JavaScript design patterns (e.g., Module pattern)",
      "Practical examples demonstrating advanced techniques in action",
    ],
  },
  {
    id: 10,
    image: require("../assets/tech10.png"),
    title: "Lesson 10: Overall Summary: JavaScript",
    description:
      "Starting with Lesson 6: JavaScript Basics, you learn the foundational programming concepts including variables, data types, functions, conditionals, loops, and how to embed JavaScript into web pages to create interactivity. In Lesson 7: Functions, Arrays, and Objects, you expand your skills by mastering reusable functions, working with arrays to handle lists of data, and using objects to model complex data structures—key to writing organized and maintainable code. Lesson 8: DOM Manipulation & Events focuses on dynamically interacting with web pages. You’ll learn how to select, modify, and create HTML elements, as well as handle user events like clicks and key presses, making your sites responsive and interactive. Finally, Lesson 9: Advanced JavaScript introduces modern language features such as ES6+ syntax (arrow functions, destructuring), asynchronous programming with Promises and async/await, closures, prototypes, and modules. These concepts prepare you to write clean, efficient, and scalable JavaScript code suitable for real-world applications.",
  },
];
export const advanced: IData[] = [
  {
    id: 20,
    image: require("../assets/tech11.png"),
    title: "Lesson 11: Fetching Data from APIs",
    description:
      "In this lesson, you will learn how to use JavaScript to retrieve and work with data from external sources through APIs (Application Programming Interfaces). You’ll discover how to make network requests, handle asynchronous data, and dynamically update web pages with real-time information.",
    videoUrl: "",
    content: [
      "What APIs are and how they work",
      "Using the fetch API to make HTTP requests",
      "Understanding Promises and handling asynchronous operations",
      "Parsing JSON responses and accessing data",
      "Error handling in network requests",
      "Updating the DOM with fetched data",
      "Practical examples: loading user profiles, displaying weather data, or fetching news headlines",
      "Introduction to RESTful APIs and common HTTP methods (GET, POST)",
    ],
  },
  {
    id: 21,
    image: require("../assets/tech12.png"),
    title: "Lesson 12: Form Handling & Validation",
    description:
      "In this lesson, you’ll learn how to create interactive and user-friendly web forms using JavaScript. You’ll explore techniques to capture user input, validate data before submission, and provide feedback to ensure accuracy and improve user experience.",
    videoUrl: "",
    content: [
      "Understanding HTML forms and form elements",
      "Accessing form data using JavaScript",
      "Client-side validation techniques: required fields, input types, patterns",
      "Writing custom validation logic with JavaScript",
      "Handling form submission events and preventing default behavior",
      "Displaying error messages and success feedback dynamically",
      "Using HTML5 built-in validation attributes",
      "Introduction to third-party validation libraries (optional)",
      "Best practices for user-friendly and accessible forms",
    ],
  },
  {
    id: 22,
    image: require("../assets/tech13.png"),
    title: "Lesson 13: Deploying Your Website",
    description:
      "In this lesson, you will learn how to take your completed website live on the internet so that others can access it. You’ll explore different hosting options and understand the steps involved in deploying a website efficiently and securely.",
    videoUrl: "",
    content: [
      "Overview of web hosting and domain names",
      "Choosing a hosting provider: shared hosting, cloud services, and static site hosts",
      "Introduction to Git and version control basics (optional)",
      "Using platforms like GitHub Pages, Netlify, or Vercel for free and easy deployment",
      "Uploading files via FTP or using deployment tools",
      "Understanding SSL certificates and HTTPS for website security",
      "Basic troubleshooting and website maintenance tips",
      "Best practices for optimizing your website for performance and reliability",
    ],
  },
  {
    id: 23,
    image: require("../assets/tech14.png"),
    title: "Lesson 14: Project: Personal Portfolio Website",
    description:
      "Create a responsive personal portfolio website that showcases your name, a short bio, your skills, and links to your social media or projects. The site will include:",
    content: [
      "A clean homepage with your name and bio",
      "A skills section displayed using Flexbox",
      "A contact form with validation",
      "A button to fetch and display a random quote from a public API (for interactivity)",
      "Responsive design that works well on mobile and desktop",
    ],
  },
];

export const populars: { image: ImageSourcePropType; lesson: IData }[] = [
  {
    image: require("../assets/popular-image1.png"),
    lesson: basic[0],
  },
  {
    image: require("../assets/popular-image2.png"),
    lesson: basic[1],
  },
  {
    image: require("../assets/popular-image3.png"),
    lesson: intermediate[0],
  },
  {
    image: require("../assets/popular-image4.png"),
    lesson: intermediate[1],
  },
  {
    image: require("../assets/popular-image5.png"),
    lesson: advanced[1],
  },
];

export const headerSlideData: MemberImageProps[] = [
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: basic[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: intermediate[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: advanced[0],
  },
];
