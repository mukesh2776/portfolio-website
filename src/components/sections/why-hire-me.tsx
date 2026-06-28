"use client";

import { HIRE_REASONS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * WhyHireMe — Cards grid explaining why clients and teams choose to work with me.
 *
 * DESIGN:
 * - Clean cards with custom bullet icon highlights.
 */
export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/20">
      <div className="section-container">
        <SectionHeading subtitle="My Standards" title="Why Work With Me?" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIRE_REASONS.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              variant="fade-up"
              delay={idx * 0.05}
              className="glass-card p-6 rounded-2xl border border-border bg-card/45 hover:border-accent/30 hover:bg-card/75 transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start">
                {/* SVG checkmark badge */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
