import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ShippingInfoPage } from '../pages/ShippingInfoPage';
import { OrderSummaryPage } from '../pages/OrderSummaryPage';

test('Place Order E2E Flow', async ({ page }) => {

    const url = "https://rahulshettyacademy.com/client/";

    // Login Page
    const loginPage = new LoginPage(page);

    await loginPage.goto(url);

    await loginPage.loginUser(
        "Pandya1234@gmail.com",
        "Asdf@123#"
    );

    // Dashboard Page
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.addToCart("ZARA COAT 3");

    // Shipping Info Page
    const shippingInfoPage = new ShippingInfoPage(page);

    const orderId = await shippingInfoPage.placeOrder(
        "3545 4567 4567 4678",
        "06",
        "15",
        "768",
        "Hitman",
        "Pandya1234@gmail.com",
        "India"
    );

    // Order Summary Page
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderSummaryPage.orderSummary(orderId);

});