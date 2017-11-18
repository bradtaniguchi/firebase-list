import { FirebaseListPage } from './app.po';

describe('firebase-list App', () => {
  let page: FirebaseListPage;

  beforeEach(() => {
    page = new FirebaseListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
