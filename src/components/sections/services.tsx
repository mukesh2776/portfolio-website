"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Services — Grid of service offerings.
 *
 * DESIGN:
 * - Clean cards highlighting skills.
 * - Icon mappings (using unified design shapes).
 */
export function Services() {
  return (
    <section id="services" className="py-24 border-t border-border relative overflow-hidden bg-background">
      <div className="section-container">
        <SectionHeading subtitle="What I Offer" title="My Core Services" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <ScrollReveal
              key={service.title}
              variant="fade-up"
              delay={idx * 0.05}
              className="glass-card p-6 rounded-2xl border border-border bg-card/35 hover:border-accent/30 hover:bg-card/60 transition-all duration-300 group"
            >
              {/* Decorative line highlight */}
              <div className="h-1 w-8 rounded-full bg-accent/20 group-hover:bg-accent transition-colors mb-4" />

              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-foreground-muted">
                {service.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
