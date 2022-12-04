import type {
  HTMLAttributes,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';
import type { StyledComponent } from '@emotion/styled';
import type { Colors } from '../types';

export type { Colors } from '../types';

export type Variant = 'contained' | 'outlined' | 'text' | 'default';

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
