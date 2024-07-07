/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: { 124: "20rem" },
      width: { 128: "22rem", 160: "30rem" },
      fontFamily: {
        custom: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light"] },
};
