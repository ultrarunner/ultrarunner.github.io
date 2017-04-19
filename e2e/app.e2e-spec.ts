import { LearnWildPage } from './app.po';

describe('learn-wild App', () => {
  let page: LearnWildPage;

  beforeEach(() => {
    page = new LearnWildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
