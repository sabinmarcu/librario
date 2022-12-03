import type { FC } from 'react';
import { useMemo } from 'react';
import { provideTag } from '@librario/utils';
import { createPortal } from 'react-dom';
import { useAtom } from 'jotai';
import type { SidebarContainerProps } from './Container';
import { SidebarContainer } from './Container';
import type { OverlayProps } from './Overlay';
import { Overlay } from './Overlay';
import { sidebarOpen } from '../state/index';

export type RawSidebarProps = SidebarContainerProps & OverlayProps;

export const RawSidebar: FC<RawSidebarProps> = (props) => {
  const overlayContainer = useMemo(
    () => provideTag('data-sidebar', 'div', document.body),
    [],
  );
  const overlayProps = useMemo(
    () => ({
      opacity: props.opacity,
      closeOnClick: props.closeOnClick,
      open: props.open,
    }),
    [props.opacity, props.open],
  );
  const containerProps = useMemo(
    () => ({
      position: props.position,
      width: props.width,
      open: props.open,
      children: props.children,
    }),
    [props.opacity, props.width, props.open],
  );
  return createPortal(
    (
      <>
        <Overlay {...overlayProps} />
        <SidebarContainer {...containerProps} />
      </>
    ),
    overlayContainer,
  );
};

export type SidebarProps = Omit<RawSidebarProps, 'open'>;

export const Sidebar: FC<SidebarProps> = (props) => {
  const [open] = useAtom(sidebarOpen);
  return (<RawSidebar {...props} open={open} />);
};
