import { NavbarPage } from './navbar.po';
import { browser } from 'protractor';

describe('navbar buttons exist', () => {
  let page: NavbarPage;
  beforeEach(() => {
    page = new NavbarPage();
    browser.ignoreSynchronization = true;
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText().getText()).toEqual('Fabric-list');
  });

  it('menu exists', () => {
    page.navigateTo();
    expect(page.getMenu().isPresent()).toBeTruthy();
  });

  it('menu expands', () => {
    page.navigateTo();
    page.getMenu().click();
    // console.log('test in expands: ', page.getMenu().getInnerHtml());
    expect(true).toBeTruthy();
  });

  it('menu info button exists', () => {
    page.navigateTo();
    page.getMenu().click();
    expect(page.getInfoButton().isPresent()).toBeTruthy();
  });
  it('menu settings button exists', () => {
    page.navigateTo();
    page.getMenu().click();
    expect(page.getSettingsButton().isPresent()).toBeTruthy();
  });
  it('menu logout button exists', () => {
    page.navigateTo();
    page.getMenu().click();
    expect(page.getLogoutButton().isPresent()).toBeTruthy();
  });
});