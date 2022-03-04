import { Button } from 'components/common/Buttons';
import { FlexBox } from 'components/common/Box';
import NotificationContainer from '../NotificationContainer';
import styled from 'styled-components';

const Container = styled(NotificationContainer)`
  background-color: var(--neutral);
  color: var(--neutral-text);
`;

const RefreshButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
`;

interface SWUpdateProps {
  onUpdateClick: () => void;
}

function SWUpdate({ onUpdateClick }: SWUpdateProps) {
  return (
    <Container alignItems="center" justifyContent="space-between" px="md">
      <div>Update Available</div>

      <FlexBox alignItems="center">
        <RefreshButton onClick={onUpdateClick}>Refresh?</RefreshButton>
      </FlexBox>
    </Container>
  );
}

export default SWUpdate;
