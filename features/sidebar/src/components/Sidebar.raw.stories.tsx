/* eslint-disable max-len */

import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { RawSidebar as SidebarComponent } from './Sidebar';
import {
  args as overlayArgs,
  argTypes as overlayArgTypes,
} from './Overlay.stories';
import {
  args as containerArgs,
  argTypes as containerArgTypes,
} from './Container.stories';

export const argTypes = {
  ...overlayArgTypes,
  ...containerArgTypes,
};

export const args = {
  ...overlayArgs,
  ...containerArgs,
};

export default {
  title: 'Features/Sidebar/Raw Sidebar',
  component: SidebarComponent,
  argTypes,
  args,
  excludeStories: ['argTypes', 'args'],
} as ComponentMeta<typeof SidebarComponent>;

const Template: ComponentStory<typeof SidebarComponent> = (props) => (
  <>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos enim error rerum ullam magni earum quaerat exercitationem libero blanditiis suscipit totam nesciunt voluptate quia, sint optio vero labore dolorum ab?</p>
    <SidebarComponent {...props} />
  </>
);

export const RawSidebar = Template.bind({});
