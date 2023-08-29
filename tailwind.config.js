/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      vibes: ["Great Vibes", "cursive"],
    },
    extend: {
      colors: {
        primary: "#4a1429",
        "primary-light": "#fef3e4",
        "body-text": "#9295a3",
        "main-text": "#191b32",
        "header-light": "#9295a3",
      },
    },
  },
  plugins: [],
});
