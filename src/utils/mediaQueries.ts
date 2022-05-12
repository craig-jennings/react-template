import facepaint from 'facepaint';

const breakpoints = {
  sm: '480px',
  md: '481px',
  lg: '991px',
} as const;

const mq = facepaint([
  `@media only screen and (min-width: ${breakpoints.md})`,
  `@media only screen and (min-width: ${breakpoints.lg})`,
]);

export default mq;
export { breakpoints };
