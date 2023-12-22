/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sienna': '#E76F51',
        'brown': '#F4A261',
        'saffron': '#E9C46A',
        'persian': '#2A9D8F',
        'charcoal': '#264653'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'zilla': ['Zilla Slab', 'serif']
      },
    },
  },
  plugins: [
    ('@tailwindcss/typography'),
],
}
