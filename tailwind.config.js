/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        notesAppear: 'notesAppear 1s ease-out forwards',
        notesDisappear: 'notesDisappear 0.3s ease-out forwards',
        createNote: 'createNote 0.5s linear forwards',
      },
      keyframes: {
        notesAppear: {
          'from': { opacity: '0', transform: 'translateY(-1rem)'},
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        notesDisappear: {
          'from': { opacity: '1', transform: 'translateX(0rem)'},
          'to': { opacity: '0', transform: 'translateX(-3rem)' },
        },
        createNote: {
          'from': { opacity: '0', transform: 'translateX(5rem)'},
          'to': { opacity: '1' ,transform: 'translateX(0rem)'},
        },
      }
    },
  },
  plugins: [],
}