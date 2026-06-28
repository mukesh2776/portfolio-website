"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Process — Timeline layout showcasing step-by-step dev methodology.
 *
 * DESIGN:
 * - Vertical alternating or indexed step sequence.
 * - Highlights stages from Discovery through Support.
 */
export function Process() {
  return (
    <section id="process" className="py-24 border-t border-border relative overflow-hidden bg-background">
      <div className="section-container">
        <SectionHeading subtitle="Methodology" title="My Development Process" />

        <div className="relative border-l border-border pl-6 ml-4 md:pl-10 md:ml-8 flex flex-col gap-10">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.title} variant="fade-up" delay={idx * 0.05}>
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-accent">
                <span className="text-[9px] font-bold text-accent">{idx + 1}</span>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-border bg-card/35 hover:border-accent/20 transition-all duration-300">
                <h3 className="text-sm font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
