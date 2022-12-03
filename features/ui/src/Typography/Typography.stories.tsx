import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import { Typography } from './Typography';
import { variants } from './variants/index';

export default {
  title: 'Features/Style Guide/Typography/Component',
  component: Typography,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      mapping: Object.keys(variants),
      control: {
        type: 'select',
        labels: Object.keys(variants)
          .map((key) => key[0].toUpperCase() + key.slice(1)),
      },
    },
  },
  args: {
    variant: 'p',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (props) => (
  <Typography {...props}>The quick brown fox...</Typography>
);

export const Component = Template.bind({});
