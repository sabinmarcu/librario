import { css } from '@emotion/react';
import { theme } from '@librario/theme';
import styled from '@emotion/styled';
import { BaseButton } from './Base';

export const OutlinedButton = styled(BaseButton)(
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
