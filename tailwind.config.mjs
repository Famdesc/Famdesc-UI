/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      salmon: {
        50: "#FDF4F2",
        100: "#FAE5E0",
        400: "#EB9B89",
        500: "#E6816B",
      }, // Accent colors, used mainly for star color, heading and buttons
      blue: {
        100: "#C2E3FA",
        200: "#85C8F5",
        300: "#48ACEF",
        400: "#138FE2",
        500: "#0E67A4",
        600: "#0B5384",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              borderRadius: "0.75rem",
            },
            pre: {
              backgroundColor: "#f3f4f6", // Fondo claro
              color: "#111827", // Texto oscuro
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
            },
            code: {
              backgroundColor: "#f3f4f6", // Fondo claro
              color: "#111827", // Texto oscuro
              borderRadius: "0.25rem",
              padding: "0.2rem 0.4rem",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit",
              fontSize: "inherit",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            pre: {
              backgroundColor: "#1f2937", // Fondo oscuro
              color: "#f3f4f6", // Texto claro
            },
            code: {
              backgroundColor: "#1f2937", // Fondo oscuro
              color: "#f3f4f6", // Texto claro
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
