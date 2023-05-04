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
        'header': "url('./assets/headline.svg')",
      },
      fontFamily: {
        'inter': 'inter'
      },
    },
  },
  plugins: [require("daisyui")],
}