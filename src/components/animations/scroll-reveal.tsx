"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * ScrollReveal — Reusable scroll-triggered animation wrapper.
 *
 * WHY this component?
 * - Almost every section needs a "fade in on scroll" effect
 * - Instead of repeating Framer Motion code everywhere, we wrap once
 * - Keeps section components clean and focused on content
 *
 * HOW it works:
 * - Uses Framer Motion's `useInView` hook to detect when element enters viewport
 * - `once: true` means animation plays once and doesn't reverse on scroll out
 * - Supports multiple animation variants: fade-up, fade-down, fade-left, fade-right, scale
 *
 * PERFORMANCE:
 * - Uses IntersectionObserver under the hood (native browser API)
 * - Only animates CSS transforms + opacity (GPU-accelerated)
 * - `amount: 0.3` means 30% of element must be visible to trigger
 */

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const selectedVariant = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1] as const,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
