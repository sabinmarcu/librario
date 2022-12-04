import styled from '@emotion/styled';
import type { AccountType } from '@librario/account';
import { currentUser } from '@librario/account';
import { theme } from '@librario/theme';
import {
  Button,
  Flex,
} from '@librario/ui';
import { useAtomValue } from 'jotai';
import type { FC } from 'react';
import {
  useMemo,
} from 'react';
import { AppLink } from '../routes/AppLink';

export const NavigationButton = styled(Button)`
  .active & {
    background: ${theme.colors.background.paper};
    &:hover{
      &::after, &::focus {
        opacity: 0.1;
      }
    }
  }
`;

export const UserMenu: FC = () => (
  <Flex>
    <AppLink to="/app/lendings">
      <NavigationButton variant="outlined">My Lendings</NavigationButton>
    </AppLink>
  </Flex>
);
export const AdminMenu: FC = () => (
  <Flex>
    <AppLink to="/app/new">
      <NavigationButton variant="outlined">Add Book</NavigationButton>
    </AppLink>
  </Flex>
);

export const menuMap = {
  user: UserMenu,
  admin: AdminMenu,
} as const satisfies Record<AccountType, FC>;

export const NavigationMenu:FC = () => {
  const { type } = useAtomValue(currentUser)!;
  const ToRender = useMemo(() => menuMap[type], [type]);
  return (
    <ToRender />
  );
};
