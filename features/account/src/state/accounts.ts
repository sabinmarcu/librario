import { atom } from 'jotai';
import { seedAccounts } from '../seed';
import type { Account } from './account';
import { account } from './account';

const allAccounts = atom([] as string[]);
export const accounts = atom(
  (get) => get(allAccounts),
  (get, set, update: Account) => {
    const list = get(allAccounts);
    const { id } = update;
    set(account(id), update);
    set(allAccounts, [...list, id]);
  },
);

let seeded = false;
// Seed Data
accounts.onMount = (setSelf) => {
  if (!seeded) {
    seeded = true;
    seedAccounts.forEach(setSelf);
  }
};
