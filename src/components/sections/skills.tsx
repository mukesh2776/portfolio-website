"use client";

import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Skills — Visual tech stack showcase.
 *
 * DESIGN:
 * - Clean grid of categories.
 * - Interactive hover states on each skill pill.
 * - Dynamic category entry animation.
 */
export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/35">
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute left-10 top-10 h-[300px] w-[300px] rounded-full opacity-5 blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(270 80% 60%), transparent 70%)",
        }}
      />

      <div className="section-container">
        <SectionHeading subtitle="Tech Stack" title="Expertise & Technologies" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <ScrollReveal
              key={category.title}
              variant="fade-up"
              delay={catIdx * 0.1}
              className="glass-card flex flex-col p-6 rounded-2xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-300 group"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-background-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground-muted hover:border-accent/40 hover:bg-accent/5 hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
