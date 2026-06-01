/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          200: '#f4ead5',
          300: '#ebd8b6',
          400: '#dfbe8d',
          500: '#d4af37',
          600: '#c2962a',
          700: '#9b7324',
          800: '#805d25',
          900: '#694d23',
          950: '#3c2a11',
        },
        sage: {
          50: '#f4f6f4',
          100: '#e5ebe5',
          200: '#cdd9cd',
          300: '#aabda9',
          400: '#849d83',
          500: '#668265',
          600: '#506750',
          700: '#425342',
          800: '#364436',
          900: '#2e392e',
          950: '#181f18',
        }
      }
    },
  },
  plugins: [],
}