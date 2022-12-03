import styled from '@emotion/styled';
import {
  Paper,
  Surface,
} from '@librario/ui';
import type {
  Meta,
  Story,
} from '@storybook/react';
import type {
  FC,
  PropsWithChildren,
} from 'react';
import { AccountList } from './AccountList';
import {
  IfAdmin,
  IfLoggedIn,
  IfLoggedOut,
  IfUser,
} from './Conditionals';

export default {
  title: 'Features/Account/Conditionals',
} as Meta;

const ConditionalTestWrapper = styled(Paper)`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
ConditionalTestWrapper.defaultProps = {
  elevation: 3,
};

const ConditionalWrapper = styled(Surface)`
  display: flex;
  flex: row wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const ConditionalTest: FC<{ Component: FC<PropsWithChildren>, name: string }> = ({
  Component,
  name,
}) => (
  <ConditionalTestWrapper>
    <Component>
      {name}
    </Component>
  </ConditionalTestWrapper>
);

export const Conditionals: Story = () => (
  <>
    <ConditionalWrapper>
      <ConditionalTest Component={IfAdmin} name="IfAdmin" />
      <ConditionalTest Component={IfUser} name="IfUser" />
      <ConditionalTest Component={IfLoggedIn} name="IfLoggedIn" />
      <ConditionalTest Component={IfLoggedOut} name="IfLoggedOut" />
    </ConditionalWrapper>
    <AccountList />
  </>
);
