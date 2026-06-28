"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL } from "@/lib/constants";

/**
 * LoadingScreen — A premium animated intro that plays once on initial load.
 *
 * WHY "use client"?
 * - Uses useState, useEffect, and Framer Motion animations — all client-only.
 *
 * WHY NOT use Next.js loading.tsx?
 * - loading.tsx is a Suspense fallback for route transitions.
 * - This is a ONE-TIME intro animation (like Linear or Stripe landing pages).
 * - It plays once, then never again during the session.
 *
 * ANIMATION SEQUENCE:
 * 1. Screen is fully black
 * 2. Name "Mukesh S" fades in letter by letter
 * 3. A glowing line sweeps across
 * 4. Everything fades out, revealing the actual site
 *
 * PERFORMANCE:
 * - Uses CSS transforms only (GPU-accelerated, no layout thrashing)
 * - AnimatePresence ensures clean unmount with exit animation
 * - Component is removed from DOM after animation (no hidden overhead)
 */
export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total animation duration: ~2.4s, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Subtle gradient orb behind the text */}
          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full opacity-30 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, hsl(217 91% 60%), hsl(270 80% 60%))",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Name — Letter by letter reveal */}
          <div className="relative flex overflow-hidden">
            {PERSONAL.name.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Glowing line sweep */}
          <motion.div
            className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-sm tracking-[0.3em] uppercase text-foreground-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.4,
              ease: "easeOut",
            }}
          >
            {PERSONAL.title}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
