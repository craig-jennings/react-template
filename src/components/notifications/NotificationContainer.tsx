import { FlexBox } from 'components/common/Box';
import styled from 'styled-components';

const NotificationContainer = styled(FlexBox).attrs(() => ({
  'data-testid': 'notification',
}))`
  border-radius: 0.5rem;
  cursor: pointer;
  min-height: 56px;
  overflow: hidden;
  width: 100%;
`;

export default NotificationContainer;
