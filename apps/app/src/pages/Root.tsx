import { Flex } from '@librario/ui';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const RootPage: FC = () => (
  <Flex grow direction="column">
    <Outlet />
  </Flex>
);
