import type { Book } from './state/book';

export const seedBooks = [
  {
    isbn: '9780451457813',
    name: 'Storm Front',
    price: 30,
    copies: 10,
  },
  {
    isbn: '9780451458124',
    name: 'Fool Moon',
    price: 32,
    copies: 3,
  },
  {
    isbn: '9780451458445',
    name: 'Grave Peril',
    price: 25,
    copies: 8,
  },
  {
    isbn: '9780451458926',
    name: 'Summer Knight',
    price: 40,
    copies: 2,
  },
] as const satisfies Readonly<Book[]>;
