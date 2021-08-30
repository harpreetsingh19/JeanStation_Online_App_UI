"use strict";
exports.__esModule = true;
var app_po_1 = require("./app.po");
var protractor_1 = require("protractor");
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should display Product Header', function () {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('New Arrivals');
    });
    it('Should display LOGIN button', function () {
        page.navigateTo();
        expect(page.getLoginButton().getText()).toEqual('LOGIN');
    });
    it('Should display register button', function () {
        page.navigateTo();
        expect(page.getRegisterButton().getText()).toEqual('REGISTER');
    });
    //app-login h1      Login
    it('Should roue to login page', function () {
        page.navigateTo();
        page.getLoginButton().click();
        expect(page.getLoginHeader()).toEqual('Login');
    });
    ///////////////////
    it('should check for empty userid', function () {
        page.navigateTo();
        page.getLoginButton().click();
        protractor_1.element(protractor_1.by.css('input[type="text"]')).sendKeys();
        protractor_1.element(protractor_1.by.css('input[type="password"]')).sendKeys(3748);
        protractor_1.element(protractor_1.by.css('.btn')).click();
        expect(protractor_1.element(protractor_1.by.css('h2')).getText()).toBe('Not Valid!!!');
    });
    // test to check name as input and number as null
    it('should check Empty password', function () {
        page.navigateTo();
        page.getLoginButton().click();
        protractor_1.element(protractor_1.by.css('input[type="text"]')).sendKeys("test");
        protractor_1.element(protractor_1.by.css('input[type="password"]')).sendKeys();
        protractor_1.element(protractor_1.by.css('.btn')).click();
        expect(protractor_1.element(protractor_1.by.css('h2')).getText()).toBe('Not Valid!!!');
    });
    /////////////////////////
    // afterEach(async () => {
    //   // Assert that there are no errors emitted from the browser
    //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    //   expect(logs).not.toContain(jasmine.objectContaining({
    //     level: logging.Level.SEVERE,
    //   } as logging.Entry));
    // });
});
