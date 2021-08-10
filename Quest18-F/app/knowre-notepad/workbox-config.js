module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{css,ico,png,svg,html,js,txt}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'dist/service-worker.js',
};
