import { keyframes } from '@emotion/react';

export const rippleAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 0.7;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
`;
