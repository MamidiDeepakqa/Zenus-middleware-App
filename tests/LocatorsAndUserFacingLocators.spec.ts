import { expect, test } from '@playwright/test'

test("Verify login of OrangeHRM", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    // await page.getByRole('textbox', {name : "Username"}).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


    // await page.getByText('My Info').click()

    // await page.getByLabel('Username').click()

    // await page.getByPlaceholder('Password').click()

    // await page.getByText('Login').first().click()

    // await page.getByTitle('OrangeHRM').click()

    // await page.locator('input')
    // await page.locator('#input')
    // await page.locator('.input')
    // await page.locator('[placeholder="username"]')
    // await page.locator('[class = "ddsdfa adsas adssd"]')
    // await page.locator('input[placeholder="user"][hbUser]')
    // await page.locator('//*[@id="input"]')



    // await page.locator('input')
    // await page.locator('#id')
    // await page.locator('.class')
    // await page.locator('[placeholder ="inputValue"]')
    // await page.locator('[class="sdfdsf sfdsf sfdsfds"]')
    // await page.locator('input[placeholder="value"][nbvalue]')
    // await page.locator(':text("using")')
    // await page.locator(':text-is("user data on the page')')

    // await page.getByRole('button', {name : "sign In"}).click()
    // await page.getByLabel('EMI').click()
    // await page.getByText('userData').click()
    // await page.getByTitle('Menu').click()
    // await page.getByPlaceholder('email').click()
    // await page.getByTestId('sign in').click

    // //child elements
    // await page.locator('cd-card rd-card').click()

    // await page.locator('cd-card').locator('rd-card').click()

    // await page.locator('cd-card').getByRole("button", {name : "rd-card"}).click()

    // await page.locator('cd-card').nth(3).locator('rd-card').click()


    //parent elements
    await page.locator('nb-card', { hasText: "user Data" }).getByRole("textbox", { name: "Email" }).click()
    await page.locator('nb-card', { has: page.locator("#inputName") }).getByRole("textbox", { name: "Email" }).click()

    await page.locator('nb-card').filter({ hasText: "user Info" }).getByRole("textbox", { name: "Email" }).click()
    await page.locator('nb-card').filter({ has: page.locator(".password") }).getByPlaceholder("joe des").click()



    // playwright locators.............
    await page.locator('input')
    await page.locator('#input')
    await page.locator('.class')
    await page.locator('[placeholder="username]')
    await page.locator('//*[@id="username"]')
    await page.locator('input[placeholder="username][nb-card]')
    await page.locator(':text("username)')
    await page.locator(':text-is("username on the page")')


    // User facing Locators
    await page.getByRole("button", { name: "Sign in" }).click()
    await page.getByLabel('username').click()
    await page.getByPlaceholder('username').click()
    await page.getByTestId('username').click()
    await page.getByText('usernameText').click()
    await page.getByTitle('pageTitle').click()


    //Child elements
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 1")').click()

    await page.locator('nb-card').getByRole("button", { name: "Sign in" }).click()
    await page.locator('nb-card').nth(3).getByRole("button", { name: "Sign in" }).click()

    // parent Elements
    await page.locator('nb-card', { hasText: "using username" }).getByRole("textbox", { name: "email" }).click()
    await page.locator('nb-card', { has: page.locator("#input") }).getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card').filter({ hasText: "basic form" }).getByRole("textbox", { name: "email" }).click()
    await page.locator('nb-card').filter({ has: page.locator("#input") }).getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card').filter({ hasText: "user info" }).filter({ hasText: "color" }).getByRole("textbox", { name: "email" }).click()



    //child locators..........
    await page.locator('nb-card nb-radio :text("user info")').click()
    await page.locator('nb-card').locator('nb-radio').getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card').nth(2).getByRole("textbox", { name: "email" }).click()

    // parent Elements....
    await page.locator('nb-card', { hasText: "using data" }).getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card', { has: page.locator("#input") }).getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card').filter({ hasText: "user info" }).getByRole("textbox", { name: "email" }).click()
    await page.locator('nb-card').filter({ has: page.locator(".class") }).getByRole("textbox", { name: "email" }).click()

    await page.locator('nb-card').filter({ has: page.locator(".checkbox") }).filter({ hasText: "Sign in" }).getByRole("textbox", { name: "email" }).click()


})  