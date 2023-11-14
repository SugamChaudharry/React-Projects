/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark": "#161722",
        "bg-light": "#ECF2FF",

        "card-dark": "#25273c",
        "card-light": "#E3DFFD",

        "line-dark": "#005B41",
        "line-light": "#88304E",
      },
      padding: {
        "c-padding": "1rem 0.8rem 1rem 0.8rem",
      },
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
});
