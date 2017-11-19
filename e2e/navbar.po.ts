import { element, by, browser } from 'protractor';
export class NavbarPage {
  navigateTo() {
    return browser.get('/');
  }
  getTitleText() {
    return element(by.css('[data-home-link]'));
  }

  getMenu() {
    return element(by.css('[data-user-menu]'));
  }

  getInfoButton() {
    return element(by.css('[data-user-menu-info]'));
  }

  getSettingsButton() {
    return element(by.css('[data-user-menu-settings]'));
  }

  getLogoutButton() {
    return element(by.css('[data-user-menu-logout]'));
  }
}