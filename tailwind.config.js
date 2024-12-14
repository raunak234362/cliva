/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      light_blue: '#8AC9FF',
      normal: '#5CBBFF',
      skin: '#FFD28A',
      blue: '#228EFD'

    },
    extend: {
      fontFamily: {
        primaryRegular: ["SpaceComics_tt", 'ComicNeue-Regular'],
        secondRegular: ['ComicNeue-Regular']
       },
      backgroundImage: {
      'back_place': "url(./assets/background-4.png)"
      },
      plugins: [],
    }
  }
}
