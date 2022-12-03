/* eslint-disable max-len */

import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { RawOverlay as OverlayComponent } from './Overlay';

export const argTypes = {
  open: {
    control: {
      type: 'boolean',
    },
  },
  opacity: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.1,
    },
  },
};

export const args = {
  open: true,
  opacity: 0.5,
};

export default {
  title: 'Features/Sidebar/Overlay',
  component: OverlayComponent,
  argTypes,
  args,
  excludeStories: ['argTypes', 'args'],
} as ComponentMeta<typeof OverlayComponent>;

const Template: ComponentStory<typeof OverlayComponent> = (props) => (
  <>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos enim error rerum ullam magni earum quaerat exercitationem libero blanditiis suscipit totam nesciunt voluptate quia, sint optio vero labore dolorum ab?</p>
    <OverlayComponent {...props} />
  </>
);

export const Overlay = Template.bind({});
