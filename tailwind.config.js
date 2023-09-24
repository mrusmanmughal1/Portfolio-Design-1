/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluecolor : "#1877f2",
        html: "#E54C21",
        css:"#264DE4",
        js:"#CFB433",
        react:"#00D5F7",
        node:"#87bf00"
      }
    },
  },
  plugins: [],
}