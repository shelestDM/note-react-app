/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        notesAppear: 'notesAppear 1s ease-out forwards',
        notesDisappear: 'notesDisappear 0.5s ease-out forwards'
      },
      keyframes: {
        notesAppear: {
          'from': { opacity: '0', transform: 'translateY(3rem)'},
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        notesDisappear: {
          'from': { opacity: '1', transform: 'translateX(0rem)'},
          'to': { opacity: '0', transform: 'translateX(-3rem)' },
        }
      }
    },
  },
  plugins: [],
}