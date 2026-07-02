/** Build: npx tailwindcss@3.4.17 -c tailwind.pro.config.js -i src/pro.css -o assets/css/pro.css --minify */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pro/index.html", "./assets/js/pro.js"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFBFC",
        card: "#FFFFFF",
        tint: "#EFF4F3",
        hairline: "#DCE5EB",
        ink: "#132430",
        slate: "#4E6172",
        teal: "#0E7568",
        tealdeep: "#0A5A50",
        zap: "#1DA851",
        zapdark: "#168542",
        bordeaux: "#8E2F4A",
        ochre: "#B97309",
        indigo: "#4353B8",
      },
      fontFamily: {
        display: ['"IBM Plex Serif"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "72rem",
      },
      boxShadow: {
        cta: "0 8px 22px -8px rgba(29, 168, 81, 0.5)",
        card: "0 14px 40px -18px rgba(19, 36, 48, 0.18)",
        soft: "0 2px 10px -2px rgba(19, 36, 48, 0.08)",
      },
    },
  },
  plugins: [],
};
