import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9C58",
        "primary-dark": "#E8822E",
        "primary-light": "#FFB87A",
        bg: "#FAFAF8",
        surface: "#FFFFFF",
        "surface-2": "#F5F5F2",
        text: "#1A1A1A",
        "text-muted": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 10px 30px rgba(255, 156, 88, 0.12)",
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