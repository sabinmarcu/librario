/* eslint-disable react/default-props-match-prop-types */
import type { ComponentProps } from 'react';
import {
  useMemo,
  useCallback,
  forwardRef,
} from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import { IconButton } from '@librario/ui';
import { useAtom } from 'jotai';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import MenuOpenIcon from 'mdi-react/MenuOpenIcon';
import type {
  ButtonType,
  IconType,
} from '../types';
import { sidebarOpen } from '../state/index';

export interface SidebarButtonProps extends ComponentProps<typeof IconButton> {
  icon?: IconType;
  type?: ButtonType
}

export const SidebarButton = forwardRef<HTMLButtonElement, SidebarButtonProps>(
  ({
    icon,
    type = 'toggle',
    ...props
  }, ref) => {
    const [, setOpen] = useAtom(sidebarOpen);
    const onClick = useCallback(
      () => {
        if (type === 'toggle') {
          setOpen((open) => !open);
        } else if (type === 'open') {
          setOpen(true);
        } else {
          setOpen(false);
        }
      },
      [setOpen, type],
    );
    const Icon = useMemo(
      () => {
        if (icon) {
          return icon;
        }
        switch (type) {
        case 'close': return CloseCircleOutlineIcon;
        case 'open': return MenuOpenIcon;
        default: return MenuIcon;
        }
      },
      [icon, type],
    );
    return (
      <IconButton
        {...props}
        ref={ref}
        onClick={onClick}
      >
        <Icon />
      </IconButton>
    );
  },
);

SidebarButton.defaultProps = {
  variant: 'outlined',
};
