/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #00040f)",
        secondary: "var(--color-secondary, #00f6ff)",
        dimWhite: "var(--color-dim-white, rgba(255, 255, 255, 0.7))",
        dimBlue: "var(--color-dim-blue, rgba(9, 151, 124, 0.1))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
