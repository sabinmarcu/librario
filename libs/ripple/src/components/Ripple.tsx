import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  css,
} from '@emotion/react';
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
    duration,
  }) => css`
    position: absolute;
    pointer-events: none;
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
    animation: ${rippleAnimation} ${duration}ms linear;
    background-color: ${theme.colors.interactions.main};
    transform: scale(4);
    opacity: 0;
  `,
);
