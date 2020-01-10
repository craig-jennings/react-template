import { addNotification, NotificationType } from '../../../actions/notifications';
import { fireEvent, render, waitForElementToBeRemoved } from 'jestUtils';
import Notifications from '../Notifications';

describe('Notifications', () => {
  test('should show a notification', () => {
    const { getByText, store } = render(<Notifications />);

    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));

    expect(getByText('Howdy')).toBeDefined();
  });

  test('should show two notifications', () => {
    const { getAllByText, store } = render(<Notifications />);

    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));
    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));

    expect(getAllByText('Howdy').length).toBe(2);
  });

  test('should not show more than three notifications', async () => {
    const { getAllByText, getByText, store } = render(<Notifications />);

    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Should be gone' }));
    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));
    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));
    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));

    await waitForElementToBeRemoved(() => getByText('Should be gone'));

    expect(getAllByText('Howdy').length).toBe(3);
  });

  test('should dismiss a notification when button is clicked', async () => {
    const { getByTestId, getByText, queryByTestId, store } = render(<Notifications />);

    store.dispatch(addNotification(NotificationType.SUCCESS, { text: 'Howdy' }));

    const button = getByTestId('notification').querySelector('button');

    fireEvent.click(button);

    await waitForElementToBeRemoved(() => getByText('Howdy'));

    expect(queryByTestId('notification')).toBeNull();
  });
});
