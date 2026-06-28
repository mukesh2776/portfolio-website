"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LoadingScreen } from "@/components/animations/loading-screen";

/**
 * ClientProviders — Wraps all client-side providers and UI.
 *
 * WHY this pattern?
 * - Root layout.tsx is a Server Component (for SEO, metadata, fonts)
 * - But we need client-side providers (ThemeProvider) and UI (LoadingScreen)
 * - This single "use client" boundary wraps them all
 * - Only ONE "use client" entry point, not scattered across the layout
 *
 * NEXT.JS CONCEPT: "Provider Pattern"
 * - In App Router, you can't use React context in Server Components
 * - The solution is to create a client wrapper that holds all providers
 * - Server Components can still be rendered INSIDE this wrapper
 *   because React serializes them on the server first
 */
export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LoadingScreen />
      {children}
    </ThemeProvider>
  );
}
