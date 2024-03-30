/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BASE_YELLOW': '#FFFF00',
        'orange': '#FB6D48',
      },
      height: {
        'lscreen': '80vh',
      }
    },
  },
  plugins: [],
}
