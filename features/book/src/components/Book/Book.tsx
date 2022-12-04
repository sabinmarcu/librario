import { useAtomValue } from 'jotai';
import type { FC } from 'react';
import { book } from '../../state/book';
import type { ISBNProps } from '../../types';
import type {
  ActionsComponent,
  StatusComponent,
} from './types';
import { BookCard } from './BookCard';
import { BookActions } from './BookActions';
import { BookCover } from './BookCover';
import { BookCardContent } from './BookCardContent';
import { BookTitle } from './BookTitle';
import { BookStatus } from './BookStatus';

export interface BookProps extends ISBNProps {
  StatusComponent?: StatusComponent,
  ActionsComponent?: ActionsComponent,
}

export const Book: FC<BookProps> = ({
  isbn,
  StatusComponent,
  ActionsComponent,
}) => {
  const { name } = useAtomValue(book(isbn));
  return (
    <BookCard>
      <BookCardContent>
        <BookCover isbn={isbn} />
      </BookCardContent>
      <BookTitle variant="h4">{name}</BookTitle>
      {StatusComponent
        ? (
          <BookStatus variant="h6" elevation={10}>
            <StatusComponent isbn={isbn} />
          </BookStatus>
        )
        : undefined}
      {ActionsComponent
        ? (
          <BookActions>
            <ActionsComponent isbn={isbn} />
          </BookActions>
        )
        : undefined}
    </BookCard>
  );
};
