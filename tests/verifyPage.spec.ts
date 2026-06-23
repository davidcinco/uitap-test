import { test, expect } from '@playwright/test';
import { VerifyPage } from '../src/pages/VerifyPage';

test('Verify Page Title', async ({ page }) => {

    await page.goto('http://www.uitestingplayground.com/verifytext');
    const verifyPage = new VerifyPage(page);
    await verifyPage.expectWelcomeTextToContain('Welcome');

});