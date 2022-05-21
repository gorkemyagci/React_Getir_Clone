module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '0.1': '0.063rem'
      }
    },
    colors:{
      'brand-color':'#5d3ebc',
      'button-brand-yellow':'#ffd300'
    }
  },
  plugins: [],
}