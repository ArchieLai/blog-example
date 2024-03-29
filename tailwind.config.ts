import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
