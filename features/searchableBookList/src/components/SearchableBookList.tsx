import type {
  ComponentProps,
  FC,
} from 'react';
import { useEffect } from 'react';
import {
  BookList,
} from '@librario/book';
import {
  searchState,
} from '@librario/search';
import {
  useAtom,
  useAtomValue,
} from 'jotai';
import { filteredBooks } from '../state/filteredBooks';

export interface SearchableBookListProps extends
  Omit<ComponentProps<typeof BookList>, 'isbnList'> {}

export const SearchableBookList: FC<SearchableBookListProps> = (props) => {
  const search = useAtomValue(searchState);
  const [isbnList, setIsbnlist] = useAtom(filteredBooks);
  useEffect(
    () => { setIsbnlist(search); },
    [search],
  );
  return (
    <BookList {...props} isbnList={isbnList} />
  );
};
SearchableBookList.displayName = 'SearchableBookList';
