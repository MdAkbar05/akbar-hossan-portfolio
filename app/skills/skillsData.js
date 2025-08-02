import Bootstrap from "@/public/assets/skills/bootstrap.svg";
import ReactJS from "@/public/assets/skills/ReactJS.svg";
import NodeJS from "@/public/assets/skills/NodeJs.svg";
import ExpressJS from "@/public/assets/skills/Express.svg";
import MongoDB from "@/public/assets/skills/MongoDB.svg";
import Tailwind from "@/public/assets/skills/Tailwind.svg";
import Javascript from "@/public/assets/skills/Javascript.svg";
import HtmlCSS from "@/public/assets/skills/HtmlCss.svg";
import Git from "@/public/assets/skills/git.svg";
import nextjs from "@/public/assets/skills/nextjs.svg";

export const skills = [
  {
    id: 1,
    src: HtmlCSS,
    name: "HTML & CSS",
    activity: [
      "Built pixel-perfect, accessible, and semantic HTML structures",
      "Utilized CSS Flexbox and Grid for complex layouts",
      "Created responsive web designs using media queries",
      "Worked with animations, transitions, pseudo-classes, and variables",
      "Ensured cross-browser compatibility and W3C-compliant markup",
    ],
    time: "From 2020",
  },
  {
    id: 2,
    src: Bootstrap,
    name: "Bootstrap",
    activity: [
      "Developed responsive websites using Bootstrap’s grid system",
      "Customized components using SCSS and Bootstrap variables",
      "Integrated Bootstrap into React and Next.js applications",
      "Enhanced UI/UX using pre-built components like modals, carousels, navbars",
      "Improved prototyping speed for admin dashboards and landing pages",
    ],
    time: "From 2020",
  },
  {
    id: 3,
    src: Javascript,
    name: "JavaScript (ES6+)",
    activity: [
      "Solid understanding of JavaScript fundamentals (variables, loops, functions)",
      "Built logic-driven UI using conditionals and event handling",
      "Mastered asynchronous operations with Promises and Async/Await",
      "Manipulated the DOM dynamically and handled browser events",
      "Used modern ES6+ features: arrow functions, destructuring, spread/rest",
      "Worked with APIs using Fetch and integrated dynamic data into UIs",
      "Debugged effectively using browser dev tools and console methods",
    ],
    time: "From 2021",
  },
  {
    id: 4,
    src: ReactJS,
    name: "ReactJS",
    activity: [
      "Built scalable single-page applications using React functional components",
      "Managed local and global state using useState, useReducer, and Context API",
      "Implemented routing using React Router DOM for multi-page apps",
      "Optimized performance with useMemo, useCallback, and lazy loading",
      "Worked with controlled/uncontrolled forms and validation libraries",
      "Used useRef and useImperativeHandle for accessing DOM elements",
      "Built reusable component libraries for consistency and modularity",
    ],
    time: "From 2022",
  },
  {
    id: 5,
    src: Tailwind,
    name: "Tailwind CSS",
    activity: [
      "Designed responsive UI with utility-first CSS classes",
      "Customized Tailwind config for themes, fonts, and screen sizes",
      "Created component-based design systems integrated with React/Next.js",
      "Built dark/light mode toggles and dynamic themes",
      "Used Tailwind plugins for forms, typography, and animations",
    ],
    time: "From 2022",
  },
  {
    id: 6,
    src: NodeJS,
    name: "Node.js",
    activity: [
      "Built scalable and efficient backend services using Node.js",
      "Worked with core modules such as fs, path, http, and events",
      "Integrated NPM packages like bcrypt, dotenv, multer, express-validator",
      "Handled file uploads, email sending, and token generation",
      "Managed asynchronous operations and error handling robustly",
      "Used environment variables and secure config management",
    ],
    time: "From 2023",
  },
  {
    id: 7,
    src: ExpressJS,
    name: "Express.js",
    activity: [
      "Developed robust REST APIs using Express middleware architecture",
      "Structured routes, controllers, and services using MVC patterns",
      "Implemented JWT-based authentication and role-based access control",
      "Integrated third-party services such as Cloudinary, Stripe, Mailgun",
      "Handled error responses, request validation, and secure headers",
      "Worked with CORS, rate-limiting, and security best practices",
    ],
    time: "From 2023",
  },
  {
    id: 8,
    src: MongoDB,
    name: "MongoDB",
    activity: [
      "Modeled complex schemas using Mongoose ODM in Node.js",
      "Performed CRUD operations and real-time data manipulation",
      "Used aggregation pipelines for reporting and filtering",
      "Created relational structures with population and referencing",
      "Built efficient indexes and validation rules for data integrity",
      "Worked with MongoDB Atlas for cloud database hosting",
    ],
    time: "From 2023",
  },
  {
    id: 9,
    src: Git,
    name: "Git & GitHub",
    activity: [
      "Used Git for daily version control and source code management",
      "Created and managed branches for features, fixes, and experiments",
      "Merged pull requests, resolved conflicts, and followed Git flow",
      "Collaborated on repositories with teams using GitHub Issues and Projects",
      "Maintained clean commit histories with meaningful messages",
      "Deployed projects using GitHub Pages and connected CI/CD pipelines",
    ],
    time: "From 2023",
  },
  {
    id: 10,
    src: nextjs,
    name: "Next.js",
    activity: [
      "Built full-stack web applications using Next.js (App Router and Pages Router)",
      "Implemented dynamic routing, nested layouts, and metadata configuration",
      "Used API routes to build server-side functionalities and backend logic",
      "Optimized performance with SSR (Server-Side Rendering) and SSG (Static Site Generation)",
      "Managed authentication, protected routes, and middleware",
      "Integrated third-party services like Stripe, MongoDB, and Cloudinary",
      "Implemented Image and Link optimization using Next/Image and Next/Link",
      "Deployed projects on Vercel with environment variables and CI/CD setup",
    ],
    time: "From 2025",
  },
];
