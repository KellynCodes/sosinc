module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    extend: {
      colors: {
        accent: "#BFD2F8",
        primary: "#1F2B6C",
        white: "#FCFEFE",
        secondary: "#159EEC",
      },
      screens: {
        "2xl": "1600px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      maxWidth: (theme) => {
        return {
          "screen-2xl": theme("screens.2xl"),
        };
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
