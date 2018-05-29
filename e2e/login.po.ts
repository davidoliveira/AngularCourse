import { browser, by, element } from 'protractor';

//https://www.protractortest.org/#/api

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  setLoginUsernameFieldValue(value: string) {
    return element(by.id('login-email')).sendKeys(value);
  }

  getLoginUsernameFieldValue() {
    return element(by.id('login-email')).getAttribute('value');
  }

  setLoginPasswordFieldValue(value: string) {
    return element(by.id('login-password')).sendKeys(value);
  }

  getLoginPasswordFieldValue() {
    return element(by.id('login-password')).getAttribute('value');
  }

  getLoginSubmitBtn() {
    return element(by.id('login-submit'));
  }

  getLoginErrorStatus() {
    return element(by.id('login-error'));
  }

  getPaymentRow() {
    return element.all(by.css('payment-row')).first();
  }
}
