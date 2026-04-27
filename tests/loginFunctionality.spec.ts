import { expect, test, devices } from "@playwright/test";

test.beforeEach('validate launching the build on QA environment', async ({ page }) => {
    await page.goto("https://zb-qa-mgmt-web-eastus-001.blueglacier-24b50f61.eastus.azurecontainerapps.io/")
    await page.waitForTimeout(2000)
})

test('Verify login with Valid Credentials', async ({ page }) => {
    await page.locator('#email').fill(process.env.USERNAME!)
    await page.locator('#password').fill(process.env.PASSWORD!)
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualDashboardText = await page.locator('[class="font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-surface-900 dark:text-surface-0"]').textContent()
    expect(actualDashboardText).toEqual(" Middleware Management App ")
})

test('Verify login with Incorrect username and valid password', async ({ page }) => {
    await page.locator('#email').fill(process.env.USERNAME!)
    await page.locator('#password').fill(process.env.PASSWORD!)
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualInvalidUsernameMessage = await page.getByText('Please enter a valid email address.').textContent()
    expect(actualInvalidUsernameMessage).toEqual("Please enter a valid email address.")
})

test('Verify login with Incorrect password and valid username', async ({ page }) => {
    await page.locator('#email').fill("mdeepak.purpleplum@zenus.com")
    await page.locator('#password').fill("P@321")
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    const actualInvalidPasswordMessage = await page.getByText('Your password is incorrect').textContent()
    expect(actualInvalidPasswordMessage).toEqual("Your password is incorrect")
})

test('Verify login with username and password fields are empty', async ({ page }) => {
    await page.locator('#email').fill("")
    await page.locator('#password').fill("")
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualBlankUsernameFieldMessage = await page.getByText('Please enter your Email Address').textContent()
    expect(actualBlankUsernameFieldMessage).toEqual("Please enter your Email Address")
    const actualBlankPasswordFieldMessage = await page.getByText('Please enter your password').textContent()
    expect(actualBlankPasswordFieldMessage).toEqual("Please enter your password")
})

test('Verify login with username field is empty and password field with valid data', async ({ page }) => {
    await page.locator('#email').fill("")
    await page.locator('#password').fill("abc")
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualBlankUsernameFieldMessage = await page.getByText('Please enter your Email Address').textContent()
    expect(actualBlankUsernameFieldMessage).toEqual("Please enter your Email Address")
})

test('Verify login with password field is empty and username field with valid data', async ({ page }) => {
    await page.locator('#email').fill("mdeepak.purpleplum@zenus.com")
    await page.locator('#password').fill("")
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualBlankPasswordFieldMessage = await page.getByText('Please enter your password').textContent()
    expect(actualBlankPasswordFieldMessage).toEqual("Please enter your password")
})

test('Verify login with unregistered Credentials', async ({ page }) => {
    await page.locator('#email').fill("mdeepak@zenus.com")
    await page.locator('#password').fill("Ganesh")
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: "Sign in" }).click()
    await page.waitForTimeout(2000)
    const actualUnregisteredUserAccountMessage = await page.getByText('seem to find your account').textContent()
    expect(actualUnregisteredUserAccountMessage).toEqual("We can't seem to find your account")
})