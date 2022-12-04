import { isLoggedIn } from '@librario/account';
import { useAtomValue } from 'jotai';
import type {
  FC,
} from 'react';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

export const LoggedOutRoute: FC = () => {
  const loggedIn = useAtomValue(isLoggedIn);
  if (loggedIn) return <Navigate to="/app" />;
  return <Outlet />;
};
