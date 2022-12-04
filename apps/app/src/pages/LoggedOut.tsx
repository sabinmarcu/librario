import {
  Flex,
  Typography,
} from '@librario/ui';
import type { FC } from 'react';

export const LoggedOutPage: FC = () => (
  <Flex center grow direction="column">
    <Typography variant="h1" color="warning">You&apos;re not logged in!</Typography>
    <Typography variant="h2">Please log in to continue.</Typography>
    <Typography variant="p" color="info">(hint: use the sidebar)</Typography>
  </Flex>
);
