import type {
  ComponentMeta,
} from '@storybook/react';
import ReactIcon from 'mdi-react/ReactIcon';
import { IconButton } from './IconButton';
import {
  compileColorsOfVariant,
  compileTemplate,
  argTypes,
  defaultArgs,
} from './storybook';

export default {
  title: 'Libs/Design System/IconButton',
  component: IconButton,
  argTypes: {
    ...argTypes,
  },
  args: {
    ...defaultArgs,
  },
} as ComponentMeta<typeof IconButton>;

const Template = compileTemplate(IconButton, () => <ReactIcon />);

export const Showcase = Template.bind({});

const ColorsOfVariant = compileColorsOfVariant(IconButton, () => <ReactIcon />);

export const _Default = ColorsOfVariant.bind({});
_Default.args = { variant: 'default' };

export const __Contained = ColorsOfVariant.bind({});
__Contained.args = { variant: 'contained' };

export const __Outlined = ColorsOfVariant.bind({});
__Outlined.args = { variant: 'outlined' };

export const __Text = ColorsOfVariant.bind({});
__Text.args = { variant: 'text' };
