const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          "black-1": "#1d1d1f",
          "black-2": "#222222",
          "gray-1": "#262729",
          "gray-2": "#2b2c2e",
          "gray-3": "#3c3c3c",
          "gray-4": "#d5d2d2",
          "gray-5": "#c4c0c094",
          "white-1": "#eee",

          "red-1": "#b13515",
          "blue-1": "#6593e1",
          "yellow-1": "#edb700",
          "purple-1": "#8669c9"
        }
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      }
    }
  },
  variants: {},
  plugins: []
};
