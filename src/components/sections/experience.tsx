"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Experience — Freelance client projects and professional history.
 *
 * DESIGN:
 * - Timeline-style card with a vertical progress line.
 * - Highlights client engagement, deliverables, metrics (SEO, speed).
 */
export function Experience() {
  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Client Contracts",
      period: "2026 - Present",
      description:
        "Collaborated directly with small business clients to capture requirements, draft layout wires, and deploy performance-driven web products. Kept communications clear and client satisfaction high.",
      highlights: [
        "Focused heavily on search engine visibility (SEO) and Lighthouse optimization (>95 scores).",
        "Developed custom booking workflows and client dashboards using the MERN stack and Next.js.",
        "Guaranteed pixel-perfect responsiveness across mobile, tablet, and widescreen devices.",
        "Assisted clients with domain configurations, DNS settings, and Vercel/AWS hosting setups.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-border relative overflow-hidden">
      <div className="section-container">
        <SectionHeading subtitle="Work History" title="Freelance Experience" />

        <div className="relative border-l border-border pl-6 ml-4 md:pl-10 md:ml-8 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 0.1}>
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border bg-card/40 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-foreground-muted">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-foreground-muted mb-6">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex gap-2.5 items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
