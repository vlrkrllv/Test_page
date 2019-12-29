const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://yandex.ru');
        browser.keys('webdriverIO');
        browser.keys('Enter');

        browser.$('.organic__url-text').waitForDisplayed()
        browser.$$('.organic__url-text')[1].click();

        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})