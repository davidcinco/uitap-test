import { test, expect } from '@playwright/test';

test('Verify Page Title', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/verifytext');
    const welcomeText = page.locator('Welcome', { exact: false });
    await expect(welcomeText).toContainText('Welcome'); 
});