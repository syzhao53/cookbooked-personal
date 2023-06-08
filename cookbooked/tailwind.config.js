/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'sm': '0 0 3px rgb(0, 0, 0, .18)',
      },
      colors: {
        rose: colors.rose,
        pink: colors.pink,
        orange: colors.orange,
        red: colors.red,
        blue: colors.blue,
        amber: colors.amber,
        violet: colors.violet,
        yellow: colors.yellow,
        green: colors.green,
        slate: colors.slate,
        bg_white: '#FDFDFB',
        purple: '#ECE3F6',
        light_purple: '#E9EEFA',
        sage_green: '#6B8C85',
        gray: '#777777',
        med_gray: '#CDCDCD',
        light_gray: '#DFDFDF',
        hover_gray: '#eeeeee',
        light_pink: '#F5D1D1',
        black: '#000000',
        timer_green: '#E7F5EC',
      },
    },
  },
  plugins: [],
})
