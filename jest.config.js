const tsConfig = require('./tsconfig.json');

function generateModuleNameMapper() {
  const { paths } = tsConfig.compilerOptions;
  const aliases = {};

  Object.entries(paths).forEach(([key, value]) => {
    const alias = key.replace('/*', '/(.*)');
    const path = value[0].replace('/*', '/$1').replace('./', '<rootDir>/');

    aliases[alias] = path;
  });

  return aliases;
}

module.exports = {
  moduleNameMapper: {
    ...generateModuleNameMapper(),
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.ts(x)'],
};
