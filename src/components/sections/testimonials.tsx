"use client";

import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * Testimonials — Reusable reviews display.
 *
 * DESIGN:
 * - Clean cards showcasing client feedback.
 */
export function Testimonials() {
  const testimonials = [
    {
      name: "Dr.Kabilan",
      role: "Doctor",
      company: "Kanaa's Derma Clinic",
      content:
        "Mukesh delivered our clinic website exactly as specified. The responsiveness and clinic booking workflow have greatly streamlined client appointments. Truly professional delivery.",
    },
    {
      name: "Student Seller Hub",
      role: "Operations Lead",
      company: "Project Marketplace",
      content:
        "Developing our marketplace platform with Mukesh was a smooth experience. He focused on clean code, secure authentication, and delivered on time.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/20">
      <div className="section-container">
        <SectionHeading subtitle="Success Stories" title="Client Feedback" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              variant="fade-up"
              delay={idx * 0.1}
              className="glass-card p-6 rounded-2xl border border-border bg-card/45 hover:border-accent/30 hover:bg-card/75 transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-xs italic leading-relaxed text-foreground-muted mb-6">
                &ldquo;{item.content}&rdquo;
              </p>
              <div>
                <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                <p className="text-[10px] text-foreground-muted">
                  {item.role}, {item.company}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
