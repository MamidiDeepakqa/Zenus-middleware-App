import { Expect, test } from "@playwright/test";

test('validate the playwright locatorss', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    page.locator('inputTag')
    page.locator('#id')
    page.locator('.className')
    page.locator('[placeholder = "username"]')
    page.locator('[class= "class name"]')
    page.locator(':text("user")')
    page.locator(':text-is("user info")')
    page.locator('//*[@id="userTag"]')
})

test('validate the user facing locators', async ({ page }) => {
    page.getByRole("button", { name: "Sign In" })
    page.getByLabel('labelName')
    page.getByPlaceholder('placeholderText')
    page.getByText('simpleText')
    page.getByTitle('pageTitle')
    page.getByTestId('testId')
})

test('Validate the child Elements', async ({ page }) => {

    page.locator('inputTag [placeholder="username"] :text("user")');
    page.locator('inputTag').locator('[placeholder').locator(':text("user")');
    page.locator('inputTag').getByRole("button", { name: "Sign In" }).click()
    page.locator('inputTag').nth(3).getByRole("button", { name: "Sign In" }).click()
})

test('validate the Parent Elements', async ({ page }) => {

    page.locator('inputTag', { hasText: "User Info" }).getByRole("button", { name: "Sign In" }).click()
    page.locator('inputTag', { has: page.locator('inputValue') }).getByRole("button", { name: "Sign In" }).click()
    page.locator('inputTag').filter({ hasText: "User Info" }).getByRole("button", { name: "Sign In" }).click()
    page.locator('inputTag').filter({ has: page.locator("input value") }).getByRole("button", { name: "Sign In" }).click()
})