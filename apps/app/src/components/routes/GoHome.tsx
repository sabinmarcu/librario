import { IconButton } from '@librario/ui';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { useMatch } from 'react-router-dom';
import HomeVariantOutlineIcon from 'mdi-react/HomeVariantOutlineIcon';
import { AppLink } from './AppLink';

export const GoHomeButton = forwardRef<HTMLButtonElement, ComponentProps<typeof IconButton>>(
  (props, ref) => {
    const isApp = useMatch('/app');
    const isRoot = useMatch('/');
    if (isApp || isRoot) return null;
    return (
      <AppLink to="/app">
        <IconButton {...props} ref={ref} variant="outlined">
          <HomeVariantOutlineIcon />
        </IconButton>
      </AppLink>
    );
  },
);
