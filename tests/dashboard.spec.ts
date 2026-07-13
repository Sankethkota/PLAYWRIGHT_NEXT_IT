import {test} from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('Add to Cart and Checkout', async({page}) =>{

    const dashboardPage = new DashboardPage(page);

    await dashboardPage.addToCart("ZARA COAT 3");
})