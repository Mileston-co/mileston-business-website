/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'nokora-black': ['Nokora Black', 'sans-serif'],
        'nokora-bold': ['Nokora Bold', 'sans-serif'],
        'nokora-light': ['Nokora Light', 'sans-serif'],
        'nokora-regular': ['Nokora Regular', 'sans-serif'],
        'nokora-thin': ['Nokora Thin', 'sans-serif'],
      },

    },
  },
  plugins: [],
}