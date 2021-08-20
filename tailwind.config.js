const { postcss } = require("tailwindcss");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerGray: "#F3F3F5",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [postcss],
}
