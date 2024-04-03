/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '360': '1 1 360'
      }
    },
  },
  plugins: [],
}