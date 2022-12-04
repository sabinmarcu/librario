import { isUser } from '@librario/account';
import { useAtomValue } from 'jotai';
import type {
  FC,
} from 'react';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

export const IsUserRoute: FC = () => {
  const check = useAtomValue(isUser);
  if (!check) return <Navigate to="/" />;
  return <Outlet />;
};
