import { Project, Skill, Experience, Service } from '../types';

export const personalInfo = {
  name: "Shreyas Ghimire",

  tagline:
    "Frontend Developer passionate about building responsive, accessible, and user-friendly web applications with React, TypeScript, and modern frontend technologies.",

  roles: [
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
  ],

  about:
    "I'm Shreyas Ghimire, a frontend developer from Nepal focused on building modern web applications. I work with React, TypeScript, Tailwind CSS, and JavaScript to create clean, responsive, and user-friendly experiences. I enjoy turning ideas into real products through personal projects, open-source work, and continuous learning.",

  location: "Itahari, Sunsari, Nepal",

  stats: {
    yearsExperience: "2+",
    projectsShipped: "4+",
    technologies: "5+",
  },

  social: {
    github: "https://github.com/shreyascodex",
    linkedin: "https://www.linkedin.com/in/shreyas-ghimire-b478212b9/",
    twitter: "https://x.com/shreyascodex",
    email: "shreyasx.dev@gmail.com",
  },
};

export const skills: Skill[] = [
  { name: "React",        category: "Frontend",    level: 85 },
  { name: "TypeScript",   category: "Frontend",    level: 82 },
  { name: "Tailwind CSS", category: "Frontend",    level: 85 },
  { name: "HTML",         category: "Frontend",    level: 95 },
  { name: "CSS",          category: "Frontend",    level: 85 },
  { name: "JavaScript",   category: "Programming", level: 88 },
  { name: "Python",       category: "Programming", level: 85 },
  { name: "SQL",          category: "Programming", level: 80 },
  { name: "Java",         category: "Programming", level: 80 },
  { name: "Ruby",         category: "Programming", level: 80 },
  { name: "R",            category: "Programming", level: 80 },
  { name: "PHP",          category: "Programming", level: 80 },
  { name: "Node.js",      category: "Backend",     level: 82 },
  { name: "Express.js",   category: "Backend",     level: 80 },
  { name: "Git & GitHub", category: "Tools",       level: 90 },
  { name: "Vite",         category: "Tools",       level: 85 },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Freelance",
    role: "Frontend Developer",
    period: "2024 – Present",
    achievements: [
      "Developing responsive websites and web applications using React, TypeScript, Tailwind CSS, and modern frontend tools.",
      "Building reusable UI components, animations, and optimized user experiences.",
      "Working on real-world projects including portfolios, dashboards, tools, and community applications.",
    ],
  },
  {
    id: "exp-2",
    company: "Open Source & Personal Projects",
    role: "Self-Taught Developer",
    period: "2023 – Present",
    achievements: [
      "Built multiple projects to improve frontend, backend, automation, and problem-solving skills.",
      "Created Discord bots, Minecraft community tools, GPA calculator, QR generator, and developer utilities.",
      "Continuously learning modern software development practices.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Calculator",
    description:
      "A simple calculator built with HTML, CSS, and JavaScript for practicing interactive frontend fundamentals.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex/Calculator",
  },
  {
    id: "2",
    title: "Senior Fullstack Journey",
    description:
      "A structured journey through senior-level full-stack web development, documenting concepts, projects, best practices, and continuous learning.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex/Senior-Fullstack-Journey",
    featured: true,
  },
  {
    id: "3",
    title: "Full Stack Auth Boilerplate",
    description:
      "A production-ready authentication boilerplate featuring React, TypeScript, Node.js, Express, JWT authentication, email verification, password reset, and secure authentication practices.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "JWT",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/shreyascodex/fullstack-auth-boilerplate",
    featured: true,
  },
  {
    id: "4",
    title: "Game Server Hosting Landing Page",
    description:
      "A modern, responsive game server hosting landing page showcasing advanced frontend development, animations, reusable components, and clean UI design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex/game-server-hosting-landing",
    featured: true,
  },
  {
    id: "5",
    title: "Developer Portfolio",
    description:
      "My personal portfolio website built to showcase my skills, projects, experience, and frontend development journey.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex/shreyascodex.github.io",
  },
  {
    id: "6",
    title: "Agent Skills",
    description:
      "A collection of JavaScript-based utilities and agent skills designed to improve automation and developer productivity.",
    tags: ["JavaScript", "Automation"],
    category: "Contribution",
    githubUrl: "https://github.com/shreyascodex/agent-skills",
  },
  {
    id: "7",
    title: "QR Code Generator",
    description:
      "A Python utility that generates QR codes from text and URLs using a simple and efficient workflow.",
    tags: ["Python", "QRCode", "Automation"],
    category: "Python",
    githubUrl: "https://github.com/shreyascodex/qrcode-gen",
  },
  {
    id: "8",
    title: "Gesture Clone",
    description:
      "A JavaScript experiment exploring gesture-based interaction and browser input handling.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex/Gesture-clone",
  },
  {
    id: "9",
    title: "Mini ATM Machine",
    description:
      "A Python ATM simulation with PIN authentication, balance checking, deposits, withdrawals, and a menu-driven interface.",
    tags: ["Python", "CLI", "Authentication"],
    category: "Python",
    githubUrl: "https://github.com/shreyascodex/Mini-ATM-Machine-",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Website Development",
    description:
      "Modern, responsive websites built with React, TypeScript, and Tailwind CSS with clean and maintainable code.",
    icon: "Monitor",
    features: ["Responsive Design", "React Development", "Modern UI Components", "Performance Optimization"],
  },
  {
    id: "2",
    title: "Landing Page Development",
    description:
      "Beautiful and responsive landing pages designed to showcase products, services, and ideas effectively.",
    icon: "Layout",
    popular: true,
    features: ["Modern Design", "Smooth Animations", "Mobile First", "Fast Loading"],
  },
  {
    id: "3",
    title: "React Application Development",
    description:
      "Building interactive frontend applications using React, TypeScript, reusable components, and modern development practices.",
    icon: "Code",
    features: ["React Components", "State Management", "API Integration", "Reusable Architecture"],
  },
  {
    id: "4",
    title: "UI Implementation",
    description:
      "Converting designs into pixel-perfect and responsive user interfaces using modern frontend technologies.",
    icon: "Palette",
    features: ["Figma to React", "Component Creation", "Responsive Layouts", "Clean Styling"],
  },
  {
    id: "5",
    title: "Frontend Bug Fixing",
    description:
      "Helping improve existing websites by fixing UI issues, responsiveness problems, and frontend bugs.",
    icon: "Bug",
    features: ["UI Bug Fixes", "Responsive Issues", "Code Improvements", "Performance Checks"],
  },
  {
    id: "6",
    title: "Website Optimization",
    description:
      "Improving website speed, usability, and overall frontend performance for better user experience.",
    icon: "Zap",
    features: ["Performance Optimization", "Loading Improvements", "Code Cleanup", "Better UX"],
  },
  {
    id: "7",
    title: "Portfolio Development",
    description:
      "Creating professional developer and personal portfolios that showcase skills, projects, and achievements.",
    icon: "User",
    features: ["Personal Branding", "Project Showcase", "Responsive Design", "Modern Animations"],
  },
  {
    id: "8",
    title: "Frontend Automation Tools",
    description:
      "Building small productivity tools and web utilities that automate tasks and improve workflows.",
    icon: "Wrench",
    features: ["Custom Tools", "JavaScript Automation", "API Integration", "User-Friendly Interfaces"],
  },
];
