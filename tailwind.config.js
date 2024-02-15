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
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundColor: {
        "1A2345": "#1A2345",
      },
      backgroundImage: {
        site: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030305/jammal_photos/hfeutnseoqs0gsa2kx2u.jpg')",
        about: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030938/jammal_photos/zxvali7en6j98kruxig5.png')",
        services: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708031587/jammal_photos/lidxpp6o8dtr95ajdv5t.png')",
      },
      width: {
        70: "70%",
        30: "30%",
      },
    },
  },
  plugins: [],
};
