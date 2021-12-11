import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import LoggedinPage from '../pageobjects/loggedin.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I accept cookies consent$/, async () => {
    await LoginPage.acceptCookiesPopup();
});

Given(/^I clear cache and cookies$/, async () => {
    await LoginPage.clearCacheAndCookies();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should (\w+) successfully with (\w+) credentials$/, async (permitDecision,typeOfCredentials) => {
    if (typeOfCredentials==="valid")
        await expect(LoggedinPage.navLinkMessages).toBeExisting();
    else{
        //permitDecision is not used but was required for reuse of step definition, to make sense in writing test and also reporting
        await expect(LoginPage.errorMessage).toBeExisting();    
    }
});

When(/^I enter following details in form:$/, async(datatable)=>{
    await LoginPage.fillFormViaLabelNames(datatable);
});

When(/^I click login$/, async()=>{
    await LoginPage.clickLogin();
});
