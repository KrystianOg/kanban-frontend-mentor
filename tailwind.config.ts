import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#635FC7", // main purple
          light: "#A8A4FF", // main purple (hover)
        },
        destructive: {
          DEFAULT: "#EA5555", // red
          light: "#FF9898", // red (hover)
        },
        slate: {
          100: "#F4F7FD", // light grey
          200: "#E4EBFA", // lines (light)
          500: "#828FA3", // medium grey
          600: "#3E3F4E", // lines (dark)
          700: "#2B2C37", // dark grey
          800: "#20212C", // very dark grey (dark BG)
          900: "#000112", // black
        },
      },
      fontFamily: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
} satisfies Config;
