import {
  currentUser,
} from '@librario/account';
import { canLend } from '@librario/lend';
import { useAtomValue } from 'jotai';

export const useCardIsDisabled = (bookId: string) => {
  const { type = 'user' } = useAtomValue(currentUser) ?? {};
  const can = useAtomValue(canLend(bookId));
  return type === 'user' && !can;
};
