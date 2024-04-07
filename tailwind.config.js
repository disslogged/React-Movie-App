/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      screen: "100dvh",
    },
    extend: {
      screens: {
        xs: "430px",
      },
      fontFamily: {
        raleway: ["Raleway Dots", "sans"],
        cinzel: ["Cinzel", "serif"],
        lemon: ["Lemon", "serif"],
        rubick: ["Rubik Maps", "serif"],
      },
    },
  },
  plugins: [],
};
