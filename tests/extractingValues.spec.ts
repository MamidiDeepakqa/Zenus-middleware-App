import { test, expect } from '@playwright/test'


test.beforeEach('Launch the portal and wait', async ({ page }) => {
    await page.goto("https://zb-qa-mgmt-web-eastus-001.blueglacier-24b50f61.eastus.azurecontainerapps.io/")
    await page.waitForTimeout(2000);
})

test.skip('validate extracting the Sign in button value', async ({ page }) => {
    const loginButton = await page.getByRole("button", { name: "Sign in" }).textContent()
    expect(loginButton).toEqual("Sign in")
    await page.waitForTimeout(3000)

})

test("validate extracting dashboard values", async ({ page }) => {
    await page.locator('#email').fill("mdeepak.purpleplum@zenus.com")
    await page.getByLabel('password').fill("Pranitha@321")
    await page.waitForTimeout(2000);

    const signInText = await page.getByRole("button", { name: "Sign in" }).textContent()
    expect(signInText).toEqual("Sign in")
    await page.getByRole("button", { name: "Sign in" }).click()

    page.waitForTimeout(3000)

    const actualHomePageText = await page.getByRole("heading", { name: ' Middleware Management App ' }).textContent()

    expect(actualHomePageText).toEqual(' Middleware Management App ')

    const actualHomePage1Text = await page.getByRole("heading", { name: 'Key Capabilities' }).textContent()

    expect(actualHomePage1Text).toEqual(' Key Capabilities ')

})