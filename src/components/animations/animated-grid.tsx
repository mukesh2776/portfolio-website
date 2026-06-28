"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedGrid — Subtle animated dot grid background.
 *
 * WHY a canvas-based grid instead of CSS?
 * - CSS grid patterns can be heavy and don't animate smoothly
 * - Canvas uses GPU rendering, extremely performant
 * - We can animate individual dots based on mouse proximity
 *
 * EFFECT:
 * - A subtle dot grid covers the hero section
 * - Dots near the mouse cursor glow brighter (spotlight effect)
 * - Creates depth and interactivity without being distracting
 *
 * PERFORMANCE:
 * - Uses requestAnimationFrame for smooth 60fps
 * - Only redraws when mouse moves (no idle CPU usage)
 * - Cleanup on unmount prevents memory leaks
 */
export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const dotSpacing = 40;
    const dotRadius = 1;
    const glowRadius = 200;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cols = Math.ceil(rect.width / dotSpacing) + 1;
      const rows = Math.ceil(rect.height / dotSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;

          // Calculate distance from mouse
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Glow intensity based on proximity
          const intensity = Math.max(0, 1 - distance / glowRadius);
          const alpha = 0.08 + intensity * 0.4;

          ctx.beginPath();
          ctx.arc(x, y, dotRadius + intensity * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 160, 255, ${alpha})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "auto" }}
      aria-hidden="true"
    />
  );
}
