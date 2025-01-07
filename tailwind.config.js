/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    container: {
      center: true,
    },
    colors: {
      "p-text": "#060f0b",
      "p-background": "#f4fbf7",
      "p-primary": "#4fc488",
      "p-secondary": "#88ddb1",
      "p-accent": "#65d79c",
      "dark-mode-bg": "#171923",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
