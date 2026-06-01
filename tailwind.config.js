/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosegold: {
          DEFAULT: '#C88E91',
          50: '#FDF7F7',
          100: '#FAEBEB',
          200: '#F0D1D2',
          300: '#E6B7B9',
          400: '#DB9CA0',
          500: '#C88E91',
          600: '#B0696D',
          700: '#8A5255',
          800: '#643C3D',
          900: '#3D2525',
        },
        champagne: {
          DEFAULT: '#F4E4D7',
          50: '#FDFBFA',
          100: '#FAF6F2',
          200: '#F7EDE4',
          300: '#F4E4D7',
          400: '#E6CDB8',
          500: '#D9B69A',
          600: '#C09372',
          700: '#9B7356',
          800: '#73543D',
          900: '#4A3525',
        },
        pearl: '#FAFAFA',
        slate: {
          900: '#1A1A1A',
          800: '#2D3748',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Syne"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(200, 142, 145, 0.5)',
      }
    },
  },
  plugins: [],
}
