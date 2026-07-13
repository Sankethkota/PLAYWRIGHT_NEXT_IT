import {test} from '@playwright/test';
import { OrderSummaryPage } from '../pages/OrderSummaryPage';

test('Order Summary', async({page}) =>{
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderSummaryPage();
})