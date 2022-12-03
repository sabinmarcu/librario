import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { withRipple } from '@librario/ripple';
import { forwardRef } from 'react';
import type { ButtonProps } from './Button';
import { variants as baseVariants } from './Button';

const style = css`
  padding: 0.5rem;
  border-radius: 50%;
  line-height: 0;
`;

export const variants = Object.entries(baseVariants)
  .reduce<typeof baseVariants>(
    (acc, [key, value]) => ({
      ...acc,
      [key]: styled(value)(style),
    }),
    {} as any,
  );

export const IconButton = withRipple(
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
