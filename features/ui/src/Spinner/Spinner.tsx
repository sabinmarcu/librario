/** Disclaimer: Taken from https://codepen.io/supah/pen/BjYLdW */

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { forwardRef } from 'react';
import { Flex } from '../Layout/Flex';

export interface SpinnerSizeProps {
  size?: number;
}

export type SpinnerProps = SpinnerSizeProps | {
  stretch?: boolean;
};

export const SpinnerWrapper = styled(Flex)<SpinnerSizeProps>(
  ({ size }) => `
    width: ${size ? `${size}px` : '7rem'};
    height: ${size ? `${size}px` : '7rem'};
  `,
);

export const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const SVGSpinner = styled.svg`
  color: currentColor;
  animation: ${rotateAnimation} 2s linear infinite;
  flex: 1;
`;
export const SVGCircle = styled.circle`
  color: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ${theme.transition.easing.easeInOut} infinite;
`;

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  (props, ref) => {
    const { stretch, size, ...rest } = props as any;
    return (
      <SpinnerWrapper {...(stretch ? rest : props)} center grow={stretch}>
        <SVGSpinner viewBox="0 0 50 50" ref={ref}>
          <SVGCircle cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        </SVGSpinner>
      </SpinnerWrapper>
    );
  },
);
