import {test} from  '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User Login', async({page}) =>{
    let url: string = "https://rahulshettyacademy.com/client/";

    const loginPage = new LoginPage(page);

    await loginPage.goto(url);
    await loginPage.loginUser("Pandya1234@gmail.com", "Asdf@123#");
})