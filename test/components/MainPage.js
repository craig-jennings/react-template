import { Selector } from 'testcafe';

class MainPage {
  constructor() {
    this.container = Selector('[data-testid=main-page]');
  }
}

export default MainPage;
