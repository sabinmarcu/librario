import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { AccountList as Component } from './AccountList';

export default {
  title: 'Features/Account/AccountList',
  component: Component,
  argTypes: {
    showStatus: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    showStatus: true,
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (props) => (
  <Component {...props} />
);
export const AccountList = Template.bind({});
