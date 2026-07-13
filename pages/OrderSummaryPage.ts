import { Locator, Page, expect } from "@playwright/test";    

export class OrderSummaryPage{
    readonly page: Page;

    readonly table: Locator;
    readonly tableRows: Locator;

    constructor(page: Page){
        this.page= page;

        this.table= page.locator('.table');
        this.tableRows= this.table.locator('tbody tr');

    }

    async orderSummary(orderId: string){
        await this.tableRows.first().waitFor();
        
        const rowCount = await this.tableRows.count();
            
        for (let i=0; i<rowCount; i++){
            let orderId1 = (await this.tableRows.nth(i).locator('th').innerText()).trim();
            if(orderId1 === orderId) {
            console.log('Order ID: ' + orderId);
            console.log('Order ID found in order history: ' + orderId1);
            await this.tableRows.nth(i).getByRole('button', {name: 'View'}).click();
            break;
            }
            }
            let orderId2 = (await this.page.locator('div.col-text').innerText()).trim();
                console.log('Order ID in order details: ' + orderId2);
                expect(orderId2 === orderId).toBeTruthy();
        
            await this.page.getByRole('button', {name: 'Sign Out'}).click();
        
            await expect(this.page.getByRole('heading', {name: 'Log in'})).toBeVisible();
    }
}