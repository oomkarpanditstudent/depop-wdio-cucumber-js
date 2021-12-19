import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import LoggedinPage from '../pageobjects/loggedin.page';
import LoginFacebookPage from '../pageobjects/login.facebook.page';
import config from '../../config/config';

const pages = {
    login: LoginPage,
    Facebook:LoginFacebookPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I accept cookies consent$/, async () => {
    await LoginPage.acceptCookiesPopup();
});

Given(/^I accept Facebook cookies consent$/, async () => {
    await LoginFacebookPage.acceptFacebookCookiesPopup();
});

Given(/^I clear cache and cookies$/, async () => {
    await LoginPage.clearCacheAndCookies();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login on Facebook with (.+) and (.+)$/, async (email, password) => {
    await LoginFacebookPage.loginFacebook(email, password);
});

When(/^I enter following details in form:$/, async(datatable)=>{
    await LoginPage.fillFormViaLabelNames(datatable);
});

When(/^I click login$/, async()=>{
    await LoginPage.clickLogin();
});

When(/^I choose Facebook option for login$/, async()=>{
    await LoginPage.clickFacebookLoginOption();
});

When(/^I login on Facebook directly using cookies$/, async()=>{
    await LoginFacebookPage.openFacebookUsingCookies();
});
//
Then(/^I should (\w+) successfully with (\w+) credentials$/, async (permitDecision,typeOfCredentials) => {
    switch(typeOfCredentials){ 
        case "valid": 
                await expect(LoggedinPage.navLinkMessages).toBeExisting();
                break;
        case "facebook":
                await expect(LoggedinPage.inputSearchOnFacebook).toBeExisting(); 
                break;
        case "depopViaFacebook":
                await expect(LoggedinPage.inputSearchOnFacebook).toBeExisting(); // to be updated
                break;
        case "invalid":
               await expect(LoginPage.errorMessage).toBeExisting(); 
               break;
        default:
                //to be defined   
      }
});

Then(/^I capture Facebook Cookies and store them$/, async () => {
    LoginFacebookPage.storeCookies(config.fb_cookie_file);
});