module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0a",    // Main background
          surface: "#1a1a1a", // Cards/Sections
          accent: "#3b82f6",  // Royal Blue for accents (precise)
          text: "#f9fafb",    // Primary text
          muted: "#9ca3af",   // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Clean, precise font
      }
    },
  },
  plugins: [],
}
