import type { StyledComponent } from '@emotion/styled';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BaseButton } from './variants/Base';
import { ContainedButton } from './variants/Contained';
import { OutlinedButton } from './variants/Outlined';
import type {
  ButtonBaseProps,
  Variant,
} from './types';
import { compileButton } from './compileButton';

const iconButtonStyle = css`
  padding: 0.5rem;
  border-radius: 50%;
  line-height: 0;
`;

export const variants = {
  contained: styled(ContainedButton)(iconButtonStyle),
  outlined: styled(OutlinedButton)(iconButtonStyle),
  text: styled(BaseButton)(iconButtonStyle),
  default: styled(BaseButton)(iconButtonStyle),
} as const satisfies Record<Variant, StyledComponent<ButtonBaseProps>>;

export const IconButton = compileButton(variants);
