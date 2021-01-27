import TestComponent, { byTestId } from '../utils/TestComponent';

class Notifications extends TestComponent {
  get notifications() {
    return this.container.find(byTestId('notification'));
  }
}

export default new Notifications('notifications');
export { Notifications };
