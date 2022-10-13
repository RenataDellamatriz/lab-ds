/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //onde estarão os arquivos de conteúdo
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
