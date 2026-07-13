import {test} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

test('User Registration', async({page}) =>{
    let url: string = "https://rahulshettyacademy.com/client/";

    const registrationPage = new RegistrationPage(page);

    await registrationPage.goto(url);
    await registrationPage.registerUser("Shreyas", "Iyer", "Iyer@gmail.com", "8666454786", "Doctor", 
                                        "Iyer@123", "Iyer@123");

})