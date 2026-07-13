import {Locator, Page} from '@playwright/test';

export class DashboardPage{
    readonly page: Page;

    readonly allProducts: Locator;
    readonly addToCartButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;

        this.allProducts= this.page.locator('div.card-body');
        this.addToCartButton= this.page.getByRole('button', {name: 'Cart 1'});
        this.checkoutButton= this.page.getByRole('button', {name: 'Checkout'});

    }

    async addToCart(productName: string){
        await this.allProducts.first().waitFor();
        const productCount = await this.allProducts.count();
        console.log('Total products: ' + productCount); 

        for (let i=0; i<productCount; i++) {
        let text = await this.allProducts.nth(i).locator('b').innerText();
        if (text == productName) {
            await this.allProducts.nth(i).getByRole('button', {name: 'Add To Cart'}).click();
            break;
            }

        }

    await this.addToCartButton.click();
    await this.checkoutButton.click();
    }
     
}