import { bookCopies } from '@librario/book';
import {
  atom,
} from 'jotai';
import {
  atomFamily,
} from 'jotai/utils';
import {
  lend,
  lendAccount,
  lendings,
  lendIsbn,
  lendStatus,
} from './lend';

export const lendingsOfIsbn = atomFamily(
  (isbn: string) => atom(
    (get) => {
      const list = get(lendings)
        .filter(
          (lending) => get(lendIsbn(lending)) === isbn,
        );
      return list;
    },
    () => {},
  ),
);

export const activeLendingsOfIsbn = atomFamily(
  (isbn: string) => atom(
    (get) => get(lendingsOfIsbn(isbn)).filter(
      (lending) => get(lendStatus(lending)) === 'active',
    ),
  ),
);

export const availableBooksOfIsbn = atomFamily(
  (isbn: string) => atom(
    (get) => Math.max(
      get(bookCopies(isbn)) - get(activeLendingsOfIsbn(isbn)).length,
      0,
    ),
  ),
);

export const lendingsOfAccount = atomFamily(
  (userId: string) => atom(
    (get) => get(lendings)
      .filter(
        (lending) => get(lendAccount(lending)) === userId,
      )
      .map(
        (lending) => get(lend(lending)),
      ),
  ),
);

export const canLend = atomFamily(
  (isbn: string) => atom(
    (get) => get(availableBooksOfIsbn(isbn)) > 0,
  ),
);
