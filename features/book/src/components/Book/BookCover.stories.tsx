import styled from '@emotion/styled';
import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  Flex,
  Paper,
} from '@librario/ui';
import { BookCover as Component } from './BookCover';
import { seedBooks } from '../../seed';

export default {
  title: 'Features/Book/Book Cover',
  component: Component,
  argTypes: {
    isbn: {
      options: seedBooks.map((_, idx) => idx),
      mapping: seedBooks.map((book) => book.isbn),
      control: {
        type: 'select',
        labels: seedBooks.map((book) => book.name),
      },
    },
  },
  args: {
    isbn: seedBooks[0].isbn,
  },
} as ComponentMeta<typeof Component>;

const Wrapper = styled(Paper)(`
  width: 300px;
  height: 500px;
`).withComponent(Flex);
Wrapper.defaultProps = {
  elevation: 2,
};

const Template: ComponentStory<typeof Component> = (args) => (
  <Wrapper center direction="column">
    <Component {...args} />
  </Wrapper>
);

export const BookCover = Template.bind({});
