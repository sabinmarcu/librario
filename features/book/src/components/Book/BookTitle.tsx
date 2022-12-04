import styled from '@emotion/styled';
import { Typography } from '@librario/ui';
import { cardTitle } from './constants';

export const BookTitle = styled(Typography)`
`;
BookTitle.defaultProps = {
  variant: 'h5',
  [cardTitle]: true,
} as any;
