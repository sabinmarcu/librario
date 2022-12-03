import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { account } from './account';

export const currentUserId = atomWithStorage<string | undefined>('currentUser', undefined);
export const currentUser = atom(
  (get) => {
    const id = get(currentUserId);
    if (id) {
      return get(account(id));
    }
    return undefined;
  },
  (get, set, update: string | undefined) => {
    set(currentUserId, update);
  },
);

export const isLoggedIn = atom(
  (get) => typeof get(currentUserId) !== 'undefined',
);

export const isAdmin = atom(
  (get) => {
    const current = get(currentUser);
    if (!current) {
      return false;
    }
    return current.type === 'admin';
  },
);

export const isUser = atom(
  (get) => get(isLoggedIn) && !get(isAdmin),
);
