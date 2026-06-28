"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * ThemeProvider — Wraps the app with next-themes for dark/light mode.
 *
 * WHY a separate file?
 * - next-themes requires "use client" because it uses React context + localStorage.
 * - Our root layout.tsx stays a Server Component (better performance).
 * - This is the recommended pattern: isolate client-only providers into their own file.
 *
 * HOW it works:
 * - `attribute="data-theme"` → sets `data-theme="dark"` or `data-theme="light"` on <html>
 * - Our globals.css reads `[data-theme="light"]` to switch CSS variables
 * - `defaultTheme="dark"` → dark mode by default
 * - `enableSystem={false}` → user explicitly chooses, no OS detection
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
