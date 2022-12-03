import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type { HTMLAttributes } from 'react';
import type { OpenType } from '../types';

export interface OverlayProps extends
  HTMLAttributes<HTMLButtonElement>,
  OpenType {
  opacity?: number;
}

export const Overlay = styled('div', {
  shouldForwardProp: (prop) => !['opacity', 'open'].includes(prop),
})<OverlayProps>(
  css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    inset: 0;
    background: ${theme.colors.text.main};
    transition: ${theme.transition.create(['opacity', 'leavingScreen'])};
    transition-delay: calc(${theme.transition.duration.leavingScreen} / 2);
  `,
  ({ open, opacity = 0.7 }) => {
    if (open) {
      return css`
        opacity: ${opacity};
        transition: ${theme.transition.create(['opacity', 'enteringScreen'])};
        transition-delay: calc(${theme.transition.duration.leavingScreen} / 2);
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  },
);
