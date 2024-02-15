/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    extend: {
      backgroundColor: {
        "1A2345": "#1A2345",
      },
      width: {
        70: "70%",
        30: "30%",
      },
    },
  },
  plugins: [],
};
