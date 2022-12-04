import {
  Flex,
  Typography,
} from '@librario/ui';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface NotFoundPageProps {
  timeout?: number
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
  timeout = 3000,
}) => {
  const navigate = useNavigate();
  useEffect(
    () => {
      const timeoutRef = setTimeout(
        navigate,
        timeout,
        '/',
      );
      return () => clearTimeout(timeoutRef);
    },
    [timeout, navigate],
  );
  return (
    <Flex center grow direction="column">
      <Typography color="error" variant="h1">404</Typography>
      <Typography color="warning" variant="h2">Page not found!</Typography>
      <Typography color="info" variant="p">Redirecting to home page...</Typography>
    </Flex>
  );
};
