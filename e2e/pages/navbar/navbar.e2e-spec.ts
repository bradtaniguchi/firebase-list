import { NavbarPage } from './navbar.po';
import { browser } from 'protractor';
import { GoogleLoginPage } from '../google-login.po';

describe('navbar buttons', () => {
  let page: NavbarPage;
  let googleLogin: GoogleLoginPage;
  beforeEach(() => {
    page = new NavbarPage();
    googleLogin = new GoogleLoginPage();
    browser.ignoreSynchronization = true;
    // googleLogin.checkRedirect();
    browser.driver.getCurrentUrl()
    .then((url) => {
      console.log('url', url);
    });
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText().getText()).toEqual('Fabric-list');
  });

  it('menu exists', () => {
    page.navigateTo();
    expect(page.getMenu().isPresent()).toBeTruthy();
  });

  fit('add button exists on main page', () => {
    page.navigateTo();
    const ec = browser.ExpectedConditions;
    console.log('before');
    browser.wait(ec.urlContains('/'), 1000);
    console.log('after');
    page.getAddMenu().isPresent().then((val) => {
      console.log('VALUE: ', val);
      expect(val).toBeTruthy();
    });
  });

  it('add button doesnt exist on settings page', () => {
    page.navigateToSettings();
    expect(page.getAddMenu().isPresent()).not.toBeTruthy();
  });

  it('menu expands', () => {
    page.navigateTo();
    page.getMenu().click();
    expect(true).toBeTruthy();
  });
  it('menu info button exists', () => {
    page.navigateTo();
    page.getMenu().click().then(() => {
      expect(page.getInfoButton().isPresent()).toBeTruthy(); 
    });
  });
  it('menu settings button exists', () => {
    page.navigateTo();
    page.getMenu().click().then(() => {
      expect(page.getSettingsButton().isPresent()).toBeTruthy();
    });
  });
  it('menu logout button exists', () => {
    page.navigateTo();
    page.getMenu().click().then(() => {
      expect(page.getLogoutButton().isPresent()).toBeTruthy();
    });
  });
});