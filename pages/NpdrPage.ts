import { Page, Locator } from '@playwright/test';
import { npdrData } from '../testData/npdrData';

let proposalNo: string;

export class NpdrPage{
    readonly page: Page;
    readonly userIdBox: Locator;
    readonly passwordBox: Locator;
    readonly captchaBox: Locator;
    readonly loginButton: Locator;
    readonly npdrCreateButton: Locator;
    readonly receiptLocationDD: Locator;
    readonly lifeTypeDD: Locator;
    readonly searchByDD: Locator;
    readonly salutationDD: Locator;
    readonly planNameDD: Locator;
    readonly premiumPayingFrequencyDD: Locator;
    readonly isNachColletedDD: Locator;
    readonly firstNameBox: Locator;
    readonly middleNameBox: Locator;
    readonly lastNameBox: Locator;
    readonly laAadhaarLastFourDigitsBox: Locator;
    readonly agentCodeBox: Locator;
    readonly agentSearchButton: Locator;
    readonly nextButton: Locator;
    readonly address1Box: Locator;
    readonly pincodeBox: Locator
    readonly areaBox: Locator;
    readonly mobileBox: Locator;
    readonly regionButton: Locator;
    readonly agreeWhatsapp: Locator;
    readonly nextButtonAddressDetailsPage: Locator;
    readonly amlCollectedDD: Locator;
    readonly laPanNoBox: Locator;
    readonly panCopyReceivedButton: Locator;
    readonly nextButtonAmlDetails: Locator;
    readonly receipetAmountBox: Locator;
    readonly paymentTypeDD: Locator ;
    readonly instrumentAmountBox: Locator;  
    readonly addButton: Locator;
    readonly submitButton: Locator;
    readonly proposalNumber: Locator;
    readonly menuButton: Locator;
    readonly proposalJourneyButton: Locator;
    readonly proposalTypeOption: Locator;
    readonly proposalTypeButton: Locator;
    readonly lifeTypeButton: Locator;
    readonly regularButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userIdBox= page.locator('#txtbxUserID');
        this.passwordBox= page.locator('input#txtbxPassword');
        this.captchaBox= page.locator('#txtbxCaptcha');
        this.loginButton= page.getByRole('button', {name: 'Login'});
        this.npdrCreateButton= page.locator('.iconBox img[alt="Proposal Icon"]').first();
        this.receiptLocationDD= page.locator('[name="NPDRReceiptLocation"]');
        this.lifeTypeDD= page.locator('.ant-select-selector').nth(2);
        this.searchByDD= page.locator('.ant-select-selector').nth(3);
        this.salutationDD= this.page.locator('[name="NPDRLASalutation"]');
        this.planNameDD= page.locator('[name="NPDRPlanName"]');
        this.premiumPayingFrequencyDD= page.locator('[name="NPDRPremiumPayingFrequency"]');
        this.isNachColletedDD= page.locator('[name="NPDRIsNACHCollected"]');
        this.firstNameBox= page.locator('#NPDRLAFirstName');
        this.middleNameBox= page.locator('#NPDRLAMiddleName');
        this.lastNameBox= page.locator('#NPDRLALastName');
        this.laAadhaarLastFourDigitsBox= page.locator('#NPDRLAAadharNo'); 
        this.agentCodeBox= page.getByRole('textbox', {name: 'Agent Code'});
        this.agentSearchButton= page.locator('.ant-input-suffix').first();
        this.nextButton= page.getByRole('button', {name: 'Next'});
        this.address1Box= page.locator('#NPDRAddress1');
        this.pincodeBox= page.locator('#NPDRPincode');
        this.areaBox= page.locator('[name="NPDRArea"]');
        this.mobileBox= page.locator('#NPDRMobile');
        this.regionButton= page.getByRole('button', {name: 'Urban'});
        this.agreeWhatsapp= page.locator('[name="NPDRContactOnWhatsapp"]').last();
        this.nextButtonAddressDetailsPage= page.getByRole('button', {name: 'Next'});
        this.amlCollectedDD= page.locator('[name="NPDRAMLCollected"]');
        this.laPanNoBox= page.getByRole('textbox', {name: 'LA PAN No*'});
        this.panCopyReceivedButton= page.getByRole('button', {name: 'Yes'});
        this.nextButtonAmlDetails= page.getByRole('button', {name: 'Next'});
        this.receipetAmountBox= page.locator('#NPDRReceiptAmount');
        this.paymentTypeDD= page.locator('[name="NPDRPaymentType"]');
        this.instrumentAmountBox= page.locator('#NPDRInstrumentAmountPaidByCashTTAmt');
        this.addButton= page.getByRole('button', {name: 'Add'});
        this.submitButton= page.getByRole('button', {name: 'Submit'});
        this.proposalNumber = this.page.locator('p:has-text("Proposal/Policy No") + h6');
        this.menuButton = page.locator('#headerIcon');
        this.proposalJourneyButton = page.getByText('PROPOSAL JOURNEY', {exact: true});
        this.proposalTypeOption = page.getByText('Non POS', {exact: true});
        this.proposalTypeButton = page.getByText('Individual', {exact: true});
        this.lifeTypeButton = page.getByText('Own Life', {exact: true});
        this.regularButton = page.getByText('Regular', {exact: true});
        this.continueButton = page.getByText('Continue', {exact: true});
    }

    async userLogin(userid : string, password : string, captcha : string){
        await this.page.goto("https://slicuatc.shriramlife.in/statimliastra");
        await this.userIdBox.fill(userid);
        await this.passwordBox.fill(password);
        await this.captchaBox.fill(captcha);
        await this.loginButton.click();
        //await this.page.waitForTimeout(60000);
    }

    async npdrCreation(data : typeof npdrData){
        await this.npdrCreateButton.scrollIntoViewIfNeeded();
        await this.npdrCreateButton.evaluate((el: HTMLElement) => el.click());
        //await this.npdrCreateButton.click({ force: true });

        //Receipt Location DropDown
        await this.receiptLocationDD.click();
        await this.page.getByText(data.receiptLocation, {exact: true}).click();
        //Life Type DropDown
        await this.lifeTypeDD.click();
        await this.page.getByText(data.chooseLifeType, {exact: true}).click();
        //Search By DropDown
        await this.searchByDD.click();
        await this.page.getByText(data.searchBy, {exact: true}).first().click();
        //Salutation DropDown   
        await this.salutationDD.click();
        const salutationOption = this.page.getByText(data.salutation, {exact: true}).last();
        await salutationOption.scrollIntoViewIfNeeded();
        await salutationOption.click({force: true});
        //First Name
        await this.firstNameBox.click();
        await this.firstNameBox.fill(data.firstName);
        //Middle Name
        await this.middleNameBox.click();
        await this.middleNameBox.fill(data.middleName);
        //Last Name
        await this.lastNameBox.click();
        await this.lastNameBox.fill(data.lastName);
        //LA Aadhaar Last Four Digits
        await this.laAadhaarLastFourDigitsBox.click();
        await this.laAadhaarLastFourDigitsBox.fill(data.laAadhaarLastFourDigits);
        //Plan Name DropDown
        await this.planNameDD.click();
        const planNameOption = this.page.getByText(data.planName, {exact: true}).last();
        await planNameOption.scrollIntoViewIfNeeded();
        await planNameOption.click({force: true});
        //Premium Paying Frequency DropDown
        await this.page.keyboard.press('Tab');
        await this.premiumPayingFrequencyDD.click();
        const premiumPayingFrequencyOption = this.page.getByText(data.premiumPayingFrequency, {exact: true}).last();
        await premiumPayingFrequencyOption.scrollIntoViewIfNeeded();
        await premiumPayingFrequencyOption.click({force: true});
        //Nach Collected DropDown
        await this.isNachColletedDD.click();
        const nachCollectedOption = this.page.getByText(data.nachCollected, {
            exact: true}).last();
        await nachCollectedOption.scrollIntoViewIfNeeded();
        await nachCollectedOption.click({force: true});
        //Enter Agent Code
        await this.page.keyboard.press('Tab');
        await this.agentCodeBox.fill(data.agentCode);   
        await this.agentSearchButton.click();
        //Click Next Button
        await this.nextButton.click();

        //Address Details Page
        //Fill Address1
        await this.address1Box.fill(data.address1);
        //Fill Pincode
        await this.pincodeBox.fill(data.pincode);
        //Fill Area
        await this.areaBox.click();
        const areaOption = this.page.getByText(data.area, {exact: true}).last();
        await areaOption.scrollIntoViewIfNeeded();
        await areaOption.click({force: true});
        //Fill Mobile
        await this.mobileBox.fill(data.mobile);
        //Select Region
        await this.regionButton.click();    
        //Agree for Whatsapp
        await this.agreeWhatsapp.click();
        //Click Next Button
        await this.nextButtonAddressDetailsPage.click();

        //AML Collected DropDown
        //Fill AML Collected
        await this.amlCollectedDD.click();
        const amlCollectedOption = this.page.getByText(data.amlCollected, {exact: true}).last();
        await amlCollectedOption.scrollIntoViewIfNeeded();
        await amlCollectedOption.click({force: true});
        //Fill LA PAN No
        await this.laPanNoBox.fill(data.laPanNo);
        //Click PAN Copy Received Button
        await this.panCopyReceivedButton.click();
        //Click Next Button
        await this.nextButtonAmlDetails.click();

        //Fill Receipet Amount
        await this.receipetAmountBox.fill(data.receipetAmount);
        //Select Payment Type
        await this.paymentTypeDD.click();
        const paymentTypeOption = this.page.getByText(data.paymentType, {exact: true}).last();
        await paymentTypeOption.scrollIntoViewIfNeeded();
        await paymentTypeOption.click({force: true});
        //Fill Instrument Amount
        await this.instrumentAmountBox.fill(data.instrumentAmount); 
        //Click Add Button
        await this.addButton.click();
        //Click Submit Button
        await this.submitButton.click();

        await this.page.waitForLoadState('domcontentloaded');

        //Storing Proposal Number in a variable and printing in console
        await this.page.getByText('Proposal/Policy No').waitFor({ state: 'visible', timeout: 60000 });
        
        proposalNo = await this.proposalNumber.innerText();

        console.log(proposalNo);

        //Navigate to Proposal Journey Page
        await this.menuButton.click();
        await this.proposalJourneyButton.click();

        await this.page.waitForLoadState('domcontentloaded');

        //Click on the created proposal in Proposal Journey Page using the stored proposal number
        await this.page.getByText(`Proposal no: ${proposalNo}`).waitFor();
        await this.page.getByText(`Proposal no: ${proposalNo}`).click();

        //Choose Proposal Type
        await this.proposalTypeOption.click();

        //Click on Individual Proposal Type
        await this.proposalTypeButton.click();

        //Click on Life Type Own Life
        await this.lifeTypeButton.click();

        //Click on Regular Button
        await this.regularButton.click();

        //Click on Continue Button
        await this.continueButton.click();

        await this.page.waitForLoadState('domcontentloaded');

        


    }

    
}