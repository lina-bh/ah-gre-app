/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { "background-color": "rgb(0, 0, 0, 0)" },
          "100%": { "background-color": "rgb(0,0,0,0.1)" },
        },
      },
      animation: {
        fade: "fade 0.5s ease-in-out",
      },
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
