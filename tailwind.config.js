/** Build: npx tailwindcss@3.4.17 -c tailwind.config.js -i src/input.css -o assets/css/style.css --minify */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#081420",
        surface: "#0E2233",
        raised: "#14304A",
        line: "#1E3D5C",
        mist: "#9DB4C7",
        snow: "#EAF3FA",
        accent: "#4CC9F0",
        zap: "#25D366",
        zapdeep: "#128C4B",
        wine: "#E4577B",
        amber: "#F5A524",
        violet: "#8B7CF6",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "72rem",
      },
      boxShadow: {
        cta: "0 10px 30px -8px rgba(37, 211, 102, 0.55)",
        card: "0 24px 60px -24px rgba(2, 10, 18, 0.8)",
      },
    },
  },
  plugins: [],
};
