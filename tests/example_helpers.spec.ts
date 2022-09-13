import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from '../helpers'

//npx playwright test tests/example_helpers.spec.ts --config=playwright.config.ts --project=Chromium

test("Simple test using helpers", async ({ page }) => {
    await loadHomePage(page)
    await page.pause()
    await assertTitle(page)
})