/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#FDFBF7',
          DEFAULT: '#D4AF37',
          dark: '#1A1A1A',
          muted: '#5E5E5E',
          bg: '#FAFAFA'
        }
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
