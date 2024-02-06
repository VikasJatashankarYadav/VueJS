/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "first-container": "#f2f2f2",
        "second-container": "#e6e6e6",
        "third-container": "#d9d9d9",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
  },
  plugins: [],
}

