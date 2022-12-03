import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  Surface,
  H3,
  P,
} from '@librario/ui';
import { useAtomValue } from 'jotai';
import type { FC } from 'react';
import { accounts } from '../state/accounts';
import {
  currentUser,
  isAdmin,
  isLoggedIn,
  isUser,
} from '../state/current';
import { AccountItem } from './AccountItem';

export const List = styled(Surface)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${theme.shape.borderRadius};
  & > * {
    border-bottom: solid 1px ${theme.colors.background.paper}
  }
`;
List.defaultProps = {
  elevation: 2,
};

const loginStatusStyle = css`
  padding-left: 1rem;
`;
const loginStatusBorder = ` solid 2px ${theme.colors.background.paper}`;

export const LoginStatusTitle = styled(H3)`
  ${loginStatusStyle}
  padding-bottom: 1.5rem;
  border-bottom: ${loginStatusBorder};
`;

export const AccountDetails: FC = () => {
  const { name } = useAtomValue(currentUser)!;
  const admin = useAtomValue(isAdmin);
  const user = useAtomValue(isUser);
  return (
    <Surface>
      <ul>
        <li>{`Name: ${name}`}</li>
        <ul>
          <li>{`Admin: ${admin}`}</li>
          <li>{`User: ${user}`}</li>
        </ul>
      </ul>
    </Surface>
  );
};

export const LoginStatusWrapper = styled(Surface)`
  border: ${loginStatusBorder};
  border-radius: ${theme.shape.borderRadius};
  margin-bottom: 1rem;
`;
LoginStatusWrapper.defaultProps = {
  elevation: 1,
};

export const NotLoggedInText = styled(P)`
  ${loginStatusStyle}
  font-size: 1.5rem;
`;

export const LoginStatus: FC = () => {
  const loggedIn = useAtomValue(isLoggedIn);
  return (
    <LoginStatusWrapper>
      <LoginStatusTitle>Login Status</LoginStatusTitle>
      {loggedIn
        ? (<AccountDetails />)
        : (<NotLoggedInText>Not logged in</NotLoggedInText>)}
    </LoginStatusWrapper>
  );
};

export interface AccountListProps {
  showStatus?: boolean,
}

export const AccountList: FC<AccountListProps> = ({
  showStatus,
}) => {
  const list = useAtomValue(accounts);
  return (
    <>
      {showStatus ? <LoginStatus /> : null}
      <List>
        {list.map((id) => (
          <AccountItem key={id} id={id} />
        ))}
      </List>
    </>
  );
};
