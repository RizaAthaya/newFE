module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      backgroundImage: {
        'home-image': "url('./assets/backgroundHome.svg')",
      },
      fontFamily: {
        'inter': 'inter'
      },
    },
  },
  plugins: [],
}