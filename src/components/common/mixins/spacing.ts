import mq from 'utils/mediaQueries';

// Inspired by https://github.com/mui-org/material-ui
interface SpacingProps {
  /** Add margin in every direction */
  m?: string | string[];
  /** Add margin to the bottom */
  mb?: string | string[];
  /** Add margin to the left */
  ml?: string | string[];
  /** Add margin to the right */
  mr?: string | string[];
  /** Add margin to the top */
  mt?: string | string[];
  /** Add margin to the left and right */
  mx?: string | string[];
  /** Add margin to the top and bottom */
  my?: string | string[];
  /** Add padding in every direction */
  p?: string | string[];
  /** Add padding to the bottom */
  pb?: string | string[];
  /** Add padding to the left */
  pl?: string | string[];
  /** Add padding to the right */
  pr?: string | string[];
  /** Add padding to the top */
  pt?: string | string[];
  /** Add padding to the left and right */
  px?: string | string[];
  /** Add padding to the top and bottom */
  py?: string | string[];
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
