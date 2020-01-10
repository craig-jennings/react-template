import { a, useSpring } from 'react-spring';
import { Box } from './Box';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardBox = styled(Box)`
  background-color: var(--default);
  border-radius: 0.5rem;

  box-shadow: var(
    --box-shadow--1,
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3)
  );

  overflow: hidden;
`;

function Card({ animate, children, ...props }) {
  const style = useSpring({
    config: {
      friction: 30,
      tension: 300,
    },

    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },

    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  });

  return animate ? (
    <a.div style={style}>
      <CardBox {...props}>{children}</CardBox>
    </a.div>
  ) : (
    <CardBox>{children}</CardBox>
  );
}

Card.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
