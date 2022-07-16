module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
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
