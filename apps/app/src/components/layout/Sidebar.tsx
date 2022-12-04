import styled from '@emotion/styled';
import { AccountList } from '@librario/account';
import {
  Sidebar,
  SidebarButton,
} from '@librario/sidebar';
import {
  Container,
  Flex,
  Toolbar,
} from '@librario/ui';
import type { FC } from 'react';
import { ThemeSelector } from '../theme/ThemeSelector';

export interface SidebarContentProps {
  toolbar?: boolean;
}

export const SidebarContainer = styled(Container)<SidebarContentProps>(
  ({ toolbar }) => ({
    padding: toolbar ? '0 1rem' : '2rem 1rem',
  }),
).withComponent(Flex);

export const AppSidebar: FC = () => (
  <Sidebar>
    <Toolbar>
      <SidebarContainer grow align="center" justify="space-between">
        <SidebarButton type="close" />
        <ThemeSelector />
      </SidebarContainer>
    </Toolbar>
    <SidebarContainer direction="column" gap={1}>
      <AccountList showStatus />
    </SidebarContainer>
  </Sidebar>
);
