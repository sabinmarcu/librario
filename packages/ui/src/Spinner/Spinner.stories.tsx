import styled from '@emotion/styled';
import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import { Flex } from '../Layout/Flex';
import { Paper } from '../Paper/Paper';
import { Spinner as Component } from './Spinner';

export default {
  title: 'Features/Style Guide/Spinner',
  component: Component,
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 0,
        max: 500,
        step: 1,
      },
    },
    stretch: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 50,
    stretch: false,
  },
} as ComponentMeta<typeof Component>;

const Wrapper = styled(Paper)`
  width: 300px;
  height: 300px;
`.withComponent(Flex);
Wrapper.defaultProps = {
  elevation: 2,
  center: true,
};

const Template: ComponentStory<typeof Component> = (args) => (
  <Wrapper>
    <Component {...args} />
  </Wrapper>
);

export const Spinner = Template.bind({});
