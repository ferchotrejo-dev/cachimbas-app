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
        "img-6": "url('/img/6.jpg')",
        "img-7": "url('/img/7.jpg')",
        "img-8": "url('/img/8.jpg')",
        "img-9": "url('/img/9.jpg')",
      },
      colors: {
        'black-opacity': 'rgba(0,0,0,0.6)',
      },
    },
    plugins: [],
  }
}
