import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9C58",
        "primary-dark": "#E8822E",
        "primary-light": "#FFB87A",
        bg: "#0C0C0C",
        surface: "#161616",
        "surface-2": "#1F1F1F",
        text: "#F5F5F0",
        "text-muted": "#9A9A8E",
        border: "#2A2A2A",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 156, 88, 0.18)",
      },
      backgroundImage: {
        "light-divider":
          "linear-gradient(90deg, transparent 0%, rgba(255, 156, 88, 0.95) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

export default config;