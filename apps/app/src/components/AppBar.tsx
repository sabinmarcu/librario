import type { FC } from 'react';
import {
  Container,
  Flex,
  Toolbar,
  Typography,
} from '@librario/ui';
import { SidebarButton } from '@librario/sidebar';
import styled from '@emotion/styled';

export const Title = styled(Typography)`
  flex: 1;
`;

export const AppBar: FC = () => (
  <Toolbar>
    <Container>
      <Flex grow align="center" justify="space-between">
        <Title variant="h4">Librario</Title>
        <SidebarButton type="open" />
      </Flex>
    </Container>
  </Toolbar>
);
