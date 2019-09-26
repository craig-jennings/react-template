import spacing from './mixins/spacing';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: var(--neutral-bg-color, #cfd8dc);
  border-radius: 1rem;
  border-width: 0px;
  font-family: var(--font-family, 'Arial');
  padding: 0.5rem 1rem;
  transition: all 0.25s;

  ${({ isIconButton }) =>
    isIconButton &&
    css`
      border-radius: 50%;
      box-sizing: content-box;
      height: 24px;
      padding: 0.5rem;
      width: 24px;
    `};

  ${spacing};

  :focus,
  :hover {
    background-color: var(--neutral-bg-color--hover, #b0bec5);
    cursor: pointer;
    outline: none;
  }

  :active {
    background-color: var(--neutral-bg-color--active, #90a4ae);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-bg-color, #1e88e5);
  color: var(--primary-color, #fafafa);

  :focus,
  :hover {
    background-color: var(--primary-bg-color--hover, #1976d2);
  }

  :active {
    background-color: var(--primary-bg-color--active, #005cb2);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: var(--secondary-color, #546e7a);
  color: var(--secondary-text, #fafafa);

  :focus,
  :hover {
    background-color: var(--secondary-color--hover, #819ca9);
  }

  :active {
    background-color: var(--secondary-color--active, #29434e);
  }
`;

const DangerButton = styled(Button)`
  background-color: var(--danger-bg-color, #ef5350);
  color: var(--danger-color, #222222);

  :focus,
  :hover {
    background-color: var(--danger-bg-color--hover, #b71c1c);
  }

  :active {
    background-color: var(--danger-bg-color--active, #e53935);
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

  ::before {
    background-color: var(--neutral-bg-color--hover);
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
  }

  :focus,
  :hover {
    ::before {
      opacity: 0.35;
      transform: scale(1.5);
    }
  }
`;

export { Button, DangerButton, IconButton, PrimaryButton, SecondaryButton, UnstyledButton };
