/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a78bfa',
        'primary-light': '#c4b5fd',
        secundary: '#1e293b',
        backgroud: '#130c27',
        'backgroud-opacity': '#14001fa6',
        backdrop: '#000000cc',
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-5rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(5rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translatey(5rem)', opacity: '0' },
          '100%': { transform: 'translatey(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translatey(-5rem)', opacity: '0' },
          '100%': { transform: 'translatey(0)', opacity: '1' },
        },
      },
      animation: {
        appear: 'appear 0.5s ease-in-out backwards',
        slideLeft: 'slideLeft 0.5s ease-out backwards',
        slideRight: 'slideRight 0.5s ease-out backwards',
        slideUp: 'slideUp 0.3s ease-out backwards',
        slideDown: 'slideDown 0.3s ease-out backwards',
      },
    },
  },
  plugins: [],
};
