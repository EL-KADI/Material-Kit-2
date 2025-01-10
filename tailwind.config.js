import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#CCCED2",
        customclr: "#d2c69e",
        customBlue: "#64B0F1",
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
    },
  },
  plugins: [flowbite],
};
