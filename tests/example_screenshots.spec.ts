import { test, expect } from '@playwright/test'

//npx playwright test tests/example_screenshots.spec.ts --config=playwright.config.ts --project=Chromium

test('Screenshots', async ({page}) => {
    //1st step to load website
    await page.goto('https://www.example.com/')

    //2nd step to take screenshot
    await page.screenshot({ path: "screenshot.png", fullPage: true})

    //3rd single element screenshot
    const element = await page.$('h1')
    await element.screenshot({ path: "single_element_screenshot.png" })
})