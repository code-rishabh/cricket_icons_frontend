/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alpha: "#2837dc",
        beta: "#bcf902",
      }
    },
  },
  plugins: [],
}