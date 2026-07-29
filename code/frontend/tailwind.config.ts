import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e1a",
        surface: "#0b0e1a",
        "surface-raised": "rgba(11, 14, 26, 0.92)",
        border: "rgba(255, 255, 255, 0.2)",
        text: "rgba(255, 255, 255, 0.6)",
        "text-muted": "rgba(255, 255, 255, 0.2)",
        inverse: "#fff",
        "primary-start": "#6366f1",
        "primary-end": "#8b5cf6",
        "accent-1": "#818cf8",
        "accent-2": "#a78bfa",
        "accent-3": "#f472b6",
        "accent-4": "#fb923c",
        particle: "rgba(255, 255, 255, 0.3)",
        focus: "#a78bfa",
        "overlay-close-bg": "rgba(255, 255, 255, 0.1)",
        "overlay-close-hover": "rgba(255, 255, 255, 0.18)",
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8rem", { lineHeight: "1.4" }],
        sm: ["0.95rem", { lineHeight: "1.4" }],
        base: ["1.05rem", { lineHeight: "1.4" }],
        lg: "clamp(1rem, 2.5vw, 1.5rem)",
        xl: ["1.25rem", { lineHeight: "1.4" }],
        display: "clamp(3.5rem, 12vw, 8rem)",
        "display-mobile": "clamp(2.8rem, 15vw, 4.5rem)",
      },
      borderRadius: {
        pill: "50px",
        circle: "50%",
      },
      boxShadow: {
        "cta-hover": "0 12px 40px rgba(99, 102, 241, 0.35)",
      },
      transitionDuration: {
        hover: "0.3s",
        fade: "0.5s",
        bounce: "0.6s",
        enter: "1.2s",
        fast: "0.2s",
      },
      transitionTimingFunction: {
        default: "ease",
        out: "ease-out",
        float: "ease-in-out",
      },
      spacing: {
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
      },
      zIndex: {
        base: "0",
        hero: "1",
        footer: "1",
        overlay: "100",
      },
    },
  },
  plugins: [],
};

export default config;
