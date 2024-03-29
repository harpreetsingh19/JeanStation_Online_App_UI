"use strict";
exports.__esModule = true;
exports.AppPage = void 0;
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get(protractor_1.browser.baseUrl);
    };
    AppPage.prototype.getTitleText = function () {
        return protractor_1.element(protractor_1.by.css('app-preview h2')).getText();
    };
    AppPage.prototype.getLoginButton = function () {
        return protractor_1.element(protractor_1.by.id('login'));
    };
    AppPage.prototype.getRegisterButton = function () {
        return protractor_1.element(protractor_1.by.id('register'));
    };
    AppPage.prototype.getLoginHeader = function () {
        return protractor_1.element(protractor_1.by.css('app-login h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
