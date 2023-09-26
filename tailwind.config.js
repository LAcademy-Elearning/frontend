/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary:{
          light:"rgba(38, 34, 80, 0.65)",
          complimentary:"rgba(40, 36, 88, 0.61)",
          lessLight:"rgba(27, 25, 66, 0.85)",
          lessDark:"rgba(23, 22, 59, 1)",
          dark:"#1B1940"
        },
        darkSecondary:{
          light:"#59588D",
          lessLight:"#3C368B",
          
        }
      },
      screens: {
        'sm': '640px',  // Small screens
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
      },
    },
  },
  plugins: [],
}

