import { devices, type PlaywrightTestConfig } from '@playwright/experimental-ct-react';

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

  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  snapshotDir: './__snapshots__',
  testDir: './',
  timeout: 10 * 1000,

  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
  },

  workers: process.env.CI ? 1 : undefined,
};

export default config;
