/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{sans:['Poppins'], arabic:['Cairo']}
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}