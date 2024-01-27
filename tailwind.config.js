/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      margin: {
        'calc-50': 'calc(50% - 2rem)',
      },
      fontFamily: {
        'sans': ['FreeSans', 'sans-serif'],
        'serif': ['Noto Serif', 'serif'],
      },
      fontWeight: {
        'big-bold': 800,
        'semi-bold': 600,
        'normal': 400,
      }
    },
  },
  plugins: [],
}

