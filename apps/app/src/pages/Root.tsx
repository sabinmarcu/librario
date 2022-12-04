import { Flex } from '@librario/ui';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/layout/AppBar';
import { AppSidebar } from '../components/layout/Sidebar';

export const RootPage: FC = () => (
  <Flex grow direction="column">
    <AppBar />
    <AppSidebar />
    <Outlet />
  </Flex>
);
