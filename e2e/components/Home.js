import TestComponent from '../utils/TestComponent';

class Home extends TestComponent {
  static get testId() {
    return 'home-page';
  }

  get errorButton() {
    return this.container.find('button').withText(/error/i);
  }

  get serviceWorkerButton() {
    return this.container.find('button').withText(/service worker/i);
  }

  get successButton() {
    return this.container.find('button').withText(/success/i);
  }
}

export default Home;
