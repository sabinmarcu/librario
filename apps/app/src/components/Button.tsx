import { css } from '@emotion/react';
import type { StyledComponent } from '@emotion/styled';
import styled from '@emotion/styled';
import { withRipple } from '@librario/ripple';
import type { Theme } from '@librario/theme';
import { theme } from '@librario/theme';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type Variant = 'contained' | 'outlined' | 'text' | 'default';
export type Colors = keyof Theme['palette'] | 'default';

export interface ButtonBaseProps extends HTMLAttributes<HTMLButtonElement> {
  color?: Colors;
}

export const BaseButton = styled.button<ButtonBaseProps>(
  css`
    border-radius: ${theme.shape.borderRadius};
    border: none;
    background: transparent;
    padding: 1rem;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: solid 1px transparent;
    &::after {
      content: "";
      pointer-events: none;
      background: transparent;
      position: absolute;
      transition: ${theme.transition.create('background')};
      inset: 0;
    }
    &::after {
      content: "";
      pointer-events: none;
      background: ${theme.colors.interactions.main};
      position: absolute;
      transition: ${theme.transition.create('opacity')};
      inset: 0;
      opacity: 0;
    }
    &:not(:disabled, :focus):hover::after {
      opacity: ${theme.interactions.hoverOpacity};
    }
    &:disabled::after {
      opacity: ${theme.interactions.disabledOpacity};
    }
    &:focus::after {
      opacity: ${theme.interactions.selectedOpacity};
    }
  `,
  ({ color }) => {
    if (!color || color === 'default') {
      return css`
        color: ${theme.colors.text.main};
      `;
    }
    return css`
      color: ${theme.palette[color].main};
    `;
  },
);

export interface ButtonProps extends ButtonBaseProps {
  variant?: Variant;
}

const TextButton = styled(BaseButton)();
const ContainedButton = styled(BaseButton)(
  ({ color }) => {
    const common = css`
      box-shadow: ${theme.shadows[2]};
      transition: ${theme.transition.create('boxShadow')};
      &:hover {
        box-shadow: ${theme.shadows[4]};
      }
      &::after {
        background: ${theme.colors.interactions.contrastMain};
      }
    `;
    if (!color || color === 'default') {
      return css`
        ${common}
        background: ${theme.colors.background.paper};
        border-color: ${theme.colors.background.paper};
        color: ${theme.colors.text.main};
      `;
    }
    return css`
      ${common}
      background: ${theme.palette[color].main};
      border-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
    `;
  },
);
const OutlinedButton = styled(BaseButton)(
  ({ color }) => {
    if (!color || color === 'default') {
      return css`
        border-color: ${theme.colors.text.main};
      `;
    }
    return css`
      border-color: ${theme.palette[color].main};
      color: ${theme.palette[color].main};
      &:not(:disabled, :focus):hover::after {
        background: ${theme.palette[color].lightest};
      }
    `;
  },
);

const variants = {
  contained: ContainedButton,
  outlined: OutlinedButton,
  text: TextButton,
  default: TextButton,
} as const satisfies Record<Variant, StyledComponent<ButtonBaseProps>>;

export const Button = withRipple(
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
