import { by, element, browser } from 'protractor';
export class GoogleLoginPage {
  checkRedirect() {
    let needToLogin;
    browser.driver.getCurrentUrl()
    .then((url) => {
      console.log('url: ', url);
      const index = url.indexOf('localhost');
      needToLogin = !(index > -1);
      console.log('checking if we need to login..', needToLogin);
    });
  }
  getLogin() {
    return element(by.id('identifierId'));
  }

  getNext() {
    return element(by.id('identifierNext'));
  }

  getPassword() {
    return element(by.id('password'));
  }

  getIdentifierLink() {
    return element(by.id('identifierLink'));
  }
}