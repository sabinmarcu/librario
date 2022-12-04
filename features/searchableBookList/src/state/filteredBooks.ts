import {
  bookName,
  books,
} from '@librario/book';
import { atom } from 'jotai';

export const filteredBooksList = atom([] as string[]);
export const filteredBooks = atom<string[], string>(
  (get) => get(filteredBooksList),
  (get, set, update: string) => {
    const isbns = get(books);
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

filteredBooks.onMount = (setSelf) => { setSelf(''); };
