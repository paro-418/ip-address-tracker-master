/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'rubik':['Rubik','sans-serif']
    },
    extend: {
      backgroundImage:{
        "header-bg":"url('/src/images/pattern-bg.png')"
      }
    },
  },
  plugins: [],
};
