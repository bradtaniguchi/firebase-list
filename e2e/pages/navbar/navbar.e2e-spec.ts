import { NavbarPage } from './navbar.po';
import { browser } from 'protractor';
import { GoogleLoginPage } from '../google-login.po';
import { LoginPage } from '../login.po';

describe('navbar buttons', () => {
  let page: NavbarPage;
  let googleLogin: GoogleLoginPage;
  let login: LoginPage;
  beforeEach(() => {
    page = new NavbarPage();
    login = new LoginPage();
    googleLogin = new GoogleLoginPage();
    browser.ignoreSynchronization = true;
    page.navigateTo();
    login.login();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText().getText()).toEqual('Fabric-list');
  });

  it('menu exists', () => {
    expect(page.getMenu().isPresent()).toBeTruthy();
  });

  it('add button exists on main page', () => {
    expect(page.getAddMenu().isPresent()).toBeTruthy();
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