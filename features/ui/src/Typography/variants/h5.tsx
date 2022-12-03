import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { BaseTypography } from './base';

export const H5 = styled(BaseTypography.withComponent('h5'))`
  ${theme.mixins.typography.h5};
`;
