import { test, expect } from '@playwright/test'

//npx playwright test
//To see what happens use command below
//npx playwright test --headed

test("Simple basic test", async ({ page }) => {
//Here goes the test code
await page.goto('https://www.example.com')
const pageTitle = await page.locator('h1')
await expect(pageTitle).toContainText('Example Domain')
})

test('Clicking on Elements', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

//JUST EXAMPLES OF SELECTORS
test('Selectors', async ({page}) => {
    //text
    await page.click('text=some text')

    //css selectors
    await page.click('button')
    await page.click('#id')
    await page.click('.class')

    //target only visible css selector
    await page.click('.submit-button:visivle')

    //combinations
    await page.click('#username .first')

    //xpath
    await page.click('//button')

})