import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { css } from '@emotion/react';
import { rippleAnimation } from './styles';
import type {
  RippleProps,
} from '../types';

export const Ripple = styled(
  'div',
  { shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'size' },
)<RippleProps>(
  ({
    size,
    position,
    duration,
  }) => css`
    position: absolute;
    pointer-events: none;
    width: ${size}px;
    height: ${size}px;
    left: ${position.x - size / 2}px;
    top: ${position.y - size / 2}px;
    border-radius: ${size / 2}px;
    animation: ${rippleAnimation} ${duration}ms linear;
    background-color: ${theme.colors.interactions.main};
    transform: scale(4);
    opacity: 0;
    *:has(> &) {
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
  `,
);
