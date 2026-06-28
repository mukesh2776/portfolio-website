import type {
  NavLink,
  SkillCategory,
  Project,
  Service,
  ProcessStep,
  SocialLink,
  HireReason,
  Achievement,
} from "@/types";

// ──────────────────────────────────────────────
// Personal Information
// ──────────────────────────────────────────────

export const PERSONAL = {
  name: "Mukesh S R",
  title: "Freelance Web Developer",
  subtitle: "MERN Stack Developer",
  tagline:
    "I build fast, scalable and modern web applications that help businesses grow.",
  shortIntro:
    "Hi, I'm Mukesh, a freelance web developer and MERN Stack developer passionate about building modern web applications. I have hands-on experience developing websites for real clients.",
  location: "Tamil Nadu, India",
  email: "", // Add your email
  resumeUrl: "#", // Add your resume link
} as const;

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// ──────────────────────────────────────────────
// Achievements / Stats
// ──────────────────────────────────────────────

export const ACHIEVEMENTS: Achievement[] = [
  { label: "LeetCode Problems", value: "350", suffix: "+" },
  { label: "Freelance Projects", value: "1", suffix: "+" },
  { label: "Technologies", value: "15", suffix: "+" },
  { label: "Years Coding", value: "3", suffix: "+" },
];

// ──────────────────────────────────────────────
// Skills
// ──────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "REST APIs" },
      { name: "Authentication" },
      { name: "JWT" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Python" },
      { name: "CNN" },
      { name: "TensorFlow" },
      { name: "Music Genre Classification" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java" },
      { name: "DSA" },
      { name: "LeetCode" },
    ],
  },
];

// ──────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    title: "Kanaas Derma Clinic",
    type: "Freelance Client Project",
    description:
      "Designed and developed a professional medical clinic website. Focused on responsive design, appointment information, service pages, performance and SEO.",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://www.kanaasdermaclinic.online/",
    githubUrl: "https://github.com/mukesh2776/Kanaas-Dental-Clinic",
  },
  {
    title: "Student Marketplace Platform",
    type: "Full-Stack Project",
    description:
      "A MERN Stack web application where students can buy and sell academic projects securely.",
    features: [
      "Authentication",
      "Search",
      "Category Filtering",
      "Dashboard",
      "Product Listings",
      "Messaging",
      "Responsive Design",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/mukesh2776/student-project-marketplace",
  },
  {
    title: "Music Genre Classification",
    type: "AI/ML Project",
    description:
      "AI/ML project that predicts the genre of uploaded music using deep learning.",
    technologies: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    githubUrl: "https://github.com/SMSanthoshkumar/music-genre-classification-ML_T3",
  },
];

// ──────────────────────────────────────────────
// Services
// ──────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    description: "Business websites, portfolio websites, and landing pages built with modern technologies.",
  },
  {
    title: "MERN Stack Development",
    description: "Full-stack web applications with MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Next.js Development",
    description: "Server-rendered, SEO-optimized web applications with Next.js.",
  },
  {
    title: "Website Redesign",
    description: "Modernize your existing website with a fresh, premium design.",
  },
  {
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and SEO rankings.",
  },
  {
    title: "Responsive UI",
    description: "Pixel-perfect, mobile-first user interfaces that work on every device.",
  },
  {
    title: "Deployment & Maintenance",
    description: "Deploy your application and provide ongoing support and updates.",
  },
];

// ──────────────────────────────────────────────
// Why Hire Me
// ──────────────────────────────────────────────

export const HIRE_REASONS: HireReason[] = [
  { title: "Production Ready Code", description: "Clean, scalable code following industry best practices." },
  { title: "Fast Delivery", description: "Projects delivered on time without compromising quality." },
  { title: "Responsive Design", description: "Pixel-perfect layouts that work on every screen size." },
  { title: "SEO Friendly", description: "Built-in SEO optimization for better search rankings." },
  { title: "Modern UI", description: "Premium, minimal designs inspired by top-tier products." },
  { title: "API Integration", description: "Seamless integration with third-party services and APIs." },
  { title: "Scalable Architecture", description: "Code structured to grow with your business needs." },
  { title: "Attention to Detail", description: "Every pixel, animation, and interaction is intentional." },
  { title: "Good Communication", description: "Clear, consistent updates throughout the project lifecycle." },
  { title: "Long Term Support", description: "Ongoing maintenance and support after launch." },
];

// ──────────────────────────────────────────────
// Process Steps
// ──────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  { title: "Discovery", description: "Understanding your goals, audience, and requirements." },
  { title: "Planning", description: "Creating a roadmap with milestones and deliverables." },
  { title: "Design", description: "Crafting the visual identity and user experience." },
  { title: "Development", description: "Building with clean, production-grade code." },
  { title: "Testing", description: "Rigorous testing across devices and browsers." },
  { title: "Deployment", description: "Launching your project to the world." },
  { title: "Support", description: "Ongoing maintenance and improvements." },
];

// ──────────────────────────────────────────────
// Social Links
// ──────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mukesh2776", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-sundarakanth-s-r-450029291/", icon: "linkedin" },
  { label: "Email", href: "mailto:mukeshsr943@gmail.com", icon: "mail" },
  { label: "LeetCode", href: "https://leetcode.com/u/Mukeshsundarakanth/", icon: "code" },
];
