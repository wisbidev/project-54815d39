"use client";

import { useEffect, useRef, useState } from "react";
import { mockLandingPage } from "@/lib/mock/animated-hello-world-landing-page";

/* ─── Particle field ─────────────────────────────────────────── */
function ParticleField() {
  // 15 particles with randomised position, size, opacity, and duration
  const particles = [
    { left: "5%", delay: "0s", duration: "14s", size: "3px", opacity: 0.4 },
    { left: "15%", delay: "3s", duration: "18s", size: "2px", opacity: 0.3 },
    { left: "25%", delay: "7s", duration: "20s", size: "4px", opacity: 0.5 },
    { left: "35%", delay: "1s", duration: "15s", size: "2px", opacity: 0.35 },
    { left: "45%", delay: "5s", duration: "22s", size: "3px", opacity: 0.45 },
    { left: "55%", delay: "9s", duration: "17s", size: "2px", opacity: 0.3 },
    { left: "65%", delay: "2s", duration: "13s", size: "5px", opacity: 0.5 },
    { left: "75%", delay: "6s", duration: "19s", size: "2px", opacity: 0.35 },
    { left: "85%", delay: "4s", duration: "21s", size: "3px", opacity: 0.4 },
    { left: "92%", delay: "8s", duration: "16s", size: "2px", opacity: 0.3 },
    { left: "10%", delay: "11s", duration: "14s", size: "4px", opacity: 0.45 },
    { left: "50%", delay: "13s", duration: "20s", size: "2px", opacity: 0.35 },
    { left: "70%", delay: "10s", duration: "18s", size: "3px", opacity: 0.4 },
    { left: "30%", delay: "12s", duration: "15s", size: "2px", opacity: 0.3 },
    { left: "80%", delay: "14s", duration: "22s", size: "4px", opacity: 0.5 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-particleDrift"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Floating orbs ─────────────────────────────────────────── */
function Orbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Orb 1 — top-left */}
      <div
        className="absolute rounded-full animate-orb1"
        style={{
          width: "400px",
          height: "400px",
          top: "-100px",
          left: "-100px",
          background: "rgba(99, 102, 241, 0.15)",
          filter: "blur(60px)",
        }}
      />
      {/* Orb 2 — bottom-right */}
      <div
        className="absolute rounded-full animate-orb2"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-80px",
          right: "-80px",
          background: "rgba(236, 72, 153, 0.12)",
          filter: "blur(60px)",
        }}
      />
      {/* Orb 3 — mid-right */}
      <div
        className="absolute rounded-full animate-orb3"
        style={{
          width: "250px",
          height: "250px",
          top: "50%",
          left: "60%",
          background: "rgba(6, 182, 212, 0.10)",
          filter: "blur(60px)",
        }}
      />
      {/* Mobile orbs — smaller via media query class */}
      <div
        className="absolute rounded-full animate-orb1 md:hidden"
        style={{
          width: "250px",
          height: "250px",
          top: "-100px",
          left: "-100px",
          background: "rgba(99, 102, 241, 0.15)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full animate-orb2 md:hidden"
        style={{
          width: "200px",
          height: "200px",
          bottom: "-80px",
          right: "-80px",
          background: "rgba(236, 72, 153, 0.12)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full animate-orb3 md:hidden"
        style={{
          width: "180px",
          height: "180px",
          top: "50%",
          left: "60%",
          background: "rgba(6, 182, 212, 0.10)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

/* ─── Success overlay ────────────────────────────────────────── */
interface SuccessOverlayProps {
  message: string;
  iconSymbol: string;
  closeLabel: string;
  ariaLabel: string;
  onClose: () => void;
}

function SuccessOverlay({
  message,
  iconSymbol,
  closeLabel,
  ariaLabel,
  onClose,
}: SuccessOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Move focus to close button when overlay opens
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Escape key closes overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-overlay flex items-center justify-center animate-fadeIn"
      style={{ background: "rgba(11, 14, 26, 0.92)" }}
      onClick={(e) => {
        // Close when clicking the backdrop (not the content card)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="flex flex-col items-center gap-6 px-8 py-10 rounded-2xl text-center"
        style={{ background: "rgba(11, 14, 26, 0.95)", maxWidth: "400px", width: "90%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon badge */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-bounceIn"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
          }}
          aria-hidden="true"
        >
          {iconSymbol}
        </div>

        {/* Message */}
        <p
          className="text-white text-xl font-light"
          style={{ fontSize: "1.25rem", lineHeight: "1.4" }}
        >
          {message}
        </p>

        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          className="focus-ring rounded-pill px-8 py-3 text-white text-sm transition-colors duration-200"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255, 255, 255, 0.18)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255, 255, 255, 0.1)";
          }}
        >
          {closeLabel}
        </button>
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────── */
export default function LandingPage() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const { hero, cta, overlay, footer, animations } = mockLandingPage;

  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => {
    setOverlayOpen(false);
    // Return focus to CTA when overlay closes
    ctaRef.current?.focus();
  };

  return (
    <div
      className="relative min-h-screen flex flex-col animate-bgShift"
      style={{ background: "#0b0e1a" }}
    >
      {/* Decorative background layer */}
      <Orbs />
      <ParticleField />

      {/* ── Hero content ── */}
      <main className="relative z-hero flex flex-col items-center justify-center flex-1 min-h-screen px-4">
        {/* Heading */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: animations.heroFadeDelay }}>
          <h1
            className="hello-world-glow text-center font-extrabold text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(2.8rem, 15vw, 4.5rem)",
              background:
                "linear-gradient(135deg, #818cf8, #a78bfa, #f472b6, #fb923c, #f472b6, #a78bfa, #818cf8, #a78bfa)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "gradientShift 6s ease-in-out infinite, float 4s ease-in-out infinite",
              lineHeight: "1.1",
            }}
          >
            {hero.heading}
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="animate-fadeInUp mt-6 text-center uppercase tracking-widest font-light"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            lineHeight: "1.4",
            color: "rgba(255, 255, 255, 0.6)",
            animationDelay: animations.taglineFadeDelay,
          }}
        >
          {hero.tagline}
        </p>

        {/* CTA Button */}
        <div className="animate-fadeInUp mt-10" style={{ animationDelay: animations.ctaFadeDelay }}>
          <button
            ref={ctaRef}
            onClick={openOverlay}
            aria-label={cta.ariaLabel}
            className="focus-ring flex items-center gap-3 rounded-pill text-white font-semibold cursor-pointer transition-all duration-300"
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.05rem",
              lineHeight: "1.4",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 40px rgba(99, 102, 241, 0.35)";
              const arrow = el.querySelector<HTMLSpanElement>(".cta-arrow");
              if (arrow) arrow.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
              const arrow = el.querySelector<HTMLSpanElement>(".cta-arrow");
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            <span>{cta.label}</span>
            <span
              aria-hidden="true"
              className="cta-arrow transition-transform duration-300"
              style={{ display: "inline-block" }}
            >
              →
            </span>
          </button>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="relative z-footer animate-fadeInUp text-center py-8"
        style={{
          animationDelay: animations.footerFadeDelay,
          color: "rgba(255, 255, 255, 0.2)",
          fontSize: "0.8rem",
          lineHeight: "1.4",
        }}
      >
        <p>{footer.copyright}</p>
      </footer>

      {/* ── Success overlay ── */}
      {overlayOpen && (
        <SuccessOverlay
          message={overlay.message}
          iconSymbol={overlay.iconSymbol}
          closeLabel={overlay.closeLabel}
          ariaLabel={overlay.ariaLabel}
          onClose={closeOverlay}
        />
      )}
    </div>
  );
}
