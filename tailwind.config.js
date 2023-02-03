/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#FFE403',
      accent: '#EE6352',
      neutral: '#F7F7F7',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
