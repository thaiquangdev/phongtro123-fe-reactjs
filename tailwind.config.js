/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        borderColor: "#f1f1f1",
        redColor: "#ed1342",
      },
      backgroundColor: {
        hoverBg: "#F8F9FA",
        redBg: "#ed1342",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
