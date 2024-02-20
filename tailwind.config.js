/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { height: { 124: "20rem" }, width: { 128: "22rem", 160: "30rem" } },
  },
  plugins: [],
};
