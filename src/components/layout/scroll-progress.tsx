"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * ScrollProgress — Premium page-scroll progress indicator.
 *
 * WHY Framer Motion's useScroll?
 * - Tracking scroll position manually using state triggers constant React re-renders.
 * - `useScroll` returns a `MotionValue` which directly manipulates the CSS transform attribute in the DOM.
 * - This bypasses React's render loop during scrolling for silky smooth 120fps performance.
 *
 * HOW it works:
 * - `scrollYProgress` goes from 0 (top) to 1 (bottom).
 * - `useSpring` smooths out the raw progress value to prevent sudden jumps during mouse wheel scrolls.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth the scroll progress bar value with a gentle spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-hover to-accent"
      style={{ scaleX }}
    />
  );
}
