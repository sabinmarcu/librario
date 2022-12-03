import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const P = styled(BaseTypography.withComponent('p'))`
  ${theme.mixins.typography.body2};
`;
