import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const H6 = styled(BaseTypography.withComponent('h6'))`
  ${theme.mixins.typography.h6};
`;
