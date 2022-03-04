module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['assets/**/*.js', 'images/**/*.{ico,png}', 'manifest.json', 'robots.txt'],
  swDest: 'dist/sw.js',
  swSrc: 'src/serviceWorker.js',
};
