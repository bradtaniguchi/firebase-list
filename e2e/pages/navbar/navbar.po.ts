import { element, by, browser } from 'protractor';
export class NavbarPage {
  navigateTo() {
    return browser.get('/');
  }

  nagivateToSettings() {
    return browser.get('/settings');
  }
  getTitleText() {
    return element(by.css('[data-home-link]'));
  }

  getMenu() {
    return element(by.css('[data-user-menu]'));
  }

  getAddMenu() {
    return element(by.css('[data-list-add]'));
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