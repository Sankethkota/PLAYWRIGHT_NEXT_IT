import {test} from '@playwright/test';
import { ShippingInfoPage } from '../pages/ShippingInfoPage';

test('Shipping Information', async({page}) =>{
    const shippingInfoPage = new ShippingInfoPage(page);

    const orderId = await shippingInfoPage.placeOrder("3545 4567 4567 4678", "06", "15", "768", "Hitman", 
                                "Pandya1234@gmail.com", "India" );

})