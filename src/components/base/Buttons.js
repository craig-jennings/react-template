import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--neutral);
  border-radius: 1rem;
  border-width: 0px;
  color: var(--neutral-text);
  padding: 0.5rem 1rem;
  transition: all 0.25s;

  :focus,
  :hover {
    background-color: var(--neutral--hover);
    cursor: pointer;
    outline: none;
  }

  :active {
    background-color: var(--neutral--active);
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: var(--neutral--disabled);
    color: var(--neutral-text--disabled);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: var(--primary-text);

  :focus,
  :hover {
    background-color: var(--primary--hover);
  }

  :active {
    background-color: var(--primary--active);
  }

  &[disabled] {
    background-color: var(--primary--disabled);
    color: var(--primary-text--disabled);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: var(--secondary);
  color: var(--secondary-text);

  :focus,
  :hover {
    background-color: var(--secondary--hover);
  }

  :active {
    background-color: var(--secondary--active);
  }
`;

const DangerButton = styled(Button)`
  background-color: var(--danger);
  color: var(--danger-text);

  :focus,
  :hover {
    background-color: var(--danger--hover);
  }

  :active {
    background-color: var(--danger--active);
  }
`;

const UnstyledButton = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 0;
`;

const IconButton = styled(UnstyledButton)`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: ${({ height }) => height || '24px'};
  justify-content: center;
  position: relative;
  transition-duration: 0.15s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ width }) => width || '24px'};
  z-index: 1;

  ::before {
    background-color: ${({ variant }) => {
      switch (variant) {
        case 'primary':
          return 'var(--primary--hover)';

        case 'secondary':
          return 'var(--secondary--hover)';

        case 'danger':
          return 'var(--danger--hover)';

        default:
          return 'var(--neutral--hover)';
      }
    }};

    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transition-duration: 0.15s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  :focus,
  :hover {
    ::before {
      opacity: 1;
      transform: scale(1.5);
    }
  }
`;

IconButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export { Button, DangerButton, IconButton, PrimaryButton, SecondaryButton, UnstyledButton };
