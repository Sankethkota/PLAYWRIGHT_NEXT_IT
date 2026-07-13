import { Page, Locator } from '@playwright/test';
import { npdrData } from '../testData/npdrData';

export class ProposalJourney{
    readonly page: Page 
    readonly proposalNumber: Locator;

    constructor(page: Page){
        this.page = page;
        this.proposalNumber = page.locator('#lblProposalNo');



    }
};