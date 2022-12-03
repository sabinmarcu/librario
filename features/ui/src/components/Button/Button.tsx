import type { StyledComponent } from '@emotion/styled';
import { BaseButton } from './variants/Base';
import { ContainedButton } from './variants/Contained';
import { OutlinedButton } from './variants/Outlined';
import type {
  ButtonBaseProps,
  Variant,
} from './types';
import { compileButton } from './compileButton';

export const variants = {
  contained: ContainedButton,
  outlined: OutlinedButton,
  text: BaseButton,
  default: BaseButton,
} as const satisfies Record<Variant, StyledComponent<ButtonBaseProps>>;

export const Button = compileButton(variants);
