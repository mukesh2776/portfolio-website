"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal, AnimatedCounter } from "@/components/animations";

/**
 * About — Engaging, premium About Me section.
 *
 * ARCHITECTURE:
 * - Uses client side features (Framer Motion grid entry, active animated counters).
 * - Implements responsive split column grid.
 * - Staggers item entrance using dynamic delay timing.
 */
export function About() {
  const cards = [
    {
      value: 350,
      suffix: "+",
      label: "LeetCode Solved",
      sublabel: "Java / DSA / Algorithms",
      icon: (
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
          className="text-amber-500"
        >
          <path d="m10 15-5-5 5-5" />
          <path d="m14 5 5 5-5 5" />
        </svg>
      ),
    },
    {
      value: 5,
      suffix: "+",
      label: "Freelance Clients",
      sublabel: "Responsive & SEO Optimized",
      icon: (
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
          className="text-blue-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: 1,
      suffix: "st",
      label: "FLICK Secretary",
      sublabel: "Leadership & Team Management",
      icon: (
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
          className="text-purple-500"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      value: 100,
      suffix: "%",
      label: "AWS Certified",
      sublabel: "Cloud Architecture Standards",
      icon: (
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
          className="text-orange-500"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      ),
    },
  ];

  const qualities = [
    "Product-Minded",
    "Continuous Learner",
    "DSA & Problem Solver",
    "Team Leader",
    "Clear Communicator",
    "Fast Adaptor",
  ];

  return (
    <section id="about" className="relative py-24 border-t border-border overflow-hidden">
      {/* Subtle glow background */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full opacity-5 blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
        }}
      />

      <div className="section-container">
        <SectionHeading subtitle="About Me" title="Building Products, Not Just Interfaces" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column - Biography */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-foreground-muted">
                Hi, I&apos;m <span className="text-foreground font-semibold">Mukesh S</span>, a freelance web developer and MERN Stack developer. 
                I don&apos;t just build websites; I love crafting digital <span className="text-accent font-medium">products</span>. 
                My focus is always on creating highly functional, performant, and delightful user experiences that solve real-world problems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-foreground-muted">
                My freelancing journey has allowed me to work directly with clients, designing and shipping optimized websites on schedule. 
                I value fast learning and continuous improvement, which drives me to explore modern cloud and backend architectures 
                alongside rich frontend frameworks like Next.js and Tailwind CSS.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base leading-relaxed text-foreground-muted">
                Beyond clean UI design, I enjoy sharpening my analytical thinking by solving Data Structures and Algorithms (DSA) problems. 
                Tackling coding challenges on LeetCode allows me to optimize backend query performance and write highly structured, production-ready code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-base leading-relaxed text-foreground-muted">
                Collaboration is central to my work. As the Secretary of the Financial Literacy and Investment Club (FLICK) 
                at Kumaraguru Institutions, I organize finance events and manage cross-functional teams, sharpening my communication, 
                planning, and leadership skills.
              </p>
            </ScrollReveal>

            {/* Quality Badges */}
            <ScrollReveal delay={0.5} className="mt-4 flex flex-wrap gap-2.5">
              {qualities.map((quality) => (
                <span
                  key={quality}
                  className="glass-card rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground-muted hover:border-accent/30 hover:text-accent transition-all duration-300"
                >
                  {quality}
                </span>
              ))}
            </ScrollReveal>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {cards.map((card, index) => (
              <ScrollReveal
                key={card.label}
                variant="scale"
                delay={0.1 * index}
                className="glass-card flex flex-col justify-between p-6 rounded-2xl border border-border hover:border-border-hover hover:bg-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background-secondary border border-border group-hover:border-border-hover transition-all">
                    {card.icon}
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    <AnimatedCounter value={card.value} />
                    <span className="text-accent">{card.suffix}</span>
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {card.label}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-snug">
                    {card.sublabel}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
