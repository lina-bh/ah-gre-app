/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gre-blue": "#0058aa",
        "gre-turq": "#89e9d7",
        "gre-navy": "#00033d",
        "gre-bright-blue": "#3abff0",
      },
    },
  },
  plugins: [],
}
