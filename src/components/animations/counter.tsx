"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "motion/react";

/**
 * AnimatedCounter — An animated number counter that triggers when it enters the viewport.
 *
 * WHY Framer Motion's animate + useMotionValue?
 * - Normal state-based timers (`setInterval`) trigger React state updates 60 times a second,
 *   causing excessive layout thrashing and paint times.
 * - This component uses `useMotionValue` and direct DOM text node manipulation.
 * - React remains completely idle while the counter runs. Silky smooth 60fps.
 */
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({
  value,
  duration = 2,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        delay,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
