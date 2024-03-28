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
        lightblue: 'rgba(215, 249, 245, 0.44)',
        purewhite: "#FFFFFF",
        pcolor: "#2D3748"
      },
      backgroundImage: {
        'top-gradient': 'linear-gradient(to bottom, rgba(215, 249, 245, 0.44), rgba(215, 249, 245, 0.44))',
        'subtle-black-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
      },
    },
  },
  plugins: [],
}