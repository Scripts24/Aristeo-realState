/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#725C20",
          "background-light": "#F9F9F9",
          "background-dark": "#121212",
          "card-light": "#FFFFFF",
          "card-dark": "#1E1E1E",
          "section-dark": "#1C2533",
        },
        fontFamily: {
          display: ["Playfair Display", "serif"],
          sans: ["Inter", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0px",
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }