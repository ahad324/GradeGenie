/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4139e0",      // Deep Blue
        secondary: "#dddbff",    // Bright Yellow
        accent: "#443dff",       // Purple
        background: "#fbfbfe",   // Light Gray
        dark: "#050316",         // Dark Slate
        lightText: "#F9FAFB",    // Light Text
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 6px rgba(0, 0, 0, 0.1)",
        strong: "0 6px 12px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
