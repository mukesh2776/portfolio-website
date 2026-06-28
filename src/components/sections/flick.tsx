"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

/**
 * FlickLeadership — Highlights leadership as Secretary of FLICK.
 *
 * DESIGN:
 * - Premium glass card panel.
 * - Split column highlighting soft skills: Event Organization, Communication, Planning.
 */
export function FlickLeadership() {
  const initiatives = [
    {
      title: "Event Organization",
      description: "Planned and coordinated financial literacy workshops, investment hackathons, and guest lectures attended by 100+ students.",
    },
    {
      title: "Team Management",
      description: "Supervised and aligned core committee members across design, operations, and editorial tracks for monthly club outputs.",
    },
    {
      title: "Strategic Planning",
      description: "Designed long-term club curricula, budgeting files, and membership enrollment strategies.",
    },
  ];

  return (
    <section id="flick" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/10">
      <div className="section-container">
        <SectionHeading subtitle="Leadership" title="FLICK Secretary" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Organization Summary & Role */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-2">
                Kumaraguru Institutions
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Financial Literacy & Investment Club
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                As the Secretary of FLICK, I manage core club activities and steer student engagement in
                personal finance and investing. This role enables me to bridge technical developer thinking
                with business operations, leadership, and public communication.
              </p>
            </ScrollReveal>

            {/* Grid of initiative highlights */}
            <div className="flex flex-col gap-4">
              {initiatives.map((item, idx) => (
                <ScrollReveal key={item.title} delay={0.2 + idx * 0.1} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Mockup / Quote block */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scale" delay={0.3} className="glass-card p-8 rounded-3xl border border-border bg-card/30 relative">
              {/* Graphic accents */}
              <div className="absolute right-6 top-6 text-accent/10">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.19 1.36l-7 3.11C3.47 4.8 3 5.51 3 6.3v5.27c0 4.54 3.2 8.78 7.5 9.93 4.3-1.15 7.5-5.39 7.5-9.93V6.3c0-.79-.47-1.5-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0z" />
                </svg>
              </div>

              <blockquote className="space-y-4">
                <p className="text-sm italic leading-relaxed text-foreground-muted">
                  &ldquo;Mukesh plays a pivotal role in aligning FLICK&apos;s educational initiatives. 
                  His ability to combine planning, team leadership, and technology makes him a vital asset to 
                  our student community.&rdquo;
                </p>
                <cite className="block text-xs not-italic">
                  <span className="font-bold text-foreground">FLICK Faculty Advisor</span>
                  <span className="text-foreground-muted block text-[10px]">Kumaraguru Institutions</span>
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
