/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins"],
      },
      colors: {
        background1: "#E5E5E5",
        buttonc: "#50C2C9",

      }
    },
  },
  plugins: [],
}