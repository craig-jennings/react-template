type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

interface PositionProps {
  /** Sets the position of the component */
  position?: Position;
}

function positionMixin({ position }: { position?: Position }) {
  return position && { position };
}

export default positionMixin;
export type { PositionProps };
