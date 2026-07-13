import {Page, Locator} from '@playwright/test'; 

export class RegistrationPage{
    readonly page:Page;

    readonly registerButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly userEmail: Locator;
    readonly userMobile: Locator;
    readonly occupationDropdown: Locator;
    readonly genderSelection: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly checkBox: Locator;
    readonly confirmRegistration: Locator;

    
    constructor(page:Page){
        this.page = page;

        this.registerButton=  page.getByRole('link', { name: 'Register' });
        this.firstName= page.locator('#firstName');
        this.lastName= page.locator('#lastName');
        this.userEmail= page.locator('#userEmail');  
        this.userMobile= page.locator('#userMobile');
        this.occupationDropdown= page.locator('.custom-select');
        this.genderSelection= page.locator("input[value='Male']");
        this.password= page.getByRole('textbox', {name: 'Password'});    
        this.confirmPassword= page.getByRole('textbox', {name: 'Confirm Password'});
        this.checkBox= page.getByRole('checkbox');
        this.confirmRegistration= page.getByRole('button', {name: 'Register'});

    }


    async goto(url: string){
        await this.page.goto(url);
    }

    async registerUser(
        fName: string, lName: string, email: string, mobile: string, occupation: string,
        password: string, confirmPassword: string)
        {
        await this.registerButton.click();
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.userEmail.fill(email);
        await this.userMobile.fill(mobile);
        await this.occupationDropdown.selectOption(occupation);
        await this.genderSelection.check();
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.checkBox.check();
        await this.confirmRegistration.click();
    }
}