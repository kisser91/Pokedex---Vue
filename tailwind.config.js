module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    imageRendering: ['responsive']
  },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
  ],
}
