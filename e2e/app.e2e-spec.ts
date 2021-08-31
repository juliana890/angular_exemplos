import { ExemploCursoPage } from './app.po';

describe('exemplo-curso App', () => {
  let page: ExemploCursoPage;

  beforeEach(() => {
    page = new ExemploCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to exp!');
  });
});
