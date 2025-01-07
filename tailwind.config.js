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
      "dark-p-text": "#f0f9f5",
      "dark-p-background": "#040b07",
      "dark-p-primary": "#3bb073",
      "dark-p-secondary": "#22774b",
      "dark-p-accent": "#289a5f",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
