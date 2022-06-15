import { devices, type PlaywrightTestConfig } from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  fullyParallel: true,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

  reporter: 'list',
  retries: process.env.CI ? 2 : 0,
  snapshotDir: './__snapshots__',
  testDir: './',
  timeout: 10 * 1000,

  use: {
    ctPort: 3100,

    ctViteConfig: {
      plugins: [react(), tsconfigPaths()],
    },

    trace: 'on-first-retry',
  },

  workers: process.env.CI ? 1 : undefined,
};

export default config;
