import styled from '@emotion/styled';
import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import type {
  ChangeEventHandler,
} from 'react';
import {
  useCallback,
  useState,
} from 'react';
import { Surface } from '../Surface/Surface';
import { Typography } from '../Typography/Typography';
import { Input as Component } from './Input';

export default {
  title: 'Libs/Design System/Input',
  component: Component,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    label: 'My Awesome Input',
  },
} as ComponentMeta<typeof Component>;

const Wrapper = styled(Surface)(`
  padding: 2rem;
  width: 300px;
`);
const Template: ComponentStory<typeof Component> = (args) => {
  const [text, setText] = useState('');
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      setText(value);
    },
    [],
  );
  return (
    <Wrapper>
      <Component
        {...args}
        value={text}
        onChange={onChange}
      />
      <Typography variant="body1">{`Text: ${text}`}</Typography>
    </Wrapper>
  );
};

export const Input = Template.bind({});
