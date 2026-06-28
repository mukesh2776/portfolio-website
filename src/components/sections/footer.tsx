"use client";

import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";

/**
 * Footer — Premium site foot marker.
 *
 * DESIGN:
 * - Simple clean layout.
 * - Back to top scroll link.
 * - Location info.
 */
export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-background relative overflow-hidden">
      <div className="section-container flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-foreground-muted">
        {/* Left Side: Name and Copyright */}
        <div>
          <div className="font-bold text-foreground mb-1">
            {PERSONAL.name}
            <span className="text-accent">.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Mukesh S. All rights reserved.
          </div>
        </div>

        {/* Middle Side: Location Marker */}
        <div className="flex items-center gap-1.5 self-start md:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>Tamil Nadu, India</span>
        </div>

        {/* Right Side: Back to Top & Social Links */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={handleScrollTop}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card hover:border-border-hover text-foreground-muted hover:text-foreground transition-all cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
