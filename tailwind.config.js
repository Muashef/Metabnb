/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {

    },
    fontFamily: {
      "red-rose": ["'Red Rose'", 'cursive'],
    },
  },
  plugins: [require("daisyui")],
}
