import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Product Header', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('New Arrivals');
  });

  it('Should display LOGIN button', () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('LOGIN');
  });

  it('Should display register button', () => {
    page.navigateTo();
    expect(page.getRegisterButton().getText()).toEqual('REGISTER');
  });
//app-login h1      Login
  it('Should roue to login page', () => {
    page.navigateTo();
    page.getLoginButton().click();
    expect(page.getLoginHeader()).toEqual('Login');
  });


  ///////////////////

  it('should check for empty userid',() => {
    page.navigateTo();
    page.getLoginButton().click();
    element(by.css('input[type="text"]')).sendKeys();
    element(by.css('input[type="password"]')).sendKeys(3748);
    element(by.css('.btn')).click();
    expect(element(by.css('h2')).getText()).toBe('Not Valid!!!')
  });

  // test to check name as input and number as null
  it('should check Empty password',() => {
    page.navigateTo();
    page.getLoginButton().click();
    element(by.css('input[type="text"]')).sendKeys("test");
    element(by.css('input[type="password"]')).sendKeys();
    element(by.css('.btn')).click();
    expect(element(by.css('h2')).getText()).toBe('Not Valid!!!')
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
