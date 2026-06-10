import {test, expect} from '@playwright/test';
import { SampleFormPage } from '../src/pages/SampleFormPage';

//Hook to navigate to the home page before each test
test.beforeEach(async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', {name: 'Sample App'}).click();
});

//Test suite for UITap sample app
test.describe('Sample App Testing Log In', () => {

    //Test case to verify login functionality with valid credentials - Happy Path case
    test('Log In with valid credentials', async ({ page }) => {
        //Using POM class to perform login action
        const sampleFormPage = new SampleFormPage(page);
        await sampleFormPage.sampleFormLogin('testuser', 'pwd');
        //Assert that the success message is visible after login
        await expect(sampleFormPage.loginStatus).toHaveText('Welcome, testuser!');
    });

    //Test case to verify login functionality with empty username - Negative Path case
    test('Log In with empty username credentials', async ({ page }) => {
        //Using POM class to perform login action
        const sampleFormPage = new SampleFormPage(page);
        await sampleFormPage.sampleFormLogin('', 'pwd');
        //Assert that the error message is visible after login
        await expect(sampleFormPage.loginStatus).toHaveText('Invalid username/password');
    });
});

//Test suite for UITap sample app - Sign Out functionality
test.describe('Sample App Sign Out Testing', () => {

    test("Sign Out after successful login", async ({ page }) => {
        //Using POM class to perform login action
        const sampleFormPage = new SampleFormPage(page);
        await sampleFormPage.sampleFormLogin('testuser', 'pwd');
        //Perform Sign Out action
        await sampleFormPage.sampleFormSignOut();
        //Assert that the user is signed out successfully
        await expect(sampleFormPage.loginStatus).toHaveText('User logged out.');
    });
});
