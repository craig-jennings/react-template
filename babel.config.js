module.exports = (api) => {
  const isRelease = process.env.RELEASE === 'true';
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],

        '@babel/preset-react',
      ],
    };
  }

  const config = {
    plugins: [['babel-plugin-styled-components', { fileName: false }], 'react-hot-loader/babel'],
    presets: ['@babel/preset-react'],
  };

  if (isRelease) {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
