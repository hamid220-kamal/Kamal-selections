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
        brand: {
          burgundy: "#3E0A23",
          "burgundy-dark": "#2A0717",
          "burgundy-darkest": "#1A030C",
          magenta: "#C42766",
          blush: "#F4C4D9",
          cream: "#FAF3EB",
          "cream-light": "#FDF8F2",
          gold: "#E5C378",
          "gold-dark": "#CFA753",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif-brand)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans-ui)", "Outfit", "Inter", "sans-serif"],
        script: ["var(--font-script)", "Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
