module.exports = {
  content: ["sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      'colors': {
        'brand-blue': '#0066FF',
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px'
      }
    },
  },
  plugins: [],
}