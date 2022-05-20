import flex, { FlexProps } from './mixins/flex';
import position, { PositionProps } from './mixins/position';
import spacing, { SpacingProps } from './mixins/spacing';
import styled from 'styled-components';

type BoxProps = PositionProps & SpacingProps & FlexProps;

const Box = styled.div<BoxProps>`
  ${flex}
  ${position}
  ${spacing}
`;

const FlexBox = styled(Box)`
  display: flex;
`;

const InlineBox = styled(Box)`
  display: inline-block;
`;

const InlineFlexBox = styled(Box)`
  display: inline-flex;
`;

const CenterBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;

export { Box, CenterBox, FlexBox, InlineBox, InlineFlexBox };
export type { BoxProps };
