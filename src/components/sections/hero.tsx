"use client";

import { motion } from "motion/react";
import { PERSONAL, ACHIEVEMENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/animations/typing-animation";
import { AnimatedGrid } from "@/components/animations/animated-grid";

/**
 * Hero — Full-viewport hero section with animated headline.
 *
 * ARCHITECTURE:
 * - "use client" because it uses Framer Motion animations and interactive components
 * - Data comes from constants.ts (single source of truth)
 * - Uses composition: TypingAnimation, AnimatedGrid, Button are all reusable
 *
 * ANIMATION SEQUENCE (staggered):
 * 1. Badge slides up (0.6s delay — after loading screen)
 * 2. Name fades in with gradient
 * 3. Typing animation starts cycling through titles
 * 4. Tagline fades up
 * 5. CTA buttons scale in
 * 6. Achievement stats fade up
 * 7. Scroll indicator pulses at the bottom
 *
 * DESIGN INSPIRATION:
 * - Linear: clean typography, dark with blue accent
 * - Vercel: centered hero with gradient text
 * - Stripe: subtle grid background with depth
 * - Apple: precise spacing and premium feel
 */

// Animation configuration — stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ── Background Layers ── */}

      {/* Animated dot grid */}
      <div className="absolute inset-0 opacity-60">
        <AnimatedGrid />
      </div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary blue orb — top center */}
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
          }}
        />
        {/* Secondary purple orb — bottom right */}
        <div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, hsl(270 80% 60%), transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="section-container relative z-10 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Freelance Work
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          variants={itemVariants}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{PERSONAL.name}</span>
        </motion.h1>

        {/* Typing animation for titles */}
        <motion.div
          className="mb-6 text-xl text-foreground-muted sm:text-2xl md:text-3xl"
          variants={itemVariants}
        >
          <TypingAnimation
            strings={[
              PERSONAL.title,
              PERSONAL.subtitle,
              "Next.js Developer",
              "Problem Solver",
            ]}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={2500}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-foreground-muted sm:text-xl"
          variants={itemVariants}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
            }
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Achievement stats */}
        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
          variants={itemVariants}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement.label} className="group text-center">
              <div className="mb-1 text-3xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-4xl">
                {achievement.value}
                <span className="text-accent">{achievement.suffix}</span>
              </div>
              <div className="text-sm text-foreground-muted">
                {achievement.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-subtle">
            Scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground-subtle"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
