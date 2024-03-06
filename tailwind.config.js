/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#243D51',
        myGreen: '#51B7A3',
        myWhite: '#E9F5FB',
        myGrey: '#B9BAC4',
      },
      screens: {
        xs: '350px',
        ss: '740px',
        sm: '768px',
        sl: '810px',
        ms: '912px',
        md: '1020px',
        lg: '1200px',
        xl: '1500px',
      },
    },
  },
  plugins: [],
};
