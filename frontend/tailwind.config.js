/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/Display/*.{jsx,js}",
    "./src/App.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#709dff',
          200: '#5651e5'
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
