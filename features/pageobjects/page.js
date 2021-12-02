/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get btnAcceptCookie() {
        return $('[data-testid="cookieBanner__acceptAllButton"]');
     }
    open(path) {
        return browser.url(browser.options.baseUrl+path);
    }
    
    async acceptCookiesPopup() {
        await this.waitForUntil(this.btnAcceptCookie);
        await this.btnAcceptCookie.click();
    }

    async waitForUntil (element) {
        await browser.waitUntil(async function() {return await element.isDisplayed()},
                {
                    timeout: 60000,
                    timeoutMsg: "Expected to see "+element.selector+" visible on page",
                    interval: 3000
                });
      }
}
