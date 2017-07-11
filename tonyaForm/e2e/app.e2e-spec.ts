import { TonyaFormPage } from './app.po';

describe('tonya-form App', () => {
  let page: TonyaFormPage;

  beforeEach(() => {
    page = new TonyaFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
