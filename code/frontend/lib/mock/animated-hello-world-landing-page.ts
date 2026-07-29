/**
 * Mock data contract for the Animated Hello World Landing Page.
 *
 * Shape is modelled after a real API response so the BE stage can
 * satisfy this contract by returning a matching JSON payload.
 *
 * This is a STATIC page — no backend exists. The data below defines
 * what the page would receive if an API were present.
 */

export interface LandingPageData {
  hero: {
    heading: string;
    tagline: string;
  };
  cta: {
    label: string;
    ariaLabel: string;
  };
  overlay: {
    message: string;
    iconSymbol: string;
    closeLabel: string;
    ariaLabel: string;
  };
  footer: {
    copyright: string;
  };
  /** Animation durations and delays — consumed by CSS custom properties */
  animations: {
    heroFadeDelay: string;
    taglineFadeDelay: string;
    ctaFadeDelay: string;
    footerFadeDelay: string;
  };
}

export const mockLandingPage: LandingPageData = {
  hero: {
    heading: "Hello World",
    tagline: "A bold new beginning",
  },
  cta: {
    label: "Get Started",
    ariaLabel: "Get started",
  },
  overlay: {
    message: "Welcome aboard! 🎉",
    iconSymbol: "✦",
    closeLabel: "Got it",
    ariaLabel: "Welcome",
  },
  footer: {
    copyright: "© 2024 Hello World. All rights reserved.",
  },
  animations: {
    heroFadeDelay: "0.2s",
    taglineFadeDelay: "0.6s",
    ctaFadeDelay: "0.9s",
    footerFadeDelay: "1.2s",
  },
};
