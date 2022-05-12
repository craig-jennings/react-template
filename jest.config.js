const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('./src/test/file-mock.js'),
  },
  preset: 'ts-jest',
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts(x)?'],
};
