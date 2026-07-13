import {test, Page, expect} from '@playwright/test';

test.skip('Single Window', async ({page, context}) =>{
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html?utm_source=chatgpt.com');

    
    const newWindow = page.waitForEvent('popup');
    await page.locator('#newWindowBtn').click();

    const newWndowPage = await newWindow; 

    await newWndowPage.locator('#firstName').fill("Sanketh");
    await newWndowPage.close();

    await page.getByRole('link', {name: 'HOME'}).click();


})

test('Multiple Windows', async ({page, context}) =>{

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.waitForLoadState();

    const page2 = await context.newPage();
    await page2.goto('https://letcode.in/window?utm_source=chatgpt.com');
    await page2.waitForLoadState();

    const page3 = await context.newPage();
    await page3.goto('https://www.wikipedia.org');
    await page3.waitForLoadState();


    const page4 = await context.newPage();
    await page4.goto('https://www.github.com');
    await page4.waitForLoadState();
    
    const pages = context.pages();
    console.log(pages);

    //Manually created the new tabs for practice 
    let targetPage;
    for(const p of pages){
        if(p.url().includes('https://www.wikipedia.org')){
            targetPage = p;
            break;
        }
    }
    await expect(targetPage!.locator('#js-link-box-pt strong')).toBeVisible();
    

})