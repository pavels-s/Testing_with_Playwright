import {test, expect} from '@playwright/test' 

//npm run tests:e2e

test.describe.parallel('Login / Logout Flow', () => {
    //Before hook
    test.beforeEach (async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
    })

    //Negative scenario
    test('Negative scenario for login', async ({page}) => {
        await page.click('#signin_button')
        await page.type('#user_login', 'Invalid username')
        await page.type('#user_password', 'Invalid password')
        await page.click('text=Sign in')

        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    })

    //Positive scenario
    test('Positive scenario for login + logout', async ({page}) => {
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')

        //Redirecting to another page due website sertificate error
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')

    })
})