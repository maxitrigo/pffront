import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        backgroundRepeat: {
          noRepeat: "no-repeat",
        },
        textShadow: {
          custom: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        },
        fontFamily: {
          // Rajdhani
        },
        fontSize: {
          display1: ["46px", { lineHeight: "52px", fontWeight: "bold" }],
          display2: ["36px", { lineHeight: "46px", fontWeight: "bold" }],
          display3: ["30px", { lineHeight: "40px", fontWeight: "bold" }],
          title1: ["24px", { lineHeight: "32px", fontWeight: "bold" }],
          title2: ["20px", { lineHeight: "28px", fontWeight: "bold" }],
          title3: ["16px", { lineHeight: "24px", fontWeight: "bold" }],
          subtitle1: ["20px", { lineHeight: "28px", fontWeight: "lighter" }],
          subtitle2: ["16px", { lineHeight: "24px", fontWeight: "lighter" }],
          bodyBold: ["14px", { lineHeight: "20px", fontWeight: "bold" }],
          body: ["14px", { lineHeight: "20px", fontWeight: "lighter" }],
          captionBold: ["12px", { lineHeight: "16px", fontWeight: "bold" }],
          captionStrikethrough: [
            "12px",
            { lineHeight: "16px", fontWeight: "normal" },
          ],
          caption: ["12px", { lineHeight: "16px", fontWeight: "lighter" }],
          signal1: ["14px", { lineHeight: "20px", fontWeight: "lighter" }],
          signal2: ["10px", { lineHeight: "12px", fontWeight: "bold" }],
        },
        colors: {
          primary: "#0968F6",
          primary100: "#AAD3FF",
          primary200: "#80BDFF",
          primary300: "#77B8FF",
          primary700: "#0052AA",
          primary800: "#003E80",
          secondary: "#D4E5FE",
          neutro: "#F7FDFB",
          ebayGreen: "#288034",
          plomo: "#979797",
        },
      },
    },
    screens: {
      lg: "1024px",
    },
  },
  plugins: [],
} satisfies Config;
