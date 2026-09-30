/** @type {import('tailwindcss').Config} */
// UpFront Risk Solutions brand palette (matches upfrontrisk.io)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f4f9',
          100: '#e3e9f2',
          200: '#c5d1e3',
          300: '#9aaecb',
          400: '#6b85ab',
          500: '#4a6590',
          600: '#34568a',
          700: '#24406b',
          800: '#162a4a',
          900: '#0a1628',
          950: '#050d1c',
        },
        ember: {
          50: '#fff5ed',
          100: '#ffe8d5',
          200: '#ffcea8',
          300: '#ffb070',
          400: '#ff9240',
          500: '#ff7a1a',
          600: '#e8650a',
          700: '#c0510a',
          800: '#983f0f',
          900: '#7a3510',
        },
        teal: {
          50: '#effaf8',
          100: '#d6f1ed',
          200: '#afe3db',
          300: '#7ccdc2',
          400: '#4fb3a6',
          500: '#2a9d8f',
          600: '#227f74',
          700: '#1f665e',
          800: '#1d524c',
          900: '#1b4440',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
