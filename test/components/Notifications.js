import { Selector } from 'testcafe';

class Notifications {
  constructor() {
    this.container = Selector('.notifications');
  }

  get notifications() {
    return this.container.find('.notification');
  }
}

export default Notifications;
