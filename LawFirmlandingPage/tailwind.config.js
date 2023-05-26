/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "200": "#1d1d1d",
          "300": "#111",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        "pure-white": "#fff",
        darkslategray: {
          "100": "#2e2e2e",
          "200": "rgba(71, 71, 71, 0.5)",
        },
        goldenrod: "#e3b748",
        black: "#000",
        gainsboro: {
          "100": "#e4e4e4",
          "200": "#d9d9d9",
        },
        "text-black": "#373737",
        floralwhite: "#fffbf2",
        dimgray: "#6a6a6a",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        actor: "Actor",
      },
      borderRadius: {
        "3xs": "10px",
        sm: "14px",
        "4xl-5": "23.5px",
        "24xl": "43px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      "36xl": "3.44rem",
      lg: "1.13rem",
      "5xl": "1.5rem",
      "35xl": "3.38rem",
      "13xl": "2rem",
      mini: "0.94rem",
      "47xl": "4.13rem",
      "31xl": "3.13rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
