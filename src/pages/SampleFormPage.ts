import { expect, type Locator, type Page } from '@playwright/test';

//Page Object Model (POM) class for my Sample Form Page section of UITap
export class SampleFormPage {
    //SampleFormPage's Attributes class
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly loginButton: Locator
    readonly loginStatus: Locator;

    //Our constructor method for SampleFormPage
    constructor(page: Page){
        this.page = page;
        this.inputUsername = page.locator('input[name="UserName"]');
        this.inputPassword = page.locator('input[name="Password"]');
        this.loginButton = page.locator('#login');
        this.loginStatus = page.locator('#loginstatus');
    }

    //Method to fill and submit login button on SampleFormPage
    async sampleFormLogin(username: string, password: string){
        //inserting valid username and password
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        //Click on Login button
        await this.loginButton.click();

    }

    //Method to perfom a Sign Out / Log Out action on sample form page
    async sampleFormSignOut(){
        //Click on Sign Out button
        if (await this.loginButton.textContent() === 'Log Out') {
            await this.loginButton.click();
        }
    }
}