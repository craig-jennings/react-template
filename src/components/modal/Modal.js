import { useSelector } from 'react-redux';
import Card from '../base/Card';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { background-color: hsla(0, 0%, 25%, 0); }
  to   { background-color: hsla(0, 0%, 25%, 0.4); }
`;

const fadeOut = keyframes`
  from { background-color: hsla(0, 0%, 25%, 0.4); }
  to   { background-color: hsla(0, 0%, 25%, 0); }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(200px);
  }
`;

const Backdrop = styled.div`
  align-items: center;

  animation: ${({ isEntering, isExiting }) => {
    if (isEntering)
      return css`
        ${fadeIn} .3s linear forwards
      `;
    if (isExiting)
      return css`
        ${fadeOut} .3s linear forwards
      `;

    return null;
  }};

  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const ModalContainer = styled(Card)`
  animation: ${({ isEntering, isExiting }) => {
    if (isEntering)
      return css`
        ${slideUp} .3s cubic-bezier(.36, .82, .56, .99) forwards
      `;
    if (isExiting)
      return css`
        ${slideDown} .3s cubic-bezier(.34, .64, .45, .75) forwards
      `;

    return null;
  }};

  background-color: var(--default-bg-color, #ffffff);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  bottom: 0;
  box-shadow: var(--box-shadow--3);
  left: 0;
  position: absolute;
  right: 0;

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    max-width: 700px;
    min-width: 500px;
    position: relative;
    top: -4rem;
  }
`;

function Modal() {
  const { Component, ...animations } = useSelector((state) => state.modal);

  if (!Component) return null;

  return (
    <Backdrop {...animations}>
      <ModalContainer p={3} {...animations}>
        <Component />
      </ModalContainer>
    </Backdrop>
  );
}

export default Modal;
