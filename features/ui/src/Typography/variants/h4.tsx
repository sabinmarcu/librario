import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const H4 = styled(BaseTypography.withComponent('h4'))`
  ${theme.mixins.typography.h4};
`;
