import {test, expect} from '@playwright/test';

//Hook to navigate to the home page before each test
test.beforeEach(async ({page}) => {
  await page.goto('http://www.uitestingplayground.com/');
});


//Test suite for UITap sample app
test.describe('Sample App Testing', () => {

    test.beforeEach(async ({page}) => {
        //Click on Sample App link to navigate to the UITap sample app each time before running the test cases from UITap test suite
        await page.getByRole('link', {name: 'Sample App'}).click();
    });

    //Test case to verify login functionality with valid credentials - Happy Path case
    test('Login with valid credentials', async ({page}) => {
        //inserting valid username and password
        await page.locator('input[name="UserName"]').fill('testuser');
        await page.locator('input[name="Password"]').fill('pwd');

        //Click on Login button
        await page.locator('#login').click();

        //Assert that the success message is visible after login
        await expect(page.locator('#loginstatus')).toHaveText('Welcome, testuser!');
    });

    //Test case to verify login functionality with empty username - Negative Path case
    test('Login with empty username credentials', async ({page}) => {
        //inserting invalid username and password
        // await page.locator('input[name="UserName"]').fill('');
        await page.locator('input[name="Password"]').fill('pwd');

        //Click on Login button
        await page.locator('#login').click();

        //Assert that the error message is visible after login
        await expect(page.locator('#loginstatus')).toHaveText('Invalid username/password');
    });

});
