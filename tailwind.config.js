/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
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
