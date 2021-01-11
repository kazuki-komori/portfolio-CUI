module.exports = {
  // purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  purge: ['./**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shellGreen: "#06F108",
        vueGreen: "#42B983"
      },
      backgroundImage: theme => ({
        "desktop-img": "url('/background.png')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
