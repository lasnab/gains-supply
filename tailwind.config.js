/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#010400',
      secondary: '#2B50AA',
      accent: '#EE6352',
      neutral: '#FFFBFC',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
