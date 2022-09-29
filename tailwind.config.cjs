module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{jsx, js, vue, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "sans-serif"],
        AkayaKanadaka: ["AkayaKanadaka-Regular", "sans-serif"]
      },
      backgroundImage: {
        'banner-veterinaria': "url('./src/assets/banner-about.jpg')"
      }
    },
  },
  plugins: [],
}