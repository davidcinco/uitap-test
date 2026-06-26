import { test, expect } from '@playwright/test';
import { VerifyPage } from '../src/pages/VerifyPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/verifytext');
});

test.describe('Verify Page Tests', () => {

    test('Inserting correct text', async ({ page }) => {
        await page.goto('http://www.uitestingplayground.com/verifytext');
        const verifyPage = new VerifyPage(page);
        await verifyPage.textToContain('Welcome');
    });

    test('Inserting incorrect text', async ({ page }) => {
        await page.goto('http://www.uitestingplayground.com/verifytext');
        const verifyPage = new VerifyPage(page);
        await verifyPage.incorrectTextToContain('Hello');
    });


});