import { test, expect } from '@playwright/test';

test.skip('Simple Alert', async ({ page }) => {
  await page.goto('https://letcode.in/alert?utm_source=chatgpt.com');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type())
        await dialog.accept();
    });
    await page.locator('#accept').click();
});

test.skip('Confirm Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type())
        await dialog.dismiss();
    });
    await page.locator("[onclick='jsConfirm()']").click();
    console.log(await page.locator('#result').innerText());
});

test('Prompt Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept('Sanketh');
    });
    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    await expect(page.locator('#result')).toHaveText('You entered: Sanketh');
});


