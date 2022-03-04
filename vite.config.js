import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.NODE_ENV !== 'production';
const isRelease = process.env.RELEASE === 'true';

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
          isDev && ['babel-plugin-styled-components', { fileName: false }],
          isRelease && ['react-remove-properties', { properties: ['data-testid'] }],
        ].filter(Boolean),
      },
    }),

    tsconfigPaths(),
  ],

  server: {
    host: '0.0.0.0',
  },
});
