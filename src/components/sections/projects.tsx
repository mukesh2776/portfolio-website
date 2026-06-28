"use client";

import { motion } from "motion/react";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Projects — Grid of featured client and personal projects.
 *
 * DESIGN:
 * - Premium hover interaction cards.
 * - Tech badges.
 * - Custom SVG icon triggers.
 */
export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/20">
      {/* Background radial highlight */}
      <div
        className="pointer-events-none absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full opacity-5 blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
        }}
      />

      <div className="section-container">
        <SectionHeading subtitle="My Creations" title="Featured Projects" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal
              key={project.title}
              variant="fade-up"
              delay={idx * 0.1}
              className="glass-card flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 hover:border-accent/30 hover:bg-card/75 transition-all duration-300 group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                    {project.type || "Personal Project"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Optional Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                      Key Modules:
                    </h4>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.features.map((feat) => (
                        <li
                          key={feat}
                          className="text-[10px] text-foreground-muted bg-background/50 border border-border px-2 py-0.5 rounded"
                        >
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-foreground-subtle border border-border px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      className="w-full text-xs"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      }
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      className="w-full text-xs"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      }
                    >
                      Codebase
                    </Button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
