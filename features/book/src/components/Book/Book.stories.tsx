import {
  Flex,
} from '@librario/ui';
import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import { useAtom } from 'jotai';
import { seedBooks } from '../../seed';
import { books } from '../../state/books';
import { Book as Component } from './Book';

export default {
  title: 'Features/Book/Book',
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

const Template: ComponentStory<typeof Component> = (props) => {
  useAtom(books);
  return (
    <Flex center grow gap={5}>
      <Component
        {...props}
        ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
        StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
      />
    </Flex>
  );
};

export const Book = Template.bind({});
