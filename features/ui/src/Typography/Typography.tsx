import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { variants } from './variants/index';

export interface TypographyProps extends PropsWithChildren {
  variant: keyof typeof variants;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, children }, ref) => {
    const Component = variants[variant];
    return (
      <Component ref={ref as any}>{children}</Component>
    );
  },
);
