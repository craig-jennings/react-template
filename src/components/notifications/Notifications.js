import { FlexBox } from '../base/Box';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import styled from 'styled-components';

const NotificationContainer = styled(FlexBox)`
  bottom: 1rem;
  left: 1.5rem;
  position: fixed;
  right: 1.5rem;
  z-index: 100;

  div {
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    left: 2rem;
    right: unset;
    width: 300px;
  }
`;

function Notifications() {
  const notifications = useSelector((state) => state.notifications);

  const _notifications = notifications.map((n) => <Notification key={n.key} notification={n} />);

  return (
    <NotificationContainer
      data-testid="notifications"
      flexDirection="column"
      justifyContent="flex-end"
    >
      {_notifications}
    </NotificationContainer>
  );
}

export default Notifications;
