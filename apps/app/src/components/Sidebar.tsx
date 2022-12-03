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

export interface SidebarContentProps {
  toolbar?: boolean;
}

export const SidebarContainer = styled(Container)<SidebarContentProps>(
  ({ toolbar }) => ({
    padding: toolbar ? '0 1rem' : '2rem 1rem',
  }),
);

export const AppSidebar: FC = () => (
  <Sidebar>
    <Toolbar>
      <SidebarContainer>
        <Flex grow align="center" justify="space-between">
          <SidebarButton type="close" />
        </Flex>
      </SidebarContainer>
    </Toolbar>
    <SidebarContainer>
      <AccountList showStatus />
    </SidebarContainer>
  </Sidebar>
);
