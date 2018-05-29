import { LoginPage } from './login.po';
import { browser } from 'protractor';

//https://www.protractortest.org/#/api

describe('kondominio-app', () => {
  const username = 'app@kondominio.pt';
  const password = 'kondominio';
  let page: LoginPage;

  beforeAll(() => {

  });

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should have right title', () => {
    page.navigateTo();

    page.getPageTitle().then((title: string) => {
      expect(title).toEqual('KondominioApp');
    });
  });

  it('should login', () => {
    page.navigateTo();

    page.setLoginUsernameFieldValue(username);
    expect(page.getLoginUsernameFieldValue()).toEqual(username);

    page.setLoginPasswordFieldValue(password);
    expect(page.getLoginPasswordFieldValue()).toEqual(password);

    page.getLoginSubmitBtn().click();
    browser.sleep(3000);

    expect(page.getLoginErrorStatus()).toBe(false);

    browser.sleep(5000);
  });
});
