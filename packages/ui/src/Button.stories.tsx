import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
