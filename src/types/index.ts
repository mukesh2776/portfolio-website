// ──────────────────────────────────────────────
// Shared TypeScript types for the portfolio
// ──────────────────────────────────────────────

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
}

/** A skill with optional icon */
export interface Skill {
  name: string;
  icon?: string;
}

/** Skill category (Frontend, Backend, etc.) */
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

/** Project data for the featured projects section */
export interface Project {
  title: string;
  type?: string;
  description: string;
  features?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

/** Service offering */
export interface Service {
  title: string;
  description: string;
  icon?: string;
}

/** Testimonial */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

/** Process step for the timeline */
export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

/** Social link */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** "Why hire me" card */
export interface HireReason {
  title: string;
  description: string;
  icon?: string;
}

/** Achievement item */
export interface Achievement {
  label: string;
  value: string;
  suffix?: string;
}
