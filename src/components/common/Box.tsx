import display, { DisplayProps } from './mixins/display';
import flex, { FlexProps } from './mixins/flex';
import position, { PositionProps } from './mixins/position';
import spacing, { SpacingProps } from './mixins/spacing';
import styled from 'styled-components';

type BoxProps = {
  displayRaw?: DisplayProps;
  position?: PositionProps;
} & FlexProps &
  SpacingProps;

const Box = styled.div<BoxProps>`
  ${display}
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

export { Box, BoxProps, CenterBox, FlexBox, InlineBox, InlineFlexBox };
