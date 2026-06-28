"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

/**
 * Button — Premium button component with shiny hover effect.
 *
 * Variants:
 *   - "primary"  → solid accent color with glow
 *   - "secondary" → glass/outlined style
 *   - "ghost"    → transparent with hover highlight
 *
 * FEATURES:
 * - Magnetic scale on hover/tap (Framer Motion)
 * - Shiny border animation on primary variant
 * - Consistent sizing and spacing
 * - Accessible: uses native <button> or <a> element
 */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:bg-accent-hover overflow-hidden group",
  secondary:
    "glass-card text-foreground hover:border-border-hover hover:bg-card-hover",
  ghost:
    "text-foreground-muted hover:text-foreground hover:bg-card",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  default: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className,
  icon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  const content = (
    <>
      {/* Shiny sweep effect on primary buttons */}
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
