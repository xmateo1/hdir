module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
      },
      maxWidth: {
        '7xl': '82rem',
      },
      colors: (theme) => ({
        brown: {
          900: '#E48A57'
        },
        gray: {
          200: '#EEF2F1',
          400: '#DCE0DF',
          600: '#696969'
        },
        green: {
          900: '#2E7D87'
        }
      }),
      width: {
        '72': '18rem',
        '80': '20rem',
      }
    },
  },
  variants: {
    backgroundColor: ['hover']
  },
  plugins: [],
}
