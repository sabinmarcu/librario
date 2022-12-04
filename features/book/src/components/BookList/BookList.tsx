import styled from '@emotion/styled';
import { Flex } from '@librario/ui';
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
  isbnList: string[]
};

export const BookListWrapper = styled(Flex)(
  ({ gap = 3 }) => `
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
}) => (
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
);
