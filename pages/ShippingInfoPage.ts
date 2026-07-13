import { Locator, Page } from "@playwright/test";

export class ShippingInfoPage{
    readonly page: Page;

    readonly creditCardNumber: Locator;
    readonly expiryDateDropDown: Locator;
    readonly cvvCode: Locator;
    readonly nameOnCard: Locator;
    readonly countryTextbox: Locator;
    readonly selectCountry: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page){
        this.page= page;

        this.creditCardNumber= page.getByText('Credit Card Number').locator('..').locator('input');
        this.expiryDateDropDown= page.locator('select.input.ddl');
        this.cvvCode= page.getByText('CVV Code').locator('..').locator('input');
        this.nameOnCard= page.getByText('Name on Card').locator('..').locator('input');
        this.countryTextbox= page.getByRole('textbox', {name: 'Select Country'});
        this.selectCountry= page.locator('.ta-results').getByText(' India',  {exact: true});
        this.placeOrderButton= page.getByText('Place Order');  

    }

    async placeOrder(ccNumber: string, year: string, month: string, cvv: string, nameOnCard: string, 
                     email: string, countryName: string)
    {
        await this.creditCardNumber.fill(ccNumber);
        await this.expiryDateDropDown.first().selectOption(year);
        await this.expiryDateDropDown.nth(1).selectOption(month);
        await this.cvvCode.fill(cvv);
        await this.nameOnCard.fill(nameOnCard);
        const emailTextBox= this.page.getByText(email).locator('..').locator('input').first();
        await emailTextBox.fill(email);
        await this.countryTextbox.click();
        await this.countryTextbox.pressSequentially(countryName);
        await this.selectCountry.click();
        await this.placeOrderButton.click();


        //Capturing the order ID and printing it in console
        const orderId = ((await this.page.locator('.em-spacer-1 .ng-star-inserted').innerText()).replace(/\|/g, '').trim());
        console.log('Order ID: ' + orderId);
        

        await this.page.getByText('Orders History Page').click();
        return orderId;
    }

}