/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a3e635', // lime-500
        primaryHigh: '#65A30D',
        secondary: '#000000', // black
        third: '#1e40af', // blue-800
      },
    },
  },
  plugins: [],
}