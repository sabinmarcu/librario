import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  FC,
  MutableRefObject,
  PropsWithChildren,
} from 'react';
import {
  useMemo,
} from 'react';

import { Surface } from '../../Surface/Surface';
import { useScroll } from '../hooks/useScroll';

export interface RawToolbarProps {
  active?: boolean;
}

export const RawToolbar = styled(Surface.withComponent('header'))<RawToolbarProps>(
  `
    position: sticky;
    inset: 0 0 auto 0;
    display: flex;
    flex: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    transition: ${theme.transition.create('background', 'boxShadow')};
  `,
  ({ active }) => (active
    ? css`
      background: ${theme.colors.background.paper};
    `
    : ''
  ),
);

export interface ToolbarProps extends PropsWithChildren {
  trackScroll?: boolean,
  trackTolerance?: number,
  trackTarget?: MutableRefObject<HTMLElement>,
}

export const Toolbar: FC<ToolbarProps> = ({
  trackScroll = true,
  trackTolerance = 50,
  trackTarget = { current: document.body },
  children,
}) => {
  const scroll = useScroll(trackTarget);
  const isScrolled = useMemo(
    () => {
      if (!trackScroll) {
        return false;
      }
      return scroll > trackTolerance;
    },
    [scroll, trackScroll, trackTolerance],
  );
  return (
    <RawToolbar elevation={isScrolled ? 3 : 0} active={isScrolled}>
      {children}
    </RawToolbar>
  );
};
