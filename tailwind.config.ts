import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#000000",
            foreground: "#FFFFFF",
            primary: {
              DEFAULT: "#002E62",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#301050",
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#C4841D",
              foreground: "#FFFFFF",
            },
          },
        },
        "yellow-light": {
          extend: "light",
          colors: {
            background: "#FFFFFF",
            foreground: "#000000",
            primary: {
              DEFAULT: "#66AAF9",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#AE7EDE",
              foreground: "#000000",
            },
            warning: {
              DEFAULT: "#F7B750",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
export default config;
