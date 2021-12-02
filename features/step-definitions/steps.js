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

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a user avatar$/, async () => {
    await expect(LoggedinPage.avatar).toBeExisting();
});

