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
