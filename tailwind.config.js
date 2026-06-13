/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        podium: ['"FSP DEMO - PODIUM Sharp 4.11"', 'Impact', 'sans-serif'],
      },
      colors: {
        vanguard: {
          accent: '#C8A96E',
          'accent-dim': '#8B6A3A',
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
