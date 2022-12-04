import { atom } from 'jotai';
import { seedBooks } from '../seed';
import type { BookType } from './book';
import { book } from './book';

const allBooks = atom([] as string[]);
export const books = atom(
  (get) => get(allBooks),
  (get, set, update: BookType) => {
    const list = get(allBooks);
    const { isbn } = update;
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
