import mq, { type MediaQueryValues } from 'utils/mediaQueries';

/**
 * Determines value or responsive values applied to a given spacing rule. When passing an array, the first value is the
 * default value, then the proceeding values are mapped according to facepaint's media query rules
 */
type SpacingPropType = string | MediaQueryValues;

interface SpacingProps {
  /** Sets the gap on the component */
  gap?: SpacingPropType;
  /** Add margin in every direction */
  m?: SpacingPropType;
  /** Add margin to the bottom */
  mb?: SpacingPropType;
  /** Add margin to the left */
  ml?: SpacingPropType;
  /** Add margin to the right */
  mr?: SpacingPropType;
  /** Add margin to the top */
  mt?: SpacingPropType;
  /** Add margin to the left and right */
  mx?: SpacingPropType;
  /** Add margin to the top and bottom */
  my?: SpacingPropType;
  /** Add padding in every direction */
  p?: SpacingPropType;
  /** Add padding to the bottom */
  pb?: SpacingPropType;
  /** Add padding to the left */
  pl?: SpacingPropType;
  /** Add padding to the right */
  pr?: SpacingPropType;
  /** Add padding to the top */
  pt?: SpacingPropType;
  /** Add padding to the left and right */
  px?: SpacingPropType;
  /** Add padding to the top and bottom */
  py?: SpacingPropType;
}

type SpacingKeys = keyof SpacingProps;
type SpacingValues = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const spacings: Record<SpacingValues, string> = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
};

const spacingKeys: Record<SpacingKeys, string | string[]> = {
  gap: 'gap',
  m: 'margin',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mx: ['margin-left', 'margin-right'],
  my: ['margin-bottom', 'margin-top'],
  p: 'padding',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  px: ['padding-left', 'padding-right'],
  py: ['padding-bottom', 'padding-top'],
};

function spacing(props: unknown) {
  return Object.entries(props as Record<string, unknown>).map(([prop, value]) => {
    const spacingProp = spacingKeys[prop as SpacingKeys];

    if (!spacingProp) {
      return null;
    }

    const cssProperties = Array.isArray(spacingProp) ? spacingProp : [spacingProp];

    return cssProperties.reduce<Record<string, string | { [key: string]: string | number }>>((acc, cssProp) => {
      const arrayValue = Array.isArray(value) ? value : [value];

      return {
        ...acc,
        ...mq({ [cssProp]: arrayValue.map((v) => spacings[v as SpacingValues] || (v as string)) })[0],
      };
    }, {});
  });
}

export default spacing;
export type { SpacingProps };
