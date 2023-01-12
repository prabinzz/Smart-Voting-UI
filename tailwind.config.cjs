/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      margin: {
        lg: "8vw",
        md: "6vw",
        sm: "2w",
      },
    },
    extend: {
      colors: {
        "light-gray": "#e6e6e6",
        "dark-gray": "#5A5A5A",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
