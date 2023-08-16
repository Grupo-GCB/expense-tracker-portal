/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1224px',
        xl: '1440px',
      },
      colors: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        gray: {
          100: '#E1E1E6',
          200: '#45515E',
          300: '#2C343C',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        red: {
          300: '#F75A68',
          500: '#AB222E',
          700: '#7A1921',
        },
      },
      borderRadius: {
        md: '1.25rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
