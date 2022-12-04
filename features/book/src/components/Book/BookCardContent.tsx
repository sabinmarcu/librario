import styled from '@emotion/styled';
import {
  Flex,
  Surface,
} from '@librario/ui';
import { cardInner } from './constants';

export const BookCardContent = styled(Surface)().withComponent(Flex);
BookCardContent.defaultProps = {
  [cardInner]: true,
  direction: 'column',
} as any;
