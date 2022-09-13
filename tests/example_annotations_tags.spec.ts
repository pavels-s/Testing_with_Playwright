import { test, expect } from '@playwright/test'

//npx playwright test --grep @MyTag
//another annotation - .describe

test.describe('My first test suite', () => { 

    test.only('Anotations @MyTag', async ({page}) => {

        await page.goto('http://example.com/')
        await expect(page).toHaveURL('http://example.com/')

        await expect(page).toHaveTitle('Example Domain')

        const element = await page.locator('h1')
        await expect(element).toBeVisible()

        //Checking strict assertion
        await expect(element).toHaveText('Example Domain')
        await expect(element).toHaveCount(1)

        //creating variable of some non-existing element
        const nonExistingElement = await page.locator('h5')
        await expect(nonExistingElement).not.toBeVisible()


    })
})
