import { devices, type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 5000,
  },

  forbidOnly: !!process.env.CI,
  outputDir: 'test-results/',

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
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],

  reporter: 'list',
  testDir: './tests',
  timeout: (process.env.CI ? 90 : 30) * 1000,

  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:4173',
    trace: {
      mode: 'retain-on-failure',
      screenshots: false,
      snapshots: true,
      sources: false,
    },
    video: 'retain-on-failure',
  },

  workers: process.env.CI ? 1 : undefined,
};

export default config;
