const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      primary: colors.lime,
      secondary: colors.amber,
      pink: colors.pink,
      blue: colors.blue,
      teal: colors.teal,
      'offwhite': '#F2F1EB',
      'cream': '#EEE7DA',
      'sage':  '#88AB8E',
      'lightsage': '#AFC8AD',


      
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
