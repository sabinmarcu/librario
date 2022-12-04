import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const H2 = styled(BaseTypography.withComponent('h2'))`
  ${theme.mixins.typography.h2};
`;
