import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  Flex,
  Paper,
} from '@librario/ui';
import { cardActions } from './constants';

export const BookActions = styled(Flex)(`
  border-bottom-left-radius: ${theme.shape.borderRadius};
  border-bottom-right-radius: ${theme.shape.borderRadius};
`,
({ gap }) => `
    gap: ${gap || 0}rem;
    padding: ${gap || 0}rem;
  `).withComponent(Paper);
BookActions.defaultProps = {
  gap: 0.7,
  elevation: 4,
  [cardActions]: true,
} as any;
