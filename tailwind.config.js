/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "sans-serif",
      secondary: "sans-serif",
      tertiary: "sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
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
