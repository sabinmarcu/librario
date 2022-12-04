import styled from '@emotion/styled';
import type {
  ReactElement,
} from 'react';
import type { Button } from '../Button/Button';
import type { IconButton } from '../Button/IconButton';
import { Flex } from '../Layout/Flex';

export type ButtonGroupButton = ReactElement<(typeof Button | typeof IconButton)>;
export interface ButtonGroupProps {
  children: ButtonGroupButton | ButtonGroupButton[];
}

export const ButtonGroup = styled(Flex)<ButtonGroupProps>`
  & > button:not(:first-of-type, :last-of-type) {
    border-radius: 0;
    border-left: none;
  }
  & > button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }
`;

ButtonGroup.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  gap: 0,
};
