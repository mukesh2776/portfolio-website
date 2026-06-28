"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { PERSONAL } from "@/lib/constants";
import { SectionHeading, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

/**
 * Contact — Complete business outreach form and channels.
 *
 * DESIGN:
 * - Budget slider / option select.
 * - Interactive input fields with neon bottom-line borders.
 * - Book meeting CTA / Resume downloader.
 */
export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.description,
          subject: `New contact form submission from ${formState.name}`,
          from_name: formState.name,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Message could not be sent. Please try again.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", description: "" });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border relative overflow-hidden bg-background-secondary/25">
      {/* Background glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-5 blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
        }}
      />

      <div className="section-container">
        <SectionHeading subtitle="Outreach" title="Let&apos;s Build Together" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-bold text-foreground mb-2">Discuss a Project</h3>
              <p className="text-sm leading-relaxed text-foreground-muted mb-4">
                Have an idea, a freelance contract proposal, or want to hire me for MERN Stack or Next.js work? 
                Reach out directly or send details using the contact form.
              </p>
            </ScrollReveal>

            {/* Quick CTAs */}
            <div className="flex flex-col gap-3">
              <ScrollReveal delay={0.2}>
                <Button
                  variant="primary"
                  className="w-full justify-start text-xs"
                  href={`mailto:${PERSONAL.email || "mukesh.sr943@gmail.com"}`}
                  icon={
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                >
                  Direct Email
                </Button>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Button
                  variant="secondary"
                  className="w-full justify-start text-xs"
                  href="tel:8667722330"
                  icon={
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                >
                  Call Me
                </Button>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Simplified Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="scale" className="glass-card p-6 md:p-8 rounded-2xl border border-border bg-card/30">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-4 text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Message Sent</h4>
                  <p className="text-xs text-foreground-muted">
                    Thank you. I have received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground-muted">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-background/50 border border-border focus:border-accent rounded-xl px-4 py-3 text-xs text-foreground placeholder-foreground-subtle focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground-muted">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-background/50 border border-border focus:border-accent rounded-xl px-4 py-3 text-xs text-foreground placeholder-foreground-subtle focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-foreground-muted">
                        Phone Number <span className="text-foreground-subtle font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-background/50 border border-border focus:border-accent rounded-xl px-4 py-3 text-xs text-foreground placeholder-foreground-subtle focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="desc" className="text-xs font-semibold text-foreground-muted">
                      Project Goals & Details
                    </label>
                    <textarea
                      id="desc"
                      rows={5}
                      required
                      placeholder="Briefly tell me about your web goals, integrations, and deliverables..."
                      value={formState.description}
                      onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                      className="w-full bg-background/50 border border-border focus:border-accent rounded-xl px-4 py-3 text-xs text-foreground placeholder-foreground-subtle focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" className="text-xs font-semibold py-3 h-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
