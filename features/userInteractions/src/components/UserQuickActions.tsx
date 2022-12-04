import type { FC } from 'react';
import {
  useMemo,
} from 'react';
import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import {
  lendings,
  hasLent,
} from '@librario/lend';
import { Button } from '@librario/ui';
import type { ISBNProps } from '@librario/book';
import { currentUser } from '@librario/account';

export interface UserQuickActionsProps extends ISBNProps {
  onLend?: () => void;
}

export const UserQuickActions: FC<UserQuickActionsProps> = ({
  onLend,
  isbn,
}) => {
  const lend = useSetAtom(lendings);
  const { id: userId } = useAtomValue(currentUser)!;
  const query = useMemo(() => [isbn, userId], [isbn, userId]);
  const hasLentBook = useAtomValue(hasLent(query));
  const canLend = useMemo(
    () => !hasLentBook,
    [hasLentBook],
  );
  const onClick = useMemo(
    () => {
      if (!canLend) {
        return undefined;
      }
      return () => {
        lend(isbn);
        onLend?.();
      };
    },
    [onLend, lend, isbn, canLend],
  );
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={!canLend}
      onClick={onClick}
    >
      {canLend ? 'Lend this book' : 'Already lent'}
    </Button>
  );
};
