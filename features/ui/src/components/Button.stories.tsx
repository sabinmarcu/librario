import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  ComponentMeta,
  ComponentStory,
  Story,
} from '@storybook/react';

import type {
  Colors,
  Variant,
} from './Button';
import { Button } from './Button';

export default {
  title: 'Features/Style Guide/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children || 'Button'}</Button>
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
      <Button
        {...props}
        variant={variant}
        key={color || 'default'}
        color={color}
      >
        {color || 'default'}
      </Button>
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
