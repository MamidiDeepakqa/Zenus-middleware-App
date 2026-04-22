import { Expect, test } from "@playwright/test";

test('validate the playwright locators', async ({ page }) => {
    page.locator('inputTag')
    page.locator('#id')
    page.locator('.classname')
    page.locator('[placeholder="username"]')
    page.locator('[className = "abc def ghi"]')
    page.locator(':text("User")')
    page.locator(':text-is("user Info")')
})

test('validate the user facing locators', async ({ page }) => {
    page.getByRole("button", { name: "Sign in" })
    page.getByTitle('')
    page.getByText('')
    page.getByTestId('')
    page.getByPlaceholder('')
    page.getByLabel('')
})

test('validate the finding Child Elements', async ({ page }) => {
    page.locator('inputTag [placeholder="username"] :text("User")').fill('data')
    page.locator('inputTag').locator('[placeholder="username"]').fill('data')
    page.locator('inputTag').getByRole('button', { name: 'Sign in' }).fill('data')
    page.locator('inputTag').nth(4).getByRole('button', { name: 'Sign in' }).fill('data')
})

test('validate finding the parent Elements', async ({ page }) => {
    page.locator('inputTag', { hasText: "User info" }).getByRole('button', { name: 'Sign in' }).fill('data')
    page.locator('inputTag', { has: page.locator('#id') }).getByRole('button', { name: 'Sign in' }).fill('data')
    page.locator('inputTag').filter({ hasText: "User info" }).getByRole('button', { name: 'Sign in' }).fill('data')
    page.locator('inputTag').filter({ has: page.locator('.class') }).getByRole('button', { name: 'Sign in' }).fill('data')
})