import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import type { BaseTypographyProps } from './variants/base';
import { variants } from './variants/index';

export interface TypographyProps extends PropsWithChildren, BaseTypographyProps {
  variant: keyof typeof variants;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, children, ...props }, ref) => {
    const Component = variants[variant];
    return (
      <Component {...props} ref={ref as any}>{children}</Component>
    );
  },
);
