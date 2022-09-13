import { test, expect } from '@playwright/test'

//npx playwright test example_inputs.spec.ts --headed

test('Working with inputs', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    //filling form
    await page.type('#user_login', 'Myusername')
    await page.type('#user_password', 'Mypassword')

    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})