import { css } from '@emotion/react';
import { theme } from '@librario/theme';
import styled from '@emotion/styled';
import { BaseButton } from './Base';

export const ContainedButton = styled(BaseButton)(
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
