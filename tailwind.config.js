/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-condesed': ['Roboto Condensed', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "hero": "url('/img/hero.jpg')",
        "img-4": "url('/img/4.jpg')",
      },
      colors: {
        'black-opacity': 'rgba(0,0,0,0.6)',
      },
    },
    plugins: [],
  }
}
