

import Page from './page';
import config from '../../config/config';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    /**
     *
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('[data-testid="username"]');
    }

    get inputPassword() {
        return $('[data-testid="password"]');
    }
    
    get btnSubmit() {
        return $('[data-testid="login__cta"]');
    }

    get errorMessage() {
        return $('[data-testid="login__error--server"]');
    }
    
    get btnFacebookLoginOnDepop() {
        return $('[data-testid="facebook-button"]');
     }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        if(username=="useconfig"){
        email=config.depop_useremailid_1;
        password=config.depop_password_1;
        } else if (username=="useconfigemail"){
        email=config.depop_id_1;
        password=config.depop_password_1;
        }
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async clearCacheAndCookies () {
       await browser.reloadSession();
    }
    async clickLogin () {
        await this.btnSubmit.click();
    }
    async open() {
        return await super.open('login');
    } 
    async clickFacebookLoginOption () {
        await this.btnFacebookLoginOnDepop.click();
    }  
}
export default new LoginPage();
