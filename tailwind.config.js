/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "kamil-blue-light": "#C9DABF", //rgb(201, 218, 191)
        "kamil-green-light": "#9CA986", //rgb(156, 169, 134)
        "kamil-blue-medium": "#808D7C", //rgb(128, 141, 124)
        "kamil-blue-dark": "#5F6F65", //rgb(95, 111, 101)
        "kamil-orange-dark": "#E8B86D", //rgb(232, 184, 109)
      },
      boxShadow: {
        blue: "0 0 3px 3px #808D7C",
        gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
    },
  },
  plugins: [],
};
