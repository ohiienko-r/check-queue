/** @type {import('tailwindcss').Config} */
import TypographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./index.ts.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [TypographyPlugin],
};
