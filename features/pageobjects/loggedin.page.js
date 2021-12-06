

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoggedinPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedinAvatar() {
        return $('[data-testid="avatar__initials"]');
    }
}

export default new LoggedinPage();
