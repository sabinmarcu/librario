import type {
  ComponentMeta,
  Story,
} from '@storybook/react';
import { useAtom } from 'jotai';
import { AccountItem as Component } from './AccountItem';

import { seedAccounts } from '../seed';
import { accounts } from '../state/accounts';

export default {
  title: 'Features/Account/AccountItem',
  component: Component,
  argTypes: {
    account: {
      options: seedAccounts.map((_, id) => id),
      mapping: seedAccounts.map((account) => account.id),
      control: {
        type: 'radio',
        labels: seedAccounts.map((account) => account.name),
      },
    },
  },
  args: {
    account: seedAccounts[0].id,
  },
} as ComponentMeta<typeof Component>;

const Template: Story<{ account: (typeof seedAccounts)[number]['id'] }> = ({ account: id }) => {
  useAtom(accounts);
  return (
    <>
      <Component id={id} />
    </>
  );
};

export const AccountItem = Template.bind({});
