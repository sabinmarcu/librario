import {
  Flex,
  ButtonGroup,
} from '@librario/ui';
import type { FC } from 'react';
import { ThemeSelectorButton } from './ThemeSelectorButton';

export const ThemeSelector:FC = () => (
  <Flex grow center>
    <ButtonGroup>
      <ThemeSelectorButton which="light" />
      <ThemeSelectorButton which="dark" />
      <ThemeSelectorButton which="system" />
    </ButtonGroup>
  </Flex>
);
