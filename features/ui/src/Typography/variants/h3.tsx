import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const H3 = styled(BaseTypography.withComponent('h3'))`
  ${theme.mixins.typography.h3};
`;
