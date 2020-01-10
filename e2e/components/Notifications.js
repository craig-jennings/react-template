import TestComponent, { byTestId } from '../utils/TestComponent';

class Notifications extends TestComponent {
  static get testId() {
    return 'notifications';
  }

  get notifications() {
    return this.container.find(byTestId('notification'));
  }
}

export default Notifications;
