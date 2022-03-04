type GlobalValues = 'inherit' | 'initial' | 'unset';

type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  /* Distributed alignment */
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | GlobalValues;

type AlignItems =
  | 'normal'
  | 'stretch'

  /* Positional alignment */
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | GlobalValues;

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | GlobalValues;

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalValues;

type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'

  /* Distributed alignment */
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | GlobalValues;

interface FlexProps {
  /** Sets align-content on the component */
  alignContent?: AlignContent;
  /** Sets align-items on the component */
  alignItems?: AlignItems;
  /** Sets flex value on the component */
  flex?: string;
  /** Sets flex-direction on the component */
  flexDirection?: FlexDirection;
  /** Sets flex-wrap on the component */
  flexWrap?: FlexWrap;
  /** Sets the gap on the component */
  gap?: string;
  /** Sets justify-content on the component */
  justifyContent?: JustifyContent;
}

const flexKeys = ['alignContent', 'alignItems', 'flex', 'flexDirection', 'flexWrap', 'gap', 'justifyContent'];

function flex(props: unknown): Record<string, string> | null {
  return Object.entries(props as Record<string, unknown>)
    .map(([prop, value]) => (flexKeys.includes(prop) ? { [prop]: value as string } : null))
    .reduce(
      (acc, currentValue) => ({
        ...acc,
        ...currentValue,
      }),
      {},
    );
}

export default flex;
export type { FlexProps };
