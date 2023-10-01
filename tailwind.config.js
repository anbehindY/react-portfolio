/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "Burtons",
        greeting: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
