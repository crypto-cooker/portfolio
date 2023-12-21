/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        custom: "8px 8px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
