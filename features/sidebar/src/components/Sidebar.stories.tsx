/* eslint-disable max-len */

import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { Paper } from '@librario/ui';
import styled from '@emotion/styled';
import { Sidebar as SidebarComponent } from './Sidebar';
import {
  args as overlayArgs,
  argTypes as overlayArgTypes,
} from './Overlay.stories';
import {
  args as containerArgs,
  argTypes as containerArgTypes,
} from './Container.stories';
import { SidebarButton } from './SidebarButton';

export const argTypes = {
  ...overlayArgTypes,
  ...containerArgTypes,
};

export const args = {
  ...overlayArgs,
  ...containerArgs,
};

delete (argTypes as any).open;
delete (args as any).open;

export default {
  title: 'Features/Sidebar/Sidebar',
  component: SidebarComponent,
  argTypes,
  args,
  excludeStories: ['argTypes', 'args'],
} as ComponentMeta<typeof SidebarComponent>;

const OverlayWrapper = styled(Paper)`
  position: absolute;
  z-index: 99999;
  width: 20vmin;
  height: 20vmin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Template: ComponentStory<typeof SidebarComponent> = (props) => (
  <>
    <OverlayWrapper>
      <SidebarButton />
    </OverlayWrapper>
    <SidebarComponent {...props} />
  </>
);

export const Sidebar = Template.bind({});
