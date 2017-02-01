import { SetupTemplatePage } from './app.po';

describe('setup-template App', function() {
  let page: SetupTemplatePage;

  beforeEach(() => {
    page = new SetupTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
