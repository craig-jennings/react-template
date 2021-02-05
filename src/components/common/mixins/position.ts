type PositionProps = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

function positionMixin({ position }: { position?: PositionProps }) {
  return position && { position };
}

export default positionMixin;
export { PositionProps };
