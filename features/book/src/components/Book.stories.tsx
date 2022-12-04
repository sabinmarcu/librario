import {
  Button,
  Flex,
} from '@librario/ui';
import type {
  Story,
  Meta,
} from '@storybook/react';
import { BookCard } from './BookCard';
import { BookActions } from './BookActions';
import { seedBooks } from '../seed';
import { BookCover } from './BookCover';
import { BookCardContent } from './BookCardContent';
import { BookTitle } from './BookTitle';
import { BookStatus } from './BookStatus';

export default {
  title: 'Features/Book/Book',
  argTypes: {
    book: {
      options: seedBooks.map((_, idx) => idx),
      mapping: seedBooks,
      control: {
        type: 'select',
        labels: seedBooks.map((book) => book.name),
      },
    },
  },
  args: {
    book: seedBooks[0],
  },
} as Meta;

const Card = ({ book: { isbn, name } = {} }: { book: any }) => (
  <BookCard>
    <BookCardContent>
      <BookCover isbn={isbn} />
    </BookCardContent>
    <BookTitle variant="h4">{name}</BookTitle>
    <BookStatus variant="h6" elevation={10}>In stock: 5</BookStatus>
    <BookActions>
      <Button variant="contained" color="primary">Add</Button>
      <Button variant="outlined" color="secondary">Remove</Button>
    </BookActions>
  </BookCard>
);

const Template: Story = (props: any) => (
  <Flex center grow gap={5}>
    <Card {...props} />
    <Card {...props} />
    <Card {...props} />
  </Flex>
);

export const Book = Template.bind({});
