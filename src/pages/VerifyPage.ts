import { expect, type Locator, type Page } from '@playwright/test';

export class VerifyPage{

    readonly page: Page;
    readonly verifyText: Locator;

    constructor(page: Page){
        this.page = page;
        this.verifyText = page.locator("//span[normalize-space(.)='Welcome!']");
    };
}