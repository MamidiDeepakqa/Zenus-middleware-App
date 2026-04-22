import { test, expect } from '@playwright/test'

test('validate reusing the locators', async ({ page }) => {

    const userName = page.locator('[placeholder="Username"]');
    const password = page.locator('[placeholder="Password"]');

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await userName.fill("Admin")
    await password.fill("admin123")
    await page.getByRole("button", { name: "Login" }).click()
    await page.waitForTimeout(10000)

    await expect(userName).toHaveValue('admin')
})