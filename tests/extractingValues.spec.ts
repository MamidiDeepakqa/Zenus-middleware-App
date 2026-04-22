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
    await page.getByRole("button", { name: "Sign in" }).click()
    // await page.waitForTimeout(2000)

    // const dashboardTitle = await page.getByText('Key Capabilities').textContent()

    // expect(dashboardTitle).toEqual(" Key Capabilities ")

    page.waitForTimeout(3000)

    await page.goto("https://zb-qa-mgmt-web-eastus-001.blueglacier-24b50f61.eastus.azurecontainerapps.io/pages/plans")

    page.waitForTimeout(10000)

})