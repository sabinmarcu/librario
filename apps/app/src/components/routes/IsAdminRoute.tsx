import { isAdmin } from '@librario/account';
import { useAtomValue } from 'jotai';
import type {
  FC,
} from 'react';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

export const IsAdminRoute: FC = () => {
  const check = useAtomValue(isAdmin);
  if (!check) return <Navigate to="/" />;
  return <Outlet />;
};
