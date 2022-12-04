import { withRipple } from '@librario/ripple';
import { forwardRef } from 'react';
import type {
  ButtonProps,
  ButtonVariants,
} from './types';

export * from './types';
export const compileButton = (
  variants: ButtonVariants,
) => withRipple(
  forwardRef<
    HTMLButtonElement,
    ButtonProps
  >(({
    variant = 'text',
    ...props
  }, ref) => {
    const ButtonToRender = variants[variant];
    return (
      <ButtonToRender {...props} ref={ref} />
    );
  }),
);
