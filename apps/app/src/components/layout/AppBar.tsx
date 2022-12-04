import type { FC } from 'react';
import {
  Container,
  Flex,
  Toolbar,
  Typography,
} from '@librario/ui';
import { SidebarButton } from '@librario/sidebar';
import { Search } from '@librario/search';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import { IfLoggedIn } from '@librario/account';
import { GoHomeButton } from './GoHome';
import { NavigationMenu } from './NavigationMenu';

export const SearchContainer = styled(Flex)`
  color: ${theme.colors.text.muted};
`;

export const AppBar: FC = () => (
  <Toolbar>
    <Container>
      <Flex grow align="center" justify="space-between" gap={1}>
        <GoHomeButton />
        <Typography variant="h4">Librario</Typography>
        <SearchContainer grow>
          <Search />
        </SearchContainer>
        <IfLoggedIn>
          <NavigationMenu />
        </IfLoggedIn>
        <SidebarButton type="open" />
      </Flex>
    </Container>
  </Toolbar>
);
