/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        500: "#2563eb",
        // primary color
      },
      gray: {
        200: "#f9fafb",
        // background color
        800: "#1f2937",
        // text color
        400: "#d1d5db",
        // border color
        100: "#eeeeef",
        300: "#e6e9ed",
        700: "#95989c",
      },
      purple: {
        300: "#e0e7fe",
        500: "#3e38a7",
        600: "#5046e4",
      },
      green: {
        400: "#10b981",
        // accent color
      },
      red: {
        500: "#ef4444",
        // error color
      },
    },
  },
  plugins: [],
};
