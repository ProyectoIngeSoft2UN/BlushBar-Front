import { BlushBarPage } from './app.po';

describe('blush-bar App', () => {
  let page: BlushBarPage;

  beforeEach(() => {
    page = new BlushBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
