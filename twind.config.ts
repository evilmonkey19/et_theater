import { Options } from "$fresh/plugins/twind.ts";

export default {
  darkMode: "class",
  mode: "silent",
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    }
  },
  preflight: {
    '@import':  `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');`,
  },
} as Options;
