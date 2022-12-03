import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { SidebarContainer } from './Container';

export const argTypes = {
  open: {
    control: {
      type: 'boolean',
    },
  },
  position: {
    control: {
      type: 'radio',
      options: ['left', 'right'],
    },
  },
  width: {
    control: {
      type: 'range',
      min: 0,
      max: 1000,
      step: 1,
    },
  },
};
export const args = {
  open: true,
  position: 'right',
  width: 400,
};
export default {
  title: 'Features/Sidebar/Container',
  component: SidebarContainer,
  argTypes,
  args,
  excludeStories: ['argTypes', 'args'],
} as ComponentMeta<typeof SidebarContainer>;

const Template: ComponentStory<typeof SidebarContainer> = (props) => (
  <SidebarContainer {...props} />
);

export const Container = Template.bind({});
