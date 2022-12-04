import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { seedBooks } from '../seed';
import type { BookType } from './book';
import { book } from './book';

const allBooks = atomWithStorage<string[]>('bookIds', []);
export const books = atom(
  (get) => get(allBooks),
  (get, set, update: BookType) => {
    const list = get(allBooks);
    const { isbn } = update;
    if (list.includes(isbn)) {
      return;
    }
    set(book(isbn), update);
    set(allBooks, [...list, isbn]);
  },
);

let seeded = false;
// Seed Data
books.onMount = (setSelf) => {
  if (!seeded) {
    seeded = true;
    seedBooks.forEach(setSelf);
  }
};
