/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
     colors: {
        primary: "#2C3E50",
        primaryDark: "#19242E",
        secondary: "#FFD700",
        secondaryDark:"#E1BE04",
      }, 
      fontFamily: {
        Arimo: [ "Arimo", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1000px",
      lg: "1200px",
      xl: "1600px",
    },
  },
  plugins: [],
}