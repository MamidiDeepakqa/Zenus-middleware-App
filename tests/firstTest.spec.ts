import {test} from '@playwright/test'

test.describe('suite 1',()=>{
test.beforeEach(async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByText('Forgot your password?').click()
})

test('the first test',{
   annotation : {
      type : 'sanity',
      description : "Verify clicking on the forgot your password link."
   }
},async({page})=>{
  await page.close()
})

test('the second test',{
   annotation : {
      type : 'sanity',
      description : "Verify landing on the reset password page."
   }
},async({page})=>{
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  await page.close()
})
})

test.describe('suite 2',()=>{
test.beforeEach(async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByText('Forgot your password?').click()
})

test('the first test',{
   annotation : {
      type : 'sanity',
      description : "Verify clicking on the forgot your password link."
   }
},async({page})=>{
  await page.close()
})

test('the second test',{
   annotation : {
      type : 'sanity',
      description : "Verify landing on the reset password page."
   }
},async({page})=>{
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  await page.close()
})
})