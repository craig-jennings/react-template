import { CloseIcon } from '../base/Icons';
import { FlexBox } from '../base/Box';
import { IconButton, UnstyledButton } from '../base/Buttons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RefreshButton = styled(UnstyledButton)`
  background-color: var(--neutral-bg-color);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
  margin-right: 1rem;
  padding: 0.25rem 0.75rem;
  transition: background-color 0.1s ease-in-out;

  :focus,
  :hover {
    background-color: var(--neutral-bg-color--hover);
  }
`;

function SWUpdate({ onDismiss }) {
  const handleRefreshClick = () => window.location.reload();

  return (
    <FlexBox alignItems="center" justifyContent="space-between">
      <div>Update Available</div>

      <FlexBox alignItems="center">
        <RefreshButton onClick={handleRefreshClick}>Refresh?</RefreshButton>

        <IconButton onClick={onDismiss}>
          <CloseIcon />
        </IconButton>
      </FlexBox>
    </FlexBox>
  );
}

SWUpdate.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default SWUpdate;
