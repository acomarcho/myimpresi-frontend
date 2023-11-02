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
          70: "#3E4D6F",
          60: "#707389",
          50: "#97A1B5",
          20: "hsla(230, 9%, 87%, 1)",
          10: "#FFFFFF",
        },
        red: "#E52222",
        "secondary-red": "#D24639",
        "primary-pressed": "#153261",
        "primary-base": "#E3ECFC",
        "primary-default": "#0057E2",
        gray: "#FBFBFB",
        serviceorange: {
          500: "#FF9A04",
          300: "#FFC062",
          900: "#332513",
        },
        servicered: {
          500: "#E9190C",
          300: "#FFA7A1",
          900: "#332120",
        },
        servicegreen: {
          500: "#288990",
          300: "#A6C1C2",
          900: "#212626",
        },
        whitetransparent: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
