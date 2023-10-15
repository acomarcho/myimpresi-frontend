import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        neutral: {
          100: "#050a30",
          60: "#707389",
          10: "#FFFFFF",
        },
        red: "#E52222",
        "primary-pressed": "#153261",
      },
    },
  },
  plugins: [],
};
export default config;
