import { protractor, element, by, browser } from 'protractor';
import { environment } from '../../src/environments/environment';
import { GoogleLoginPage } from './google-login.po';
export class LoginPage {

  onPage() {
    return element(by.css('[data-login-button]')).isPresent();
  }
  /**
   * Logs the user into google
   */
  // login() {
  //   console.log('---starting login auth---');
  //   element(by.css('[data-login-button]')).isPresent()
  //   .then(isPresent => {
  //     const googleLogin = new GoogleLoginPage();
  //     if (isPresent) {
  //       console.log('---need to login---');
  //       element(by.css('[data-login-button]')).click()
  //       .then(() => {
  //         return browser.sleep(3000);
  //       }).then(() => {
  //         googleLogin.getLogin().sendKeys(environment.serviceAccount.email);
  //         googleLogin.getEmailNext().click();
  //         return browser.sleep(2000);
  //       }).then(() => {
  //         googleLogin.getPassword().sendKeys(environment.serviceAccount.password);
  //         googleLogin.getPasswordNext().click();
  //         return browser.sleep(3000);
  //       }).then(() => {
  //         return browser.driver.getCurrentUrl();
  //       }).then((url) => {
  //         console.log('final url: ', url);
  //       });
  //     } else {
  //       console.log('---not on login page---');
  //     }
  //   });
  // }
  login() {
    console.log('starting new login auth');
    element(by.css('[data-login-button]')).isPresent()
    .then(isPresent => {
      if (isPresent) {
        console.log('need to login');
        const googleLogin = new GoogleLoginPage();
        const EC = protractor.ExpectedConditions;
        const timeout = 15000; // in miliseconds
        element(by.css('[data-login-button]')).click()
        .then(() => {
          // Waits for the element to be present on the dom.
          return browser.wait(EC.presenceOf(googleLogin.getEmail()), timeout);
        })
        .then(() => {
          console.log('entering login information');
          return googleLogin.getEmail().sendKeys(environment.serviceAccount.email);
        })
        .then(() => {
          console.log('clicking on login on google next');
          return googleLogin.getEmailNext().click();
        })
        .then(() => {
          console.log('waiting for password to exist');
          return browser.wait(EC.visibilityOf(googleLogin.getPassword()), timeout);
        })
        .then(() => {
          console.log('entering password keys');
          return googleLogin.getPassword().sendKeys(environment.serviceAccount.password);
        })
        .then(() => {
          console.log('waiting for next to appear');
          return googleLogin.getPasswordNext().isDisplayed();
        })
        .then(() => {
          console.log('clicking on password next');
          return googleLogin.getPasswordNext().click();
        })
        .then(() => {
          console.log('waiting for angular application to load');
          const until = element(by.tagName('mat-accordion'));
          return browser.wait(EC.visibilityOf(until), timeout);
        })
        .then(() => {
          console.log('angular application should of loaded:');
          return browser.driver.getCurrentUrl();
        })
        .then((url) => {
          console.log('current url: ', url);
        })
        .catch((err) => {
          console.error('Error: ', err);
        });

      } else {
        console.log('dont need to login');
      }
    })
  }
}
