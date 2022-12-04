import type {
  ComponentProps,
  FC,
} from 'react';
import {
  BookList,
} from '@librario/book';
import {
  searchState,
} from '@librario/search';
import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { usePipeJotai } from '@librario/hooks';
import {
  booksToFilter,
  filteredBooks,
  filteredBooksList,
} from '../state/filteredBooks';

export type SearchableBookListProps = ComponentProps<typeof BookList>;

export const SearchableBookList: FC<SearchableBookListProps> = ({ isbnList, ...props }) => {
  usePipeJotai(
    isbnList,
    useSetAtom(booksToFilter),
  );
  usePipeJotai(
    useAtomValue(searchState),
    useSetAtom(filteredBooks),
  );
  const filteredIsbnList = useAtomValue(filteredBooksList);
  return (
    <BookList {...props} isbnList={filteredIsbnList} />
  );
};
SearchableBookList.displayName = 'SearchableBookList';
