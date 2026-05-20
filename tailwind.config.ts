import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page Environment - Warm Ivory
        page: {
          primary: "#F5F1E8",
          secondary: "#EFE8D8",
          alt: "#F7F4EC",
        },
        // Operational Surfaces - Deep Navy
        surface: {
          primary: "#041326",
          secondary: "#071B34",
          elevated: "#0D2342",
          card: "#0F2847",
          cardHover: "#122D50",
        },
        // Semantic Colors (Preserved)
        institutional: {
          navy: "#081220",
          charcoal: "#111827",
        },
        trust: {
          green: "#0FAF74",
          "green-light": "#10B981",
        },
        heritage: {
          gold: "#D4AF37",
          "gold-bright": "#E8BC3D",
        },
        sky: {
          blue: "#38BDF8",
          "blue-light": "#7DD3FC",
        },
        warm: {
          white: "#F8FAFC",
          cream: "#F5F1E8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'pill': '0 8px 32px rgba(4, 19, 38, 0.25)',
        'pill-hover': '0 12px 40px rgba(4, 19, 38, 0.35)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      backdropBlur: {
        'pill': '12px',
      },
    },
  },
  plugins: [],
};

export default config;