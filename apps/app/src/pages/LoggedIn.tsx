import {
  Flex,
  Typography,
} from '@librario/ui';
import type { FC } from 'react';

export const LoggedInPage: FC = () => (
  <Flex center grow>
    <Typography variant="h1" color="success">Logged In</Typography>
  </Flex>
);
