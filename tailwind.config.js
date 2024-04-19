/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'light': '#E9E9E9',
      'primaryGreen': '#283225',
      'secondaryGreen': '#363636',
    },
    fontFamily: {
      maison: ['Maison Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '1.25em'],
      base: ['16px', '1.25em'],
      lg: ['20px', '1.25em'],
      xl: ['24px', '1.25em'],
      '2xl': ['24px', '1.25em'],
      '3xl': ['30px', '1.25em'],
      header: ['36px', '1.25em'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

