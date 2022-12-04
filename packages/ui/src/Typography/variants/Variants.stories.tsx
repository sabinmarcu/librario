import { theme } from '@librario/theme';
import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import { BaseTypography } from './base';
import { H1 } from './h1';
import { H2 } from './h2';
import { H3 } from './h3';
import { H4 } from './h4';
import { H5 } from './h5';
import { H6 } from './h6';
import { P } from './p';

export const argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default', ...Object.keys(theme.palette)],
    },
  },
};

export const args = {
  color: 'default',
};

export default {
  title: 'Features/Design System/Typography/Raw',
  argTypes,
  args,
  excludeStories: ['argTypes', 'args'],
} as ComponentMeta<typeof BaseTypography>;

const toRender = [
  [BaseTypography, 'Base Typography'],
  [H1, 'Heading 1'],
  [H2, 'Heading 2'],
  [H3, 'Heading 3'],
  [H4, 'Heading 4'],
  [H5, 'Heading 5'],
  [H6, 'Heading 6'],
  [P, 'Paragraph'],
] as const;

const Template: ComponentStory<typeof BaseTypography> = ({
  color,
  ...props
}) => (
  <>
    {toRender.map(([Component, name]) => (
      <Component
        key={name}
        {...props}
        color={color}
      >
        {name as any}

      </Component>
    ))}
  </>
);

export const Raw = Template.bind({});
