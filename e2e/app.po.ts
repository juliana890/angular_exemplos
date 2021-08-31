import { browser, by, element } from 'protractor';

export class ExemploCursoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('exp-root h1')).getText();
  }
}
