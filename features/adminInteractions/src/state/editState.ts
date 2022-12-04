import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';

export const editState = atomFamily(
  (initialValue: Record<string, string | number>) => {
    const result = atom(initialValue);
    const fieldAtom = atomFamily(
      (field: string) => atom(
        (get) => get(result)[field],
        (get, set, update: string) => {
          set(result, {
            ...get(result),
            [field]: update,
          });
        },
      ),
    );
    return atom({ field: fieldAtom, result });
  },
);
