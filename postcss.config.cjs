// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  plugins: {
    '@tailwindcss/postcss': {},
  }
};
