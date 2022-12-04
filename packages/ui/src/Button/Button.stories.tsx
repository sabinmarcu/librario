import type {
  ComponentMeta,
} from '@storybook/react';
import { Button } from './Button';
import {
  compileColorsOfVariant,
  compileTemplate,
  argTypes,
  defaultArgs,
} from './storybook';

export default {
  title: 'Libs/Design System/Button',
  component: Button,
  argTypes: {
    ...argTypes,
  },
  args: {
    ...defaultArgs,
  },
} as ComponentMeta<typeof Button>;

const Template = compileTemplate(Button, () => (<span>Button</span>));

export const Showcase = Template.bind({});

const ColorsOfVariant = compileColorsOfVariant(Button, (color) => (<span>{color || 'default'}</span>));

export const _Default = ColorsOfVariant.bind({});
_Default.args = { variant: 'default' };

export const __Contained = ColorsOfVariant.bind({});
__Contained.args = { variant: 'contained' };

export const __Outlined = ColorsOfVariant.bind({});
__Outlined.args = { variant: 'outlined' };

export const __Text = ColorsOfVariant.bind({});
__Text.args = { variant: 'text' };
