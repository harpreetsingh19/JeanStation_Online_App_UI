import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-preview h2')).getText() as Promise<string>;
  }

  getLoginButton(){
    return element(by.id('login'))
  }
 
  getRegisterButton(){
    return element(by.id('register'))
  }

  getLoginHeader(){
    return element(by.css('app-login h1')).getText();
  }


  
}
