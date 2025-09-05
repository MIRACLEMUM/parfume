/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // for React + TS
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37", // luxury gold
        dark: "#0A0A0A", // deep black
        light: "#F9F9F9", // soft white
      },
      fontFamily: {
        display: ["Playfair Display", "serif"], // for headings
        body: ["Poppins", "sans-serif"], // for paragraphs
      },
    },
  },
  plugins: [],
}
