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
  getEmail() {
    return element(by.id('identifierId'));
  }

  getEmailNext() {
    return element(by.id('identifierNext'));
  }

  getPasswordNext() {
    return element(by.id('passwordNext'));
  }

  getPassword() {
    return element(by.css('[type="password"]'));
  }

  getIdentifierLink() {
    return element(by.id('identifierLink'));
  }
}