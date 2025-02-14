/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors:{
      primary: "#fda4af"
    }},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

