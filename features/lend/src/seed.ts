import {
  getTime,
  subDays,
} from 'date-fns';
import type { LendSeedType } from './state/lend';

export const seedLends = [
  {
    id: 'lend-1',
    userId: '2',
    isbn: '9780451457813',
    price: 30,
    status: 'active',
    date: getTime(subDays(Date.now(), 10)),
  },
  {
    id: 'lend-2',
    userId: '2',
    isbn: '9780451458926',
    price: 40,
    status: 'active',
    date: getTime(subDays(Date.now(), 5)),
  },
  {
    id: 'lend-3',
    userId: '3',
    isbn: '9780451458926',
    price: 30,
    status: 'active',
    date: getTime(subDays(Date.now(), 10)),
  },
  {
    id: 'lend-4',
    userId: '3',
    isbn: '9780451458124',
    price: 40,
    status: 'active',
    date: getTime(subDays(Date.now(), 20)),
  },
  {
    id: 'lend-5',
    userId: '3',
    isbn: '9780451457813',
    price: 10,
    status: 'returned',
    date: getTime(subDays(Date.now(), 5)),
  },
] as const satisfies Readonly<LendSeedType[]>;
