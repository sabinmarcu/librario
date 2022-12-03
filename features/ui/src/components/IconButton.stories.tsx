import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  ComponentMeta,
  ComponentStory,
  Story,
} from '@storybook/react';
import ReactIcon from 'mdi-react/ReactIcon';
import React from 'react';

import type {
  Colors,
  Variant,
} from './Button';
import { IconButton } from './IconButton';

export default {
  title: 'Features/Style Guide/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', ...Object.keys(theme.palette)],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'contained', 'outlined', 'text'],
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = ({ children, ...args }) => (
  <IconButton {...args}>{children || <ReactIcon />}</IconButton>
);

export const Showcase = Template.bind({});
Showcase.args = {
  color: 'primary',
  variant: 'contained',
};

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ColorsOfVariant: Story<{
  variant: Variant
}> = ({ variant, ...props }) => (
  <ShowcaseWrapper>
    {[
      undefined,
      ...(Object
        .keys(theme.palette)
        .filter((it) => !['background'].includes(it)) as Colors[]
      ),
    ].map((color) => (
      <IconButton
        {...props}
        variant={variant}
        key={color || 'default'}
        color={color}
      >
        <ReactIcon />
      </IconButton>
    ))}
  </ShowcaseWrapper>
);
ColorsOfVariant.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['contained', 'outlined', 'text', 'default'] satisfies Variant[],
    },
  },
};

export const _Default = ColorsOfVariant.bind({});
_Default.args = { variant: 'default' };

export const __Contained = ColorsOfVariant.bind({});
__Contained.args = { variant: 'contained' };

export const __Outlined = ColorsOfVariant.bind({});
__Outlined.args = { variant: 'outlined' };

export const __Test = ColorsOfVariant.bind({});
__Test.args = { variant: 'text' };
