import { expect, type Locator, type Page } from '@playwright/test';

export class SampleFormPage{
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.submitButton = page.locator('#submit');
    }

}