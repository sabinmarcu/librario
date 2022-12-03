import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  forwardRef,
  useMemo,
} from 'react';
import type {
  HTMLAttributes,
  ComponentProps,
} from 'react';
import { useAtom } from 'jotai';
import type { OpenType } from '../types';
import { sidebarOpen } from '../state/index';

export interface RawOverlayProps extends
  HTMLAttributes<HTMLButtonElement>,
  OpenType {
  opacity?: number;
}

export const RawOverlay = styled('div', {
  shouldForwardProp: (prop) => !['opacity', 'open'].includes(prop),
})<RawOverlayProps>(
  css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    inset: 0;
    background: hsl(0, 0%, 0%);
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

export interface OverlayProps extends ComponentProps<typeof RawOverlay> {
  closeOnClick?: boolean
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    { closeOnClick = true, ...props },
    ref,
  ) => {
    const [, setOpen] = useAtom(sidebarOpen);
    const handleClick = useMemo(
      () => {
        if (closeOnClick) {
          return () => setOpen(false);
        }
        return undefined;
      },
      [closeOnClick, setOpen],
    );
    return (
      <RawOverlay
        {...props}
        ref={ref}
        onClick={handleClick}
      />
    );
  },
);
Overlay.displayName = 'Overlay';
