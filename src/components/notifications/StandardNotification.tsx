import { PropsWithChildren } from 'react';
import NotificationContainer from './NotificationContainer';
import styled, { css } from 'styled-components';

const Container = styled(NotificationContainer)<{ variant?: 'error' | 'success' }>`
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          background-color: var(--danger);
          color: var(--danger-text);
        `;

      case 'success':
        return css`
          background-color: var(--primary);
          color: var(--primary-text);
        `;

      default:
        return css`
          background-color: var(--neutral);
          color: var(--neutral-text);
        `;
    }
  }}
`;

interface StandardNotificationProps {
  variant?: 'error' | 'success';
}

const StandardNotification = ({ children, variant }: PropsWithChildren<StandardNotificationProps>) => (
  <Container alignItems="center" justifyContent="space-between" px="lg" variant={variant}>
    {children}
  </Container>
);
export default StandardNotification;
