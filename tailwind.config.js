module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tl-main": "#161824",
        "tl-paper": "#21222D",
        "tl-secondary": {
          100: "#fca69d",
          700: "#FF6D5C",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
