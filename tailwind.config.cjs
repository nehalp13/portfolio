/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: '#01061a',
        // secondary: "#aaa6c3",
        secondary: '#a6b0c3',
        // tertiary: "#151030",
        tertiary: '#0e1236',
        "black-100": "#090b21",
        "white-200": "#E4E8ED",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};