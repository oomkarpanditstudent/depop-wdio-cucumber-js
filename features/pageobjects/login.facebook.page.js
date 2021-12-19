
import Page from './page';
//import facebook_cookies from '../../config/fbcookie.json'; 
import config from '../../config/config';
const fs = require('fs');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginFacebookPage extends Page {   
    /**
     * define selectors using getter methods
     */
    open(path) {
        return browser.url(config.fb_url);
    }
     get btnFacebookAcceptCookie() {
        return $('button[title="Allow All Cookies"]');
     }
     
     get inputFacebookEmail() {
        return $('input#email');
     }
     get inputFacebookPassword() {
        return $('input#pass');
     }
     get btnFacebookLogin() {
        return $('[name="login"]');
     }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async acceptFacebookCookiesPopup() {
      await this.switchToNextWindow(); 
      await this.btnFacebookAcceptCookie.click();  
    }

   async loginFacebook (email, password) {
      if(email=="useconfig"){
         email=config.fb_user_emailid_1;
         password=config.fb_password_1;
      }
      await this.waitForUntil(await this.inputFacebookEmail);
      await this.inputFacebookEmail.setValue(email);
      await this.inputFacebookPassword.setValue(password);
      await this.btnFacebookLogin.click();
    }

  async openFacebookUsingCookies(){
      var file_content = fs.readFileSync(config.fb_cookie_file);
      var facebook_cookies = JSON.parse(file_content);
      await browser.newWindow(config.fb_url)
      await browser.setCookies(facebook_cookies);
      await browser.url(config.fb_url);
      await this.switchToParentWindow();   
    }
}
export default new LoginFacebookPage();
