/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // activates Just-in-Time mode
  prefix: "", // adds 'tw-' prefix to the classes
  content: ["./**/*.html", "./**/*.{vue,js,ts,jsx,tsx}"], // update this path if needed, include *.php
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: "9px",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    screens: {
      mb: "400px",
      xs: "500px",
      sm: "600px",
      md: "1024px",
      lg: "1280px",
      "custom-lg": "992px",
      "custom-2xlg": "1200px",
    },
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        nexaheavy: ['"Nexa Heavy"'],
        nexabold: ['"Nexa Bold"'],
        nexaregular: ['"Nexa Regular"'],
        nexalight: ['"Nexa Light"'],
        kommissarCondensed: ['"Kommissar Condensed"'],
      },
      colors: {
        "custom-black": "#1d2129",
        "custom-blue": "#8DD0FF",
        "custom-gray": "#707D95",
        blue: {
          25: "#2a3d5a",
          50: "#223e71",
          100: "#0e2857",
          150: "#0e2857",
          200: "#0b1d34",
          500: "#007BFF",
        },
        grey: {
          25: "#d2d8e0",
          50: "#707D95",
          100: "#DDE3ED",
          200: "#F8FAFC",
          500: "#f5f6f7",
        },
        lightblack: {
          50: "#576276",
          100: "#1D2129",
          200: "#282E38",
        },
        lightwhite: {
          25: "#FEFFFF",
          50: "#F2F5F9",
        },
        lightblue: {
          25: "#C4E8FF",
          50: "#9FCDFF4D",
        },
        newred: {
          100: "#EC0100",
        },
      },
      width: {
        48: "48%",
      },
      backgroundImage: {
        "slider-image": "url('/img/slider-bg.png')",
      },
      width: {
        593: "593px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
