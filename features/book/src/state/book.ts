import {
  atomFamily,
  atomWithStorage,
} from 'jotai/utils';
import { atom } from 'jotai';

export const bookName = atomFamily(
  (isbn: string) => atomWithStorage(
    `bookName-${isbn}`,
    '',
  ),
);

export const bookPrice = atomFamily(
  (isbn: string) => atomWithStorage(
    `bookPrice-${isbn}`,
    0,
  ),
);

export const bookCopies = atomFamily(
  (isbn: string) => atomWithStorage(
    `bookCopies-${isbn}`,
    0,
  ),
);

export type BookType = {
  isbn: string,
  name: string,
  price: number,
  copies: number,
};

export const book = atomFamily(
  (isbn: string) => atom(
    (get) => ({
      isbn,
      name: get(bookName(isbn)),
      price: get(bookPrice(isbn)),
      copies: get(bookCopies(isbn)),
    } as const satisfies BookType),
    (get, set, update: Partial<BookType>) => {
      const {
        isbn: updateIsbn,
        name: updateName,
        price: updatePrice,
        copies: updateCopies,
      } = update;
      const outputIsbn = updateIsbn ?? isbn;
      if (updateName) {
        set(bookName(outputIsbn), updateName);
      }
      if (updatePrice) {
        set(bookPrice(outputIsbn), updatePrice);
      }
      if (updateCopies) {
        set(bookCopies(outputIsbn), updateCopies);
      }
    },
  ),
);
