import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  useAtomValue,
} from 'jotai';
import {
  seedBooks,
  books,
} from '@librario/book';
import { accounts } from '@librario/account';
import { BookAvailableStatus as Component } from './BookAvailableStatus';
import { lendings } from '../state/lend';

export default {
  title: 'Features/Lend/Book Available Status',
  argTypes: {
    isbn: {
      options: seedBooks.map((_, idx) => idx),
      mapping: seedBooks.map((book) => book.isbn),
      control: {
        type: 'select',
        labels: seedBooks.map((book) => book.name),
      },
    },
    detailed: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    isbn: seedBooks[0].isbn,
    detailed: true,
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (props) => {
  useAtomValue(books);
  useAtomValue(accounts);
  useAtomValue(lendings);
  return (
    <Component {...props} />
  );
};

export const BookAvailableStatus = Template.bind({});
