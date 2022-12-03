import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { Paper } from '@librario/ui';
import type { ComponentProps } from 'react';
import type {
  OpenType,
  SidebarPosition,
} from '../types';

export interface SidebarContainerProps extends
  ComponentProps<typeof Paper>,
  OpenType {
  position?: SidebarPosition;
  width?: number;
}

export const SidebarContainer = styled(Paper, {
  shouldForwardProp: (prop) => !['position', 'width', 'open'].includes(prop),
})<SidebarContainerProps>(
  css`
    position: absolute;
    top: 0;
    bottom: 0;
    transition: ${theme.transition.create(['transform', 'leavingScreen'])};
  `,
  ({ width }) => css`
    width: ${width ? `${width}px` : '30vw'};
    max-width: ${width || 500}px;
  `,
  ({ position = 'right' }) => {
    switch (position) {
    case 'left': return css`
      left: 0;
      transform: translateX(-100%);
    `;
    case 'right': return css`
      right: 0;
      transform: translateX(100%);
    `;
    default: return undefined;
    }
  },
  ({ open }) => open && css`
    transform: none;
    transition: ${theme.transition.create(['transform', 'enteringScreen'])};
  `,
);

SidebarContainer.defaultProps = {
  elevation: 2,
};
