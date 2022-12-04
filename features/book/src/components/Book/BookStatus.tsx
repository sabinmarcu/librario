import styled from '@emotion/styled';
import {
  Paper,
  Typography,
} from '@librario/ui';
import { cardStatus } from './constants';

export const BookStatus = styled(Typography)`
  padding: 0.5rem;
`.withComponent(Paper);
BookStatus.defaultProps = {
  variant: 'h6',
  elevation: 2,
  [cardStatus]: true,
} as any;
