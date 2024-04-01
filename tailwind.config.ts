import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17a398',
        secondary: '#ea7af4',
      },
    },
    fontFamily: {
      rye: ['"Rye"'],
      sans: ['Montserrat', 'sans-serif'],
    },
  }
} satisfies Config;