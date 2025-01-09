/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4139e0",
        secondary: "#dddbff",
        accent: "#443dff",
        background: "#fbfbfe",
        dark: "#050316",
        lightText: "#F9FAFB",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 6px rgba(0, 0, 0, 0.1)",
        strong: "0 6px 12px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
