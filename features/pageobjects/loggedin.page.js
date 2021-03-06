
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoggedinPage extends Page {
    /**
     * define selectors using getter methods
     */
    get navLinkMessages() {
        return $('[data-testid="navigation__messages"]');
    }
    get inputSearchOnFacebook() {
        return $('[placeholder="Search Facebook"]');
    }
}
export default new LoggedinPage();
