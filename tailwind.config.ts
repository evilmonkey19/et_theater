import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      rye: ['"Rye"'],
      sans: ['Montserrat', 'sans-serif'],
    },
  }
} satisfies Config;