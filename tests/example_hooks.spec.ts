import { test, expect } from '@playwright/test'

//npx playwright test tests/example_hooks.spec.ts --config=playwright.config.ts --project=Chromium

test.describe('Hooks', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://www.example.com/')
})

//here could be test.afterAll()

test('Screenshots', async ({page}) => {

    await page.screenshot({ path: "screenshot.png", fullPage: true})

})
})