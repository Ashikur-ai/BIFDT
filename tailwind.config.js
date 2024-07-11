/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4e00',
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [ 'light'],
  },
}

