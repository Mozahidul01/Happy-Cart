/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    colors: {
      darkBlue: "#1D2B36",
      orange: "#FDE0B3",
      darkOrange: "#F79903",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      milk: "#F9F8F0",
      white: "#F8F8F8",
      black: "#111111",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config
  daisyui: {
    styled: true,
    themes: ["winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },
};
