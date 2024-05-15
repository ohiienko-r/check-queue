/** @type {import('tailwindcss').Config} */
import TypographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./index.ts.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 40px 10px rgba(172, 64, 62, 0.25)",
      },
    },
  },
  plugins: [TypographyPlugin],
};
