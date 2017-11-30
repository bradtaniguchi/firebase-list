import { element, by, browser } from 'protractor';
import { GoogleLoginPage } from './google-login.po';
import { environment } from '../../src/environments/environment';
export class LoginPage {

  onPage() {
    return element(by.css('[data-login-button]')).isPresent();
  }
  /**
   * Logs the user into google
   */
  login() {
    console.log('---starting login auth---');
    element(by.css('[data-login-button]')).isPresent()
    .then(isPresent => {
      const googleLogin = new GoogleLoginPage();
      if (isPresent) {
        console.log('---need to login---');
        element(by.css('[data-login-button]')).click()
        .then(() => {
          return browser.sleep(3000)
        }).then(() => {
          googleLogin.getLogin().sendKeys(environment.serviceAccount.email);
          googleLogin.getEmailNext().click();
          return browser.sleep(2000);
        }).then(() => {
          googleLogin.getPassword().sendKeys(environment.serviceAccount.password);
          googleLogin.getPasswordNext().click();
          return browser.sleep(3000);
        }).then(() => {
          return browser.driver.getCurrentUrl();
        }).then((url) => {
          console.log('final url: ', url);
        });
            // .then(() => {
            //   browser.driver.wait(() => {
            //     googleLogin.getPassword().sendKeys(environment.serviceAccount.password);
            //     googleLogin.getPasswordNext().click()
            //     .then(() => {
            //       return browser.driver.getCurrentUrl();
            //     }).then((url) => {
            //       console.log('final url: ', url);
            //     });
            //   }, 2000);
            // });
        //   });
        // });
      } else {
        console.log('---not on login page---');
      }
    });
  }
}