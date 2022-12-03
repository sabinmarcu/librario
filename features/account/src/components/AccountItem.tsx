import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  Button,
  Paper,
} from '@librario/ui';
import {
  useAtom,
  useAtomValue,
} from 'jotai';
import type { FC } from 'react';
import { useMemo } from 'react';
import {
  account,
} from '../state/account';
import { currentUser } from '../state/current';

export const DisplayName = styled.div`
  flex: 1;
`;

export const AdminDisplay = styled.span`
  font-variant: italic;
  opacity: 0.5;
  color: ${theme.colors.text.secondary};
`;

export const Wrapper = styled(Paper)`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
Wrapper.defaultProps = {
  elevation: 1,
};

export interface AccountItemProps {
  id: string,
}

export const LoginUser: FC<AccountItemProps> = ({
  id,
}) => {
  const [current, setCurrent] = useAtom(currentUser);
  const isCurrent = useMemo(() => current?.id === id, [current, id]);
  const onClick = useMemo(
    () => {
      if (!isCurrent) {
        return () => setCurrent(id);
      }
      return undefined;
    },
    [isCurrent, setCurrent, id],
  );
  if (isCurrent) {
    return null;
  }
  return (
    <Button color="primary" variant="outlined" onClick={onClick}>Login</Button>
  );
};

export const LogoutUser: FC<AccountItemProps> = ({
  id,
}) => {
  const [current, setCurrent] = useAtom(currentUser);
  const isCurrent = useMemo(() => current?.id === id, [current, id]);
  const onClick = useMemo(
    () => {
      if (isCurrent) {
        return () => setCurrent();
      }
      return undefined;
    },
    [isCurrent, setCurrent, id],
  );
  if (!isCurrent) {
    return null;
  }
  return (
    <Button color="warning" variant="outlined" onClick={onClick}>Logout</Button>
  );
};

export const AccountItem: FC<AccountItemProps> = ({
  id,
}) => {
  const { name, type } = useAtomValue(useMemo(() => account(id), [id]));
  const isAdmin = useMemo(() => type === 'admin', [type]);
  if (!name) {
    return <span />;
  }
  return (
    <Wrapper>
      <DisplayName>
        {name}
        {isAdmin && <AdminDisplay> (Admin)</AdminDisplay>}
      </DisplayName>
      <LoginUser id={id} />
      <LogoutUser id={id} />
    </Wrapper>
  );
};
