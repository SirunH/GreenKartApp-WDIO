const Page = require("./page");

class MainPage extends Page {
    async goTo(path) {
        await super.goTo(path);
        await browser.maximizeWindow();
    }

    async currentUrl() {
        return browser.getUrl();
    }

    async currentTitle() {
        return browser.getTitle();
    }
}

module.exports = new MainPage();