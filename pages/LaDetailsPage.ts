import { Locator, Page } from "@playwright/test";

export class LaDetailsPage {

    readonly page: Page;

    readonly salutationDD: Locator;
    readonly firstNameBox: Locator;
    readonly middleNameBox: Locator;
    readonly lastNameBox: Locator;
    readonly dobBox: Locator;
    readonly fatherNameBox: Locator;
    readonly aadhaarBox: Locator;
    readonly panNumberBox: Locator;
    readonly incomeRangeDD: Locator;
    readonly actualIncome: Locator;
    readonly preferredLanguageDD: Locator;
    readonly educationalQualificationDD: Locator;
    readonly objectiveOfInsuranceDD: Locator;
    readonly riskAppetiteDD: Locator;
    readonly laOccupationDD: Locator;
    readonly nationalityDD: Locator;
    readonly laOccupationSubCategoryDD: Locator;

    readonly nextButton: Locator;

    constructor(page: Page){

        this.page = page;
        this.salutationDD = page.locator('[name="LATitle"]');
        this.firstNameBox = page.locator('#LAFN');
        this.middleNameBox = page.locator('#LAMN');
        this.lastNameBox = page.locator('#LALN');
        this.dobBox = page.locator('[name="LADOB"]');
        this.fatherNameBox = page.locator('#LAFS');
        this.aadhaarBox = page.locator('#LAAadNum');
        this.panNumberBox = page.locator('#LAPAN');
        this.incomeRangeDD = page.locator('#LAAnInR');
        this.actualIncome = page.locator('#LAAnIn');
        this.preferredLanguageDD = page.locator('[name="LAPL"]');
        this.educationalQualificationDD = page.locator('[name="LAEduQual"]');
        this.objectiveOfInsuranceDD = page.locator('[name="LAOBJINS"]');
        this.riskAppetiteDD = page.locator('[name="LARisk_App"]');
        this.laOccupationDD = page.locator('[name="Occ"]');
        this.laOccupationSubCategoryDD = page.locator('[name="SubOcc"]');
        this.nationalityDD = page.locator('[name="Nationality"]');
        this.nextButton = page.getByRole('button', { name: 'Next' });

    }

    async fillLADetails(data: any){

        // Salutation
        await this.salutationDD.click();

        const salutationOption = this.page.getByText(data.salutation, { exact: true });
        await salutationOption.click({ force: true });

        // First Name
        await this.firstNameBox.fill(data.firstName);

        // Middle Name
        await this.middleNameBox.fill(data.middleName);

        // Last Name
        await this.lastNameBox.fill(data.lastName);

        // DOB
        await this.dobBox.fill(data.dob);
        await this.page.keyboard.press('Enter');

        // Gender
        await this.page.getByText(data.gender, { exact: true }).click();

        // Father Name
        await this.fatherNameBox.fill(data.fatherName);

        // Aadhaar
        await this.aadhaarBox.fill(data.aadhaarNumber);

        // PAN
        await this.panNumberBox.fill(data.panNumber);

        // Income Range
        await this.incomeRangeDD.click();

        const incomeRangeOption = this.page
            .getByText(data.incomeRange, { exact: true });
        await incomeRangeOption.click({ force: true });
        await this.page.keyboard.press('Tab');

        //Actual Income
        await this.actualIncome.fill(data.actualIncome);

        await incomeRangeOption.click({ force: true });

        // Preferred Communication Language
        await this.preferredLanguageDD.click();

        const preferredLanguageOption = this.page.getByText(data.preferredLanguage, { exact: true }).last();
        await preferredLanguageOption.click({ force: true });

        // Educational Qualification
        await this.educationalQualificationDD.click();

        const educationalQualificationOption = this.page
            .getByText(data.educationalQualification, { exact: true })
            .last();

        await educationalQualificationOption.click({ force: true });

        // Objective Of Insurance
        await this.objectiveOfInsuranceDD.click();

        const objectiveOfInsuranceOption = this.page
            .getByText(data.objectiveOfInsurance, { exact: true })
            .last();

        await objectiveOfInsuranceOption.click({ force: true });

        // PEP Status
        await this.page
            .getByText(data.pepStatus, { exact: true })
            .click();

        // Risk Appetite
        await this.riskAppetiteDD.click();

        const riskAppetiteOption = this.page
            .getByText(data.riskAppetite, { exact: true })
            .last();

        await riskAppetiteOption.click({ force: true });

        // Disability Status
        await this.page
            .getByText(data.disabilityStatus, { exact: true })
            .click();

        // LA Occupation
        await this.laOccupationDD.click();

        const laOccupationOption = this.page
            .getByText(data.laOccupation, { exact: true })
            .last();

        await laOccupationOption.click({ force: true });

        //LA Occupation Sub Category
        await this.laOccupationSubCategoryDD.click();

        const laOccupationSubCategoryOption = this.page
            .getByText(data.laOccupationSubCategory, { exact: true })
            .last();

        await laOccupationSubCategoryOption.click({ force: true });

        // EIA Status
        await this.page
            .getByText(data.eiaStatus, { exact: true })
            .click();

        // Nationality
        await this.nationalityDD.click();

        const nationalityOption = this.page
            .getByText(data.nationality, { exact: true })
            .last();

        await nationalityOption.click({ force: true });

        // Next Button
        await this.nextButton.click();

    }

}

