/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import cucumberJson from 'wdio-cucumberjs-json-reporter';
const fs =require('fs');

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get btnAcceptCookie() {
        return $('[data-testid="cookieBanner__acceptAllButton"]');
     }
    async open(path) {
        return await browser.url(browser.options.baseUrl+path);
    }
    
    async acceptCookiesPopup() {
        await this.waitForUntil(await this.btnAcceptCookie);
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

      async fillFormViaLabelNames(datatable){ // passing the cucumber data table as argument 
        const datatablemap= datatable.rows().map(item=>{return[item[0],item[1]];}); // converted the cucumber datatable with map into a const 2D array
        const allInputChildItems= await $$('label'); // passed every single label element from this page into a const
        for (let i = 0; i < datatablemap.length; i++) { // outer loop to go thru each field from cucumber data table (feature file)
             for (let ii = 0; ii < allInputChildItems.length; ii++) { //inner loop to check each item one by one from data table and find a match on corresponding page element
                if (datatablemap[i][0]===await allInputChildItems[ii].getText()){ // if a match is found, depending on attribute type or tag type relevant action is carried out further
                        const getIdForTextBox= ("#"+await allInputChildItems[ii].getAttribute('for'));//creating locator using for attribute of label
                         switch(await $(getIdForTextBox).getAttribute('type')){ //deciding what type of input field is there to use appropriate action
                          case "text":
                          case "password": // if input field is text or password
                                  await $(getIdForTextBox).setValue(datatablemap[i][1]);
                                  break;
                          case "checkbox":
                                  await $(getIdForTextBox).click();
                                  break;
                          default:
                                  if (await $(getIdForTextBox).getTagName()==='select'){
                                  $(getIdForTextBox).selectByVisibleText(datatablemap[i][1]);
                                }
                        }
                }
          } 
        }
         cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
      }

 async storeCookies(filename){
    var cookies = await browser.getCookies();
    fs.writeFileSync(filename,JSON.stringify(cookies));
  }
 async switchToNextWindow(){
    await browser.pause(3000)
    var windows = await browser.getWindowHandles()
    if (windows.length>1)
    await browser.switchToWindow(windows[1]);
 }
 
 async switchToParentWindow(){
    await browser.pause(3000)
    var windows = await browser.getWindowHandles()
    if (windows.length>1)
    await browser.switchToWindow(windows[0]);
 }

}