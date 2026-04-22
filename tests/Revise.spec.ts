import { test, expect } from 'playwright/test'


test('validate the locators', async ({ page }) => {

    //playwright locators............
    page.locator('inputTag')
    page.locator('#id')
    page.locator('.class')
    page.locator('[placeholder="userName"]')
    page.locator('[class="name abc"]')
    page.locator(':text("user")')
    page.locator(':text-is("user info")')


    // User facing locators............
    page.getByTitle('Plans')
    page.getByText('')
    page.getByTestId('')
    page.getByRole("button", { name: "Sign in" })
    page.getByPlaceholder('')
    page.getByLabel('')

    // Child Elements............
    page.locator('input [placeholder="username"] ').click()
    page.locator('input').locator('[placeholder="username"]').click()

    page.locator('input').getByRole("textbox", { name: "username" }).fill('abc')
    page.locator('input').nth(3).getByRole("textbox", { name: "username" }).fill('abc')

    //parent Elements............
    page.locator('input', { hasText: "user login" }).getByRole("textbox", { name: "username" }).fill('abc')
    page.locator('input').filter({ has: page.locator(".class") }).getByRole("textbox", { name: "username" }).fill('abc')
    page.locator('input').filter({ has: page.locator(".class") }).filter({ has: page.locator(".class") }).getByRole("textbox", { name: "username" }).fill('abc')
})