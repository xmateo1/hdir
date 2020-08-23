module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        brown: 'var(--brown)',
        gray: 'var(--gray)',
        'gray-dark': 'var(--gray-dark)',
      }),
      borderColor: (theme) => ({
        green: 'var(--green)',
      }),
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
      textColor: {
        brown: 'var(--brown)',
        gray: 'var(--gray)',
        'gray-dark': 'var(--gray-dark)',
      },
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
