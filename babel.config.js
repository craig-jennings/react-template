module.exports = (api) => {
  const isProd = process.env.NODE_ENV === 'production';
  const isRelease = process.env.RELEASE === 'true';
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    };
  }

  const config = {
    plugins: [
      ['babel-plugin-styled-components', { fileName: false }],
      !isProd && 'react-refresh/babel',
    ].filter(Boolean),

    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  };

  if (isRelease) {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
