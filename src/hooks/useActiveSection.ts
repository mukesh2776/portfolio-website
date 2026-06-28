"use client";

import { useEffect, useState } from "react";

/**
 * useActiveSection — Custom hook to track the active viewport section using IntersectionObserver.
 *
 * WHY IntersectionObserver?
 * - Window scroll listeners run on the main thread and can degrade performance.
 * - IntersectionObserver is native, asynchronously handled by the browser, and highly efficient.
 *
 * HOW it works:
 * - Observes each section by its DOM element ID.
 * - When a section occupies a significant portion of the viewport (threshold: 0.2 to 0.4),
 *   it updates the active section state.
 */
export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions = options || {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus on the upper-middle region of the screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
}
