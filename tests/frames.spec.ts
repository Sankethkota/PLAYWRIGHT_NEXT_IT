import {test} from '@playwright/test';

test('Frames', async ({ page }) => {
    await page.goto('https://letcode.in/frame?utm_source=chatgpt.com');

    const framePage = page.frameLocator('#firstFr');
    await framePage.locator('.field input').first().fill("Sanketh");

    const innerFrame = framePage.frameLocator(`[src='innerframe']`);
    await innerFrame.locator(`[name='email']`).fill('test@gmail.com');

});