"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { useActiveSection } from "@/hooks";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

/**
 * Navbar — A premium floating glassmorphic navigation bar.
 *
 * FEATURES:
 * - Floating design with high-blur backdrop (`glass-card`)
 * - Smooth scroll highlighting using IntersectionObserver via `useActiveSection`
 * - Premium layoutId hover indicator (background pill slides smoothly between tabs)
 * - Custom animated hamburger trigger
 * - Mobile navigation slide-down menu with staggered links
 * - Integrated ThemeToggle button
 *
 * NEXT.JS / React concepts used:
 * - Client Component due to hooks, click events, state, and Framer Motion layouts.
 * - Dynamic scroll tracking to auto-hide or show navbar based on scroll direction.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track the active section IDs based on our links
  const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  // Monitor scroll for styling and auto-hiding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add solid border/background adjustments when page is scrolled
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up (except at the very top)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false);
        setIsOpen(false); // Close mobile menu when scrolling down
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
          className={cn(
            "fixed inset-x-0 top-0 z-50 mx-auto mt-0 w-full transition-all duration-300 sm:mt-6 sm:max-w-4xl sm:px-6",
            scrolled ? "pointer-events-none" : "pointer-events-auto"
          )}
        >
          <div
            className={cn(
              "pointer-events-auto flex items-center justify-between px-6 py-3 transition-all duration-300 sm:rounded-full",
              scrolled
                ? "glass-card shadow-lg shadow-black/10"
                : "bg-transparent border-b border-transparent"
            )}
          >
            {/* Logo / Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
            >
              {PERSONAL.name}
              <span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-1 sm:flex">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {/* Active Background Highlighter Pill (Stripe/Linear style) */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/10 border border-accent/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions / Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-9 w-9 flex-col items-center justify-center rounded-full border border-border bg-card text-foreground-muted transition-colors hover:border-border-hover hover:text-foreground sm:hidden"
                aria-label="Toggle menu"
              >
                <div className="relative flex h-4 w-4 flex-col items-center justify-between">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] w-full bg-current rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="h-[2px] w-full bg-current rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] w-full bg-current rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Full-Screen Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                className="absolute inset-x-0 top-full z-40 overflow-hidden bg-background/95 border-b border-border backdrop-blur-xl sm:hidden"
              >
                <div className="flex flex-col gap-2 px-6 py-6">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "py-3 text-lg font-medium border-b border-border last:border-0 transition-colors",
                          isActive ? "text-accent" : "text-foreground-muted"
                        )}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
