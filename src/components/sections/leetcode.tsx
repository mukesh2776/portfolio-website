"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui";
import { ScrollReveal, AnimatedCounter } from "@/components/animations";

/**
 * LeetCode — Dedicated algorithm and problem-solving section.
 *
 * DESIGN:
 * - Solved count display styled like the LeetCode metrics page.
 * - Circular SVG progress meter representing Java coding consistency.
 * - Breakdown of Easy, Medium, Hard stats.
 */
export function LeetCode() {
  const stats = [
    { label: "Easy Solved", count: 204, max: 300, color: "bg-emerald-500" },
    { label: "Medium Solved", count: 180, max: 250, color: "bg-amber-500" },
    { label: "Hard Solved", count: 15, max: 50, color: "bg-rose-500" },
  ];

  return (
    <section id="leetcode" className="py-24 border-t border-border relative overflow-hidden bg-background">
      <div className="section-container">
        <SectionHeading subtitle="Competitive Programming" title="LeetCode Metrics" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Circular SVG Ring Chart */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal variant="scale" className="relative flex items-center justify-center h-64 w-64">
              {/* SVG Ring Background */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-border"
                />
                {/* Progress bar */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#accentGradient)"
                  strokeWidth="7"
                  fill="transparent"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 - (251.2 * 350) / 480 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
                {/* Gradients */}
                <defs>
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                    <stop offset="100%" stopColor="hsl(270, 80%, 60%)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inside circle text */}
              <div className="absolute text-center">
                <span className="text-4xl font-bold tracking-tight text-foreground block">
                  <AnimatedCounter value={350} />
                  <span className="text-accent">+</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-foreground-muted">
                  Java Problems
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Breakdown & Qualities */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold text-foreground mb-2">Algorithmic Foundations</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                Solving problems consistently shapes clean thinking. I focus on optimizing time complexity
                and writing efficient, readable code structures in Java. 
              </p>
            </ScrollReveal>

            {/* Metrics Sliders */}
            <div className="flex flex-col gap-4">
              {stats.map((stat, idx) => (
                <ScrollReveal key={stat.label} delay={0.2 + idx * 0.1} className="w-full">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-foreground-muted">{stat.label}</span>
                    <span className="text-foreground">
                      <AnimatedCounter value={stat.count} /> / {stat.max}
                    </span>
                  </div>
                  {/* Slider bar */}
                  <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${stat.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stat.count / stat.max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Highlights List */}
            <ScrollReveal delay={0.5} className="grid grid-cols-2 gap-4 mt-2">
              <div className="glass-card p-4 rounded-xl border border-border">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  Data Structures
                </div>
                <div className="text-[11px] text-foreground-muted leading-relaxed">
                  Arrays, Linked Lists, Trees, Graphs, Hash Maps.
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border border-border">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  Algorithms
                </div>
                <div className="text-[11px] text-foreground-muted leading-relaxed">
                  Sorting, Recursion, Binary Search, Dynamic Programming.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
