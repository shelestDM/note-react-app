/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs':'320px',
      'xs':'375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mxl': '1440px',
      '2xl': '1280px',
    },
    extend: {
      animation:{
        notesAppear: 'notesAppear 1s ease-out forwards',
        notesDisappear: 'notesDisappear 0.3s ease-out forwards',
        createNote: 'createNote 0.5s linear forwards',
        toastAppear: 'toastAppear 3s linear forwards',
        drawerAppear: 'drawerAppear 0.2s linear forwards',
        drawerDisappear: 'drawerDisappear 0.2s linear forwards',
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
        toastAppear: {
          '0%': { opacity: '0', transform: 'translateY(4rem)', display: 'flex'},
          '35%': { opacity: '1' ,transform: 'translateY(0rem)'},
          '55%': { opacity: '1' ,transform: 'translateY(0rem)'},
          '60%': { opacity: '1' ,transform: 'translateY(-0.4rem)'},
          '99%': { opacity: '0' ,transform: 'translateY(4rem)',},
          '100%': { opacity: '0' ,transform: 'translateY(4rem)', display: 'none'},
        },
        drawerAppear: {
          'from': { transform: 'translateX(10rem)'},
          'to': { transform: 'translateX(0rem)'},
        },
        drawerDisappear: {
          '0%': { transform: 'translateX(0rem)'},
          '100%': { transform: 'translateX(15rem)'},
        },
      }
    },
  },
  plugins: [],
}