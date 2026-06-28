"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * TypingAnimation — Cycles through an array of strings with a typewriter effect.
 *
 * WHY custom instead of a library?
 * - Libraries like typed.js are heavy (10KB+) for a simple effect
 * - Our implementation is ~50 lines, tree-shakeable, and type-safe
 * - Full control over timing and styling
 *
 * HOW it works:
 * 1. Types out the current string character by character
 * 2. Pauses at the end
 * 3. Deletes character by character
 * 4. Moves to the next string in the array
 * 5. Repeats infinitely
 *
 * WHY useState/useEffect here?
 * - This is genuinely stateful UI with time-based transitions
 * - No way to do this without client-side state management
 * - The interval cleanup prevents memory leaks
 */

interface TypingAnimationProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypingAnimation({
  strings,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className,
}: TypingAnimationProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentFullString = strings[currentStringIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (currentText.length < currentFullString.length) {
        setCurrentText(currentFullString.slice(0, currentText.length + 1));
      } else {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        // Finished deleting, move to next string
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [currentText, isDeleting, currentFullString, pauseDuration, strings.length]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="ml-0.5 inline-block w-[2px] bg-accent"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ height: "1em", verticalAlign: "text-bottom" }}
      />
    </span>
  );
}
