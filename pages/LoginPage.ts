import { Locator, Page } from "@playwright/test";    

export class LoginPage{
    readonly page: Page;

    readonly userEmail: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;

        this.userEmail= page.locator('#userEmail');
        this.userPassword= page.locator('#userPassword');
        this.loginButton= page.getByRole('button', {name: 'Login'});
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async loginUser(email: string, password: string){
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.loginButton.click();
    }
}

//addi g comment for git practice