"use client";

import { useEffect, useRef, useState } from "react";
import { mockLandingPage } from "@/lib/mock/animated-hello-world-landing-page";

/* ─── Particle field ─────────────────────────────────────────── */
function ParticleField() {
  const particles = [
    { left: "5%",  delay: "0s",  duration: "14s", size: "3px", opacity: 0.4 },
    { left: "15%", delay: "3s",  duration: "18s", size: "2px", opacity: 0.3 },
    { left: "25%", delay: "7s",  duration: "20s", size: "4px", opacity: 0.5 },
    { left: "35%", delay: "1s",  duration: "15s", size: "2px", opacity: 0.35 },
    { left: "45%", delay: "5s",  duration: "22s", size: "3px", opacity: 0.45 },
    { left: "55%", delay: "9s",  duration: "17s", size: "2px", opacity: 0.3 },
    { left: "65%", delay: "2s",  duration: "13s", size: "5px", opacity: 0.5 },
    { left: "75%", delay: "6s",  duration: "19s", size: "2px", opacity: 0.35 },
    { left: "85%", delay: "4s",  duration: "21s", size: "3px", opacity: 0.4 },
    { left: "92%", delay: "8s",  duration: "16s", size: "2px", opacity: 0.3 },
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
      {/* Desktop orb 1 — top-left */}
      <div
        className="absolute rounded-full animate-orb1 hidden md:block"
        style={{
          width: "400px",
          height: "400px",
          top: "-100px",
          left: "-100px",
          background: "rgba(99, 102, 241, 0.15)",
          filter: "blur(60px)",
        }}
      />
      {/* Desktop orb 2 — bottom-right */}
      <div
        className="absolute rounded-full animate-orb2 hidden md:block"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-80px",
          right: "-80px",
          background: "rgba(236, 72, 153, 0.12)",
          filter: "blur(60px)",
        }}
      />
      {/* Desktop orb 3 — mid-right */}
      <div
        className="absolute rounded-full animate-orb3 hidden md:block"
        style={{
          width: "250px",
          height: "250px",
          top: "50%",
          left: "60%",
          background: "rgba(6, 182, 212, 0.10)",
          filter: "blur(60px)",
        }}
      />
      {/* Mobile orbs — smaller via sm breakpoint */}
      <div
        className="absolute rounded-full animate-orb1 sm:hidden"
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
        className="absolute rounded-full animate-orb2 sm:hidden"
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
        className="absolute rounded-full animate-orb3 sm:hidden"
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
          className="focus-ring rounded-pill px-8 py-3 text-white transition-colors"
          style={{
            fontSize: "0.95rem",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transitionDuration: "0.2s",
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

/* ─── Main page ─────────────────────────────────────────────── */
export default function LandingPage() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const { hero, cta, overlay, footer, animations } = mockLandingPage;

  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => {
    setOverlayOpen(false);
    // Return focus to CTA when overlay closes
    setTimeout(() => ctaRef.current?.focus(), 0);
  };

  return (
    <>
      {/* Background ambient gradient animation */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 animate-bgShift"
      />

      {/* Floating orbs */}
      <Orbs />

      {/* Particle field */}
      <ParticleField />

      {/* Main content */}
      <main className="relative z-hero min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl w-full">
          {/* Heading — base: mobile clamp (≤639px), md: desktop clamp (≥768px) per TC-006 */}
          <h1
            className="text-display-mobile md:text-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-2 via-accent-3 via-accent-4 via-accent-3 via-accent-2 to-accent-1 animate-gradientShift animate-fadeInUp hello-world-glow"
            style={{
              lineHeight: "1.1",
              animationDelay: animations.heroFadeDelay,
            }}
          >
            {hero.heading}
          </h1>

          {/* Tagline */}
          <p
            className="uppercase animate-fadeInUp"
            style={{
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              animationDelay: animations.taglineFadeDelay,
            }}
          >
            {hero.tagline}
          </p>

          {/* CTA button — mobile sizing (≤640px): py-[0.875rem] px-8 text-[0.95rem]
              Desktop sizing (≥640px): sm:py-4 sm:px-10 sm:text-[1.05rem] per TC-015 */}
          <button
            ref={ctaRef}
            onClick={openOverlay}
            aria-label={cta.ariaLabel}
            className="focus-ring rounded-pill animate-fadeInUp relative overflow-hidden group py-[0.875rem] px-8 sm:py-4 sm:px-10 text-[0.95rem] sm:text-[1.05rem]"
            style={{
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              animationDelay: animations.ctaFadeDelay,
              transitionDuration: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 40px rgba(99, 102, 241, 0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <span className="flex items-center gap-2">
              <span>{cta.label}</span>
              <span
                className="arrow"
                style={{ transitionDuration: "0.3s", display: "inline-block" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
            {/* Hover arrow slide */}
            <style>{`
              button:hover .arrow { transform: translateX(4px); }
              @media (prefers-reduced-motion: reduce) {
                button:hover .arrow { transform: none; }
              }
            `}</style>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-footer flex justify-center pb-8 animate-fadeInUp"
        style={{
          animationDelay: animations.footerFadeDelay,
        }}
      >
        <p
          style={{
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "0.8rem",
          }}
        >
          {footer.copyright}
        </p>
      </footer>

      {/* Success overlay */}
      {overlayOpen && (
        <SuccessOverlay
          message={overlay.message}
          iconSymbol={overlay.iconSymbol}
          closeLabel={overlay.closeLabel}
          ariaLabel={overlay.ariaLabel}
          onClose={closeOverlay}
        />
      )}
    </>
  );
}
