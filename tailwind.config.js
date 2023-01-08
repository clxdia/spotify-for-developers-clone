/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{png,svg,jpg, otf}",
  ],
  theme: {
    screens: {
      sm: { max: "1225px" },
      xs: { max: "615px" },
      md: "1226px",
    },
    extend: {
      fontFamily: {
        code_font: ["Ubuntu Mono", "monospace"],
        circular_bold: ["Circular_Bold", "sans-serif"],
        circular_light: ["Circular_Light", "sans-serif"],
      },
      animation: {
        "ltr-linear-infinite": "move-bg 10s linear infinite",
      },
      keyframes: {
        scale_bg: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "256px 0" },
        },
      },
    },
    colors: {
      greenify: "#1cb251",
      purple: "#af2896",
      black: "#000",
      white: "#fff",
      grey: "#c1c3c6",
      yellow_code: "#e6db74",
      green_code: "#a6e22e",
      greish: "#a6e22e",
      black_code: "#1b1f22",
      blue_code: "#66d9ef",
      blue: "#1e3264",
      light_green: "#19e68c",
      light_grey: "#efefef",
      light_black: "#222326",
      dark_grey: "#626467",
      menu_grey: "#222326",
      aside: "#efefef",
      link: "#1ed760",
    },
  },
  plugins: [],
};
