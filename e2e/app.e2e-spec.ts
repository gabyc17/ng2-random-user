import { RandomusergeneratorPage } from './app.po';

describe('randomusergenerator App', function() {
  let page: RandomusergeneratorPage;

  beforeEach(() => {
    page = new RandomusergeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
