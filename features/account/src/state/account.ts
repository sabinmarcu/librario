import {
  atomFamily,
  atomWithStorage,
} from 'jotai/utils';
import { atom } from 'jotai';

export type AccountType = 'user' | 'admin';

export const accountId = atomFamily(
  (id: string) => atom(id),
);

export const accountName = atomFamily(
  (id: string) => atomWithStorage(
    `accountName-${id}`,
    id,
  ),
);

export const accountType = atomFamily(
  (id: string) => atomWithStorage<AccountType>(
    `accountType-${id}`,
    'user',
  ),
);

export type Account = {
  id: string,
  name: string,
  type: AccountType,
};

export const account = atomFamily(
  (id: string) => atom(
    (get) => ({
      id: get(accountId(id)),
      name: get(accountName(id)),
      type: get(accountType(id)),
    } as const satisfies Account),
    (get, set, update: Partial<Account>) => {
      const {
        id: updateId,
        name: updateName,
        type: updateType,
      } = update;
      if (updateId) {
        set(accountId(id), updateId);
      }
      if (updateName) {
        set(accountName(id), updateName);
      }
      if (updateType) {
        set(accountType(id), updateType);
      }
    },
  ),
);
