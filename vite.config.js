import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    target: 'es2018',
  },

  plugins: [
    react({
      babel: {
        plugins: [
          ['react-remove-properties', { properties: ['data-testid'] }],
          isDev && ['babel-plugin-styled-components', { fileName: false }],
        ].filter(Boolean),
      },
    }),

    tsconfigPaths(),
  ],

  server: {
    host: '0.0.0.0',
  },
});
