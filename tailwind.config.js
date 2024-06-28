/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img':
          "url('./src/resources/images/hero-image-github-profile.png')"
      },
      fontFamily: {
        'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        dark1: '#111729',
        dark2: '#1D1B48',
        blue: '#3662E3',
        dark3: '#20293A',
        gray1: '#364153',
        gray2: '#4A5567',
        lightGray: '#CDD5E0'
      }
    }
  },
  plugins: []
}
