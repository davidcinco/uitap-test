import { expect, type Locator, type Page } from '@playwright/test';

export class VerifyPage{

    readonly page: Page;
    readonly welcomeText: Locator;

    constructor(page: Page){
        this.page = page;
        this.welcomeText = page.locator('div.bg-primary');
    };

    async textToContain(expectedText: string){
        await expect(this.welcomeText).toContainText(expectedText);
    } 

    async incorrectTextToContain(expectedText: string){
        await expect(this.welcomeText).not.toContainText(expectedText);
    } 

}