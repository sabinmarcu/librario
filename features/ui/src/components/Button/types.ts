import type {
  HTMLAttributes,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';
import type { Theme } from '@librario/theme';
import type { StyledComponent } from '@emotion/styled';

export type Variant = 'contained' | 'outlined' | 'text' | 'default';
export type Colors = keyof Theme['palette'] | 'default';

export interface ButtonBaseProps extends HTMLAttributes<HTMLButtonElement> {
  color?: Colors;
}

export interface ButtonProps extends ButtonBaseProps {
  variant?: Variant;
}

export type ButtonVariants = Record<
  Variant,
  StyledComponent<
    ButtonBaseProps,
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    {}
  >
>;
