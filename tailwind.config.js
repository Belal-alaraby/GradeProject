/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3b8f',
          dark: '#1e3065',
        },
        secondary: {
          DEFAULT: '#3b6df1',
        },
        accent: {
          orange: '#f97316',
          gray: '#475569',
          green: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
