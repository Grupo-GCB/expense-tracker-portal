/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
      colors: {
        gray: {
          200: "#45515E",
          300: "#2C343C",
        },
        green:{
          light: "#00B37E"
        }
      },
      borderRadius:{
        md: "1.25rem"
      }
    },
  },
  plugins: [],
};
