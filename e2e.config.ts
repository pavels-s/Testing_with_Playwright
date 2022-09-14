import {PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    testDir: 'tests/e2e',
    use: {
        headless: true,
        viewport: {width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: 'chromium'},
        },
        {
            name: "Firefox",
            use: { browserName: 'firefox'},
        },
        {
            name: "Webkit",
            use: { browserName: 'webkit'},
        },
    ]
}

export default config

//npx playwright test --config=playwright.config.ts --project=Webkit
//npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list
//npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit
//npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html (report will be showed in separate folder)