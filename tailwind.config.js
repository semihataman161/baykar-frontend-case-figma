/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'light-xxl-1': '0 0 15px 0 rgba(255, 255, 255, 0.07)',
        'light-xxl-2': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}