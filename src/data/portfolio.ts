import { Project, Skill, Experience, Service } from '../types';

export const personalInfo = {
  name: "Shreyas Ghimire",

  tagline:
    "Junior Frontend Developer passionate about building responsive, accessible, and user-friendly web applications with React, TypeScript, and modern frontend technologies.",

  roles: [
    "Junior Frontend Developer & Learner",
    "Junior React Developer & Learner",
    "Junior TypeScript Developer & Learner",
    "Junior JavaScript Developer & Learner",
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
    github: "https://github.com/codexshreyas",
    linkedin: "https://www.linkedin.com/in/shreyas-ghimire-b478212b9/",
    twitter: "https://x.com/shreyascodex",
    email: "shreyasx.dev@gmail.com",
  },
};

export const skills: Skill[] = [
  { name: "React",        category: "Frontend",    level: 30 },
  { name: "TypeScript",   category: "Frontend",    level: 20 },
  { name: "Tailwind CSS", category: "Frontend",    level: 30 },
  { name: "HTML",         category: "Frontend",    level: 95 },
  { name: "CSS",          category: "Frontend",    level: 75 },
  { name: "JavaScript",   category: "Programming", level: 65 },
  { name: "Python",       category: "Programming", level: 70 },
  { name: "Node.js",      category: "Backend",     level: 65 },
  { name: "Express.js",   category: "Backend",     level: 60 },
  { name: "Git & GitHub", category: "Tools",       level: 80 },
  { name: "Vite",         category: "Tools",       level: 65 },
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
    title: "Pirate Helper Discord Bot",
    description:
      "Discord automation bot created for Minecraft communities featuring moderation commands, server utilities, automation systems, and community management tools.",
    tags: ["Node.js", "Discord.js", "JavaScript", "API"],
    category: "Backend",
    githubUrl: "https://github.com/codexshreyas",
    featured: true,
  },
  {
    id: "4",
    title: "GPA Calculator",
    description:
      "A simple academic tool that helps students calculate GPA quickly with a clean and responsive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    githubUrl: "https://github.com/shreyascodex",
  },
  {
    id: "5",
    title: "QR Code Generator",
    description:
      "Python automation project that generates QR codes from text and URLs with a simple workflow.",
    tags: ["Python", "Automation", "QRCode"],
    category: "Python",
    githubUrl: "https://github.com/shreyascodex",
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
