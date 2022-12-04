import styled from '@emotion/styled';
import type { Theme } from '@librario/theme';
import { theme } from '@librario/theme';

export interface BaseTypographyProps {
  color?: keyof Theme['palette'] | 'default'
}

export const BaseTypography = styled.div<BaseTypographyProps>(
  ({ color }) => `
    color: ${color && color !== 'default' ? theme.palette[color].main : theme.colors.text.main};
  `,
);
