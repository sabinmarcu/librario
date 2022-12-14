import styled from '@emotion/styled';
import {
  Flex,
  Typography,
} from '@librario/ui';
import type {
  ComponentProps,
  FC,
} from 'react';
import type { BookProps } from '../Book/Book';
import { Book } from '../Book/Book';

export type BookListProps =
& Omit<BookProps, 'isbn'>
& ComponentProps<typeof Flex>
& {
  isbnList: string[],
};

export const BookListWrapper = styled(Flex)(
  ({ gap = 4 }) => `
    gap: ${gap}rem;
    padding: ${gap}rem;
  `,
);

export const BookList: FC<BookListProps> = ({
  isbnList,
  StatusComponent,
  ActionsComponent,
  useDisabledHook,
  ...props
}) => (isbnList.length ? (
  <BookListWrapper wrap="wrap" {...props}>
    {isbnList.map((isbn) => (
      <Book
        isbn={isbn}
        key={isbn}
        useDisabledHook={useDisabledHook}
        StatusComponent={StatusComponent}
        ActionsComponent={ActionsComponent}
      />
    ))}
  </BookListWrapper>
) : (
  <Flex grow center direction="column" style={{ width: '100%' }}>
    <Typography variant="h1" color="error">Nothing to see here!</Typography>
    <Typography variant="h2" color="info">Try searching for something else.</Typography>
  </Flex>
));
