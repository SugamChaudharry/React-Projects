/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark": "#161722",
        "bg-light": "#d2d3db",
        "card-dark": "#25273c",
        "card-light": "#fafafa",
      },
      padding: {
        "c-padding": "1rem 0.8rem 1rem 0.8rem",
      },
    },
    fontFamily: {
      Josefin: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
