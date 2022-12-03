import { useAtomValue } from 'jotai';
import type {
  FC,
  PropsWithChildren,
} from 'react';
import {
  isAdmin,
  isLoggedIn,
  isUser,
} from '../state/current';

export const IfLoggedIn: FC<PropsWithChildren> = ({ children }) => {
  const loggedIn = useAtomValue(isLoggedIn);
  if (!loggedIn) {
    return null;
  }
  return <>{children}</>;
};

export const IfLoggedOut: FC<PropsWithChildren> = ({ children }) => {
  const loggedIn = useAtomValue(isLoggedIn);
  if (loggedIn) {
    return null;
  }
  return <>{children}</>;
};

export const IfAdmin: FC<PropsWithChildren> = ({ children }) => {
  const admin = useAtomValue(isAdmin);
  if (!admin) {
    return null;
  }
  return <>{children}</>;
};

export const IfUser: FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(isUser);
  if (!user) {
    return null;
  }
  return <>{children}</>;
};
