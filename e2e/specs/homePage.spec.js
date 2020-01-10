import { appUrl } from '../utils/roots';
import Home from '../components/Home';
import Notifications from '../components/Notifications';

const home = new Home();
const notifications = new Notifications();

fixture('Home Page').page(appUrl);

test('should show greeting and buttons', async (t) => {
  await t
    .expect(home.container.textContent).contains('Howdy React Template!')
    .expect(home.errorButton.exists).ok()
    .expect(home.serviceWorkerButton.exists).ok()
    .expect(home.successButton.exists).ok();
});

test('should show success notification on click', async (t) => {
  await t.click(home.successButton);

  await t
    .expect(notifications.notifications.count).eql(1)
    .expect(notifications.notifications.withText(/success/i).exists).ok();
});

test('should show error notification on click', async (t) => {
  await t.click(home.errorButton);

  await t
    .expect(notifications.notifications.count).eql(1)
    .expect(notifications.notifications.withText(/error/i).exists).ok();
});

test('should show service worker notification on click', async (t) => {
  await t.click(home.serviceWorkerButton);

  await t
    .expect(notifications.notifications.count).eql(1)
    .expect(notifications.notifications.withText(/update available/i).exists).ok();
});
