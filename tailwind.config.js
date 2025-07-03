// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightest: "#fff4e6",
        light: "#ffe8cc",
        medium: "#ffa94d",
        dark: "#ff922b",
      },
    },
  },
  plugins: [],
};
