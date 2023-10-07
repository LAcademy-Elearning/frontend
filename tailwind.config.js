/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        darkPrimary: {
          light: "rgba(38, 34, 80, 0.65)",
          complimentary: "rgba(40, 36, 88, 0.61)",
          lessLight: "rgba(27, 25, 66, 0.85)",
          lessDark: "rgba(23, 22, 59, 1)",
          dark: "#1B1940",
        },
        darkSecondary: {
          light: "#59588D",
          lessLight: "#3C368B",
        },
        darkHover:"#39375C",
        search:"#1C1F37",
        orange:"#EC502C",
        textColor:"#5B5A99",
        modals:"rgba(38, 34, 80)",
        addCourseAreaDark:"#282458"

      },
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        Exlight: 100,
        extraLight: 200,
        Light: 300,
        Regular: 400,
        Medium: 500,
        semiBold: 600,
        Bold: 700,
        Extrabold: 800,
        black: 900,
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        mdd:"920px", // mdMedium screen
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
      },
    },
  },
  plugins: [],
};
