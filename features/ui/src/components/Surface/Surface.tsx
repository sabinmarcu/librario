import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type { SurfaceProps } from './types';

export const Surface = styled.div<SurfaceProps>(
  ({ elevation = 0 }) => css`
  box-shadow: ${theme.shadows[elevation]};
  background: ${theme.colors.background.main};
`,
);
