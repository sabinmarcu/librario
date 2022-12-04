import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  useAtomValue,
} from 'jotai';
import { books } from '../../state/books';
import { BookList as Component } from './BookList';

export default {
  title: 'Features/Book/Book List',
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (props) => {
  const list = useAtomValue(books);
  return (
    <Component
      {...props}
      isbnList={list}
      ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
      StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
    />
  );
};

export const BookList = Template.bind({});
