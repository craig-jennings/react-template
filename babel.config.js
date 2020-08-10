module.exports = (api) => {
  const isRelease = process.env.NODE_ENV === 'production';
  const isTest = api.env('test');

  api.cache.using(() => process.env.NODE_ENV);

  if (isTest) {
    return {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
    };
  }

  const config = {
    plugins: [
      ['babel-plugin-styled-components', { fileName: false }],
      !api.env('production') && 'react-refresh/babel',
    ],

    presets: ['@babel/preset-react'],
  };

  if (isRelease) {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
