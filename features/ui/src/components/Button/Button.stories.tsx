import type {
  ComponentMeta,
} from '@storybook/react';
import { Button } from './Button';
import {
  compileColorsOfVariant,
  compileTemplate,
  argTypes,
} from './storybook';

export default {
  title: 'Features/Style Guide/Button',
  component: Button,
  argTypes: {
    ...argTypes,
  },
} as ComponentMeta<typeof Button>;

const Template = compileTemplate(Button, () => (<span>Button</span>));

export const Showcase = Template.bind({});
Showcase.args = {
  color: 'primary',
  variant: 'contained',
};

const ColorsOfVariant = compileColorsOfVariant(Button, (color) => (<span>{color || 'default'}</span>));

export const _Default = ColorsOfVariant.bind({});
_Default.args = { variant: 'default' };

export const __Contained = ColorsOfVariant.bind({});
__Contained.args = { variant: 'contained' };

export const __Outlined = ColorsOfVariant.bind({});
__Outlined.args = { variant: 'outlined' };

export const __Test = ColorsOfVariant.bind({});
__Test.args = { variant: 'text' };
