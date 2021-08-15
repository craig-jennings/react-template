import { Box } from './Box';
import styled from 'styled-components';

const Card = styled(Box)`
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

export default Card;
