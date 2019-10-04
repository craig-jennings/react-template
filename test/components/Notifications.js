import { byTestId } from '../utils/TestComponent';

class Notifications {
  static get testId() { return 'notifications'; }

  get notifications() {
    return this.container.find(byTestId('notification'));
  }
}

export default Notifications;
