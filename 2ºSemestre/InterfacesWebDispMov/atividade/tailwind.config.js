/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        /* Primary  Colors */
        'verde-principal': '#00856F',
        'verde-hover': '#00453a',
        'verde-claro': '#DCE9E2',
        'verde-claro2': '#F7F9F9',
        'beige': '#FFFAF1',
        /* Secondary colors */
        'cinza-titulo': '#061800',
        'cinza-paragrafo': '#384633',
        'branco': '#3E3E3E'
      },
      fontFamily: {
        'DMsans': '"DM Sans", sans-serif;'

      }
    },
  },
  plugins: [],
}

