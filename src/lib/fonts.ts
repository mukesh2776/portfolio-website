import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Primary font — Inter
 * Used by Vercel, Linear, Stripe. Clean, geometric, highly readable.
 * Loaded with latin subset and variable font for optimal performance.
 */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Monospace font — JetBrains Mono
 * Used for code snippets and the LeetCode section.
 * Clean, developer-focused monospace font.
 */
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
