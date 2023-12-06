/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    screens: {
      md: {"max": "850px"},
      td: {"max": "1400px", "min": "850px"},
      lg: {"min": "850px"},
    },
    colors: {
      "black": "#131313",
      "white": "#FFF",
      "green": "#A3DB1E"
    }
  },
  plugins: [],
}
