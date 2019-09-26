import { Box } from './Box';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled(Box)`
  animation: ${(props) =>
    props.animate &&
    css`
      ${enter} .3s ease-out
    `};

  background-color: var(--default-bg-color, #ffffff);
  border-radius: 0.5rem;

  box-shadow: var(
    --box-shadow--1,
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3)
  );

  overflow: hidden;
`;

Card.propTypes = {
  animate: PropTypes.bool,
};

export default Card;
