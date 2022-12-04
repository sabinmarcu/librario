import styled from '@emotion/styled';
import {
  Paper,
  Typography,
} from '@librario/ui';
import { cardStatus } from './constants';

export interface BookStatusProps {
  position?: 'left' | 'right'
  offset?: number
}

export const BookStatus = styled(Typography, {
  shouldForwardProp: (prop) => !['position'].includes(prop),
})<BookStatusProps>(`
  padding: 0.5rem;
`, ({ position = 'right', offset = 1 }) => `
  --position-left: ${position === 'left' ? 0 : 'auto'};
  --offset-left: ${position === 'left' ? `${0 - offset}rem` : 'auto'};
  --position-right: ${position === 'right' ? 0 : 'auto'};
  --offset-right: ${position === 'right' ? `${0 - offset}rem` : 'auto'};
`).withComponent(Paper);
BookStatus.defaultProps = {
  variant: 'h6',
  elevation: 2,
  [cardStatus]: true,
} as any;
