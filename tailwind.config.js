/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'maui-mist': '#f7f9f9',
        dsotm: '#0B1215',
        midnight: '#161C27',
        sundress: '#EBCA89',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
