import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    use: {
        trace: "on-first-retry",
        baseURL: "http://localhost:3000",
    },

    // projects: [
    //     {
    //         name: "chromium",
    //         use: { ...devices["Desktop Chrome"] },
    //     },

    //     {
    //         name: "firefox",
    //         use: { ...devices["Desktop Firefox"] },
    //     },

    //     {
    //         name: "webkit",
    //         use: { ...devices["Desktop Safari"] },
    //     },
    // ],

    webServer: {
        command: "yarn dev",
        url: "http://127.0.0.1:3000",
        reuseExistingServer: !process.env.CI,
    },
});
