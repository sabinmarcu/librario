import type { ISBNProps } from '@librario/book';
import { books } from '@librario/book';
import { SearchableBookList } from '@librario/searchable-book-list';
import { Typography } from '@librario/ui';
import {
  useAtomValue,
} from 'jotai';
import type { FC } from 'react';

export const Actions: FC<ISBNProps> = () => (
  <Typography variant="p" color="warning">
    TBD
  </Typography>
);

export const Status: FC<ISBNProps> = () => (
  <Typography variant="body1" color="warning">
    TBD
  </Typography>
);

export const MainListPage: FC = () => {
  const list = useAtomValue(books);
  return (
    <SearchableBookList
      isbnList={list}
      ActionsComponent={Actions}
      StatusComponent={Status}
    />
  );
};
