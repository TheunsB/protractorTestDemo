import { AppPage } from './app.po';

describe('protractor-test-demo App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('Welcome to the Protractor Demo!');
  });
});
