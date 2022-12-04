import type { FC } from 'react';
import {
  Container,
  Flex,
  Toolbar,
  Typography,
} from '@librario/ui';
import { SidebarButton } from '@librario/sidebar';
import styled from '@emotion/styled';
import { GoHomeButton } from '../routes/GoHome';

export const Title = styled(Typography)`
  flex: 1;
`;

export const AppBar: FC = () => (
  <Toolbar>
    <Container>
      <Flex grow align="center" justify="space-between" gap={1}>
        <GoHomeButton />
        <Title variant="h4">Librario</Title>
        <SidebarButton type="open" />
      </Flex>
    </Container>
  </Toolbar>
);
