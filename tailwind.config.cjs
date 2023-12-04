module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{jsx,js,vue,ts,tsx}",
    "./src/components/templates/*.{jsx,js,vue,ts,tsx}",
    "./src/views/**/*.{jsx,js,vue,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "sans-serif"],
        AkayaKanadaka: ["AkayaKanadaka-Regular", "sans-serif"]
      },
      backgroundImage: {
        'banner-veterinaria': "url('./src/assets/banner-about.jpg')"
      },
      colors:
      {
        'azulito':'#5CE1E6',
        'moradito':'#655E8A',
        'letra':'#5D6088',
        'campos':'#54BDDA'
      }
    },
  },
  plugins: [],
}