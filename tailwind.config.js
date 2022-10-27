/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '17': '17px',
    },
    colors: {
      transparent: 'transparent',
      'black': '#212529',
      'white': '#fff',
      'rating': '#FFC107',
      'bg': '#F8F9FA',
      'ash': 'rgb(228, 226, 226)',
    },
    extend: {
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
