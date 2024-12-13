import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)"],
        notoSansJP: ["var(--font-noto-sans-jp)"],
        yomogi: ["var(--font-yomogi)"],
        sawarabiGothic: ["var(--font-sawarabi-gothic)"],
        workSans: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
