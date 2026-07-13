import { test, expect } from '@playwright/test';

test.skip('Register User', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('#firstName').fill('Rohit');
    await page.locator('#lastName').fill('Sharma');
    await page.locator('#userEmail').fill('rohit.sharma12@example.com');  
    await page.locator('#userMobile').fill('9876543210');
    await page.locator('.custom-select').selectOption('Doctor');
    await page.locator("input[value='Male']").check();
    await page.getByRole('textbox', {name: 'Password'}).fill('Password123');    
    await page.getByRole('textbox', {name: 'Confirm Password'}).fill('Password123');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', {name: 'Register'}).click();
});

test('Assignment', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('Hitman7678@gmail.com');
    await page.locator('#userPassword').fill('Asdf@123#');
    await page.getByRole('button', {name: 'Login'}).click();

    //Products search
    const products = await page.locator('div.card-body');
    await products.first().waitFor();
    const productCount = await products.count();
    console.log('Total products: ' + productCount); 

    //Finding the product "ZARA COAT 3" and adding it to the cart
    for (let i=0; i<productCount; i++) {
        let text = await products.nth(i).locator('b').innerText();
        if (text == 'ZARA COAT 3') {
            await products.nth(i).getByRole('button', {name: 'Add To Cart'}).click();
            break;
        }
    }

    //Clicking on the cart and verifying the product is added and click checkout
    await page.getByRole('button', {name: 'Cart 1'}).click();
    await page.getByRole('button', {name: 'Checkout'}).click();

    //Fill the data in checkout page and place the order
    await page.getByText('Credit Card Number').locator('..').locator('input').fill('4111 1111 1111 1111');
    const expiryDropdowns = await page.locator('select.input.ddl');
    await expiryDropdowns.first().selectOption('10');
    await expiryDropdowns.nth(1).selectOption('25');
    await page.getByText('CVV Code').locator('..').locator('input').fill('411');
    await page.getByText('Name on Card').locator('..').locator('input').fill('Rohit Sharma');
    await page.getByText('Hitman7678@gmail.com').locator('..').locator('input').first().fill('hitman7678@gmail.com');
    let indDd = await page.getByRole('textbox', {name: 'Select Country'});
    await indDd.click();
    await indDd.pressSequentially('India');
    await page.locator('.ta-results').getByText(' India',  {exact: true}).click();

    await page.getByText('Place Order').click();  
    
    //Capturing the order ID and printing it in console
    const orderId = ((await page.locator('.em-spacer-1 .ng-star-inserted').innerText()).replace(/\|/g, '').trim());
    console.log('Order ID: ' + orderId);

    //Cliking on order history page link
    await page.getByText('Orders History Page').click();

    const table = page.locator('.table');
    const rows = await table.locator('tbody tr');
    await rows.first().waitFor();

    const rowCount = await rows.count();
    
    for (let i=0; i<rowCount; i++){
        let orderId1 = (await rows.nth(i).locator('th').innerText()).trim();
        if(orderId1 === orderId) {
        console.log('Order ID: ' + orderId);
        console.log('Order ID found in order history: ' + orderId1);
        await rows.nth(i).getByRole('button', {name: 'View'}).click();
        break;
        }
    }
    let orderId2 = (await page.locator('div.col-text').innerText()).trim();
        console.log('Order ID in order details: ' + orderId2);
        expect(orderId2 === orderId).toBeTruthy();

    await page.getByRole('button', {name: 'Sign Out'}).click();

    await expect(page.getByRole('heading', {name: 'Log in'})).toBeVisible();
});