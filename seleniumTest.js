const assert = require('assert')

describe('webdriver.io page yandex', () => {
    it('should have the right title', () => {
        browser.url('https://google.com');
        browser.keys('webdriverIO');
        browser.keys('Enter');

        browser.$('.r a').waitForDisplayed()
        browser.$('.r a').click();

        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})