/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about-image.png')",
        services: "url('./assets/service.png')",
      },
    },
  },
  daisyui: {
    themes: [
      "night",
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
};
