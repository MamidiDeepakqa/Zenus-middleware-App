import { expect, test } from '@playwright/test'


test('validate extraction of values', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    // await page.getByRole('textbox', {name : "Username"}).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(3000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")
    await page.waitForTimeout(6000)

    const firstName = await page.locator('[placeholder="First Name"]')
    const lastName = await page.locator('[placeholder="Last Name"]')

    firstName.fill("Deepak")
    await page.waitForTimeout(1000)
    lastName.fill("Mamidi")

    const actualFirstName = await firstName.inputValue()
    const actualLastName = await lastName.inputValue()

    await page.waitForTimeout(3000)

    expect(actualFirstName).toEqual("Deepak")
    expect(actualLastName).toEqual("Mamidi")

})