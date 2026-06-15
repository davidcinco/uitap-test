import {test, expect} from '@playwright/test';
import { SampleFormPage } from '../src/pages/SampleFormPage';
import { INVALID_USER, VALID_USER } from '../src/utils/test-data/users';

//Hook to navigate to the home page before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', {name: 'Sample App'}).click();
});

test.describe('Sample App Testing Log In', () => {
    let sampleFormPage: SampleFormPage;

    test.beforeEach(async ({ page }) => {
        sampleFormPage = new SampleFormPage(page);
    });

    test('Log In with valid credentials', async ({ page }) => {
        await sampleFormPage.sampleFormLogin(VALID_USER.username, VALID_USER.password);
        await expect(sampleFormPage.loginStatus).toHaveText(`Welcome, ${VALID_USER.username}!`);
    });

    test('Log In with invalid credentials', async ({ page }) => {
        await sampleFormPage.sampleFormLogin(INVALID_USER.username, INVALID_USER.password);
        await expect(sampleFormPage.loginStatus).toHaveText('Invalid username/password');
    });
});

test.describe('Sample App Sign Out Testing', () => {
    let sampleFormPage: SampleFormPage;
    
    test.beforeEach(async ({ page }) => {
        sampleFormPage = new SampleFormPage(page);
    });

    test("Sign Out after successful login", async ({ page }) => {
        await sampleFormPage.sampleFormLogin(VALID_USER.username, VALID_USER.password);
        await sampleFormPage.sampleFormSignOut();
        await expect(sampleFormPage.loginStatus).toHaveText('User logged out.');
    });
});
