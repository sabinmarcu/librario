import { atom } from 'jotai';
import {
  atomFamily,
  atomWithStorage,
} from 'jotai/utils';
import { nanoid } from 'nanoid';
import { bookPrice } from '@librario/book';
import {
  addDays,
  differenceInDays,
  isWithinInterval,
  toDate,
} from 'date-fns';
import {
  currentUserId,
} from '@librario/account';
import { seedLends } from '../seed';

export type LendStatus = 'active' | 'returned';

export const lendDate = atomFamily(
  (lendId: string) => atomWithStorage<number>(`lendDate-${lendId}`, 0),
);

export const lendIsbn = atomFamily(
  (lendId: string) => atomWithStorage<string>(`lendIsbn-${lendId}`, ''),
);

export const lendPrice = atomFamily(
  (lendId: string) => atomWithStorage<number>(`lendPrice -${lendId}`, 0),
);

export const lendAccount = atomFamily(
  (lendId: string) => atomWithStorage<string>(`lendAccount-${lendId}`, ''),
);

export const lendStatus = atomFamily(
  (lendId: string) => atomWithStorage<LendStatus>(`lendStatus-${lendId}`, 'active'),
);

export const extraPrice = atomFamily(
  (lendId: string) => atom(
    (get) => {
      const lendDateValue = toDate(get(lendDate(lendId)));
      const lendLeaseEnd = addDays(lendDateValue, 14);
      const today = toDate(Date.now());
      if (isWithinInterval(today, { start: lendDateValue, end: lendLeaseEnd })) {
        return 0;
      }
      const daysOver = differenceInDays(today, lendLeaseEnd);
      const originalPrice = get(lendPrice(lendId));
      const perDay = originalPrice / 100;
      return daysOver * perDay;
    },
  ),
);

export const returnPrice = atomFamily(
  (lendId: string) => atom(
    (get) => get(lendPrice(lendId)) + get(extraPrice(lendId)),
  ),
);

export type LendType = {
  id: string;
  date: number;
  isbn: string;
  price: number;
  extraPrice: number;
  returnPrice: number;
  status: LendStatus;
};

export type LendSeedType =
& Omit<LendType, 'extraPrice' | 'returnPrice'>
& { userId: string };

export const lendingsList = atomWithStorage<string[]>('lendings', []);

export const lendings = atom(
  (get) => get(lendingsList),
  (get, set, update: string | LendSeedType) => {
    const existingLendings = get(lendingsList);
    const {
      isbn,
      price,
      date,
      userId,
      id: newLendId,
      status,
    } = typeof update === 'string'
      ? {
        id: nanoid(),
        isbn: update,
        price: get(bookPrice(update)),
        date: Date.now(),
        userId: get(currentUserId)!,
        status: 'active',
      } as const : {
        ...update,
      };
    if (existingLendings.includes(newLendId)) {
      return;
    }
    set(lendDate(newLendId), date);
    set(lendIsbn(newLendId), isbn);
    set(lendPrice(newLendId), price);
    set(lendAccount(newLendId), userId);
    set(lendStatus(newLendId), status);
    set(lendingsList, [...existingLendings, newLendId]);
  },
);

export const lend = atomFamily(
  (lendId: string) => atom<LendType>(
    (get) => ({
      id: lendId,
      date: get(lendDate(lendId)),
      isbn: get(lendIsbn(lendId)),
      price: get(lendPrice(lendId)),
      extraPrice: get(extraPrice(lendId)),
      returnPrice: get(returnPrice(lendId)),
      status: get(lendStatus(lendId)),
    }),
  ),
);

let seeded = false;
// Seed data
lendings.onMount = (setSelf) => {
  if (!seeded) {
    seeded = true;
    seedLends.forEach(setSelf);
  }
};
