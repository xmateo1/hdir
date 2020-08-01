module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        brown: 'var(--brown)',
        gray: 'var(--gray)',
      }),
      fontSize: {
        '7xl': '5rem',
      },
      maxWidth: {
        '7xl': '82rem',
      }
    },
  },
  variants: {
    backgroundColor: ['hover']
  },
  plugins: [],
}
