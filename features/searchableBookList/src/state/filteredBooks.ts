import {
  bookName,
} from '@librario/book';
import { atom } from 'jotai';

export const toFilterBy = atom<string>('');

export const booksToFilterList = atom<string[]>([]);

export const filteredBooksList = atom<string[]>([]);
export const filteredBooks = atom<string, string>(
  (get) => get(toFilterBy),
  (get, set, update: string) => {
    set(toFilterBy, update);
    const isbns = get(booksToFilterList);
    const match = update.toLowerCase();
    const filtered = isbns.filter(
      (isbn) => {
        const name = get(bookName(isbn));
        return name.toLowerCase().includes(match);
      },
    );
    set(filteredBooksList, filtered);
  },
);

export const booksToFilter = atom<string[], string[]>(
  (get) => get(booksToFilterList),
  (get, set, update) => {
    set(booksToFilterList, update);
    set(filteredBooks, get(toFilterBy));
  },
);
booksToFilter.onMount = (setSelf) => { setSelf([]); };

filteredBooks.onMount = (setSelf) => { setSelf(''); };
