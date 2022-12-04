import type { FC } from 'react';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { lendings } from '@librario/lend';
import { Button } from '@librario/ui';
import type { ISBNProps } from '@librario/book';

export interface UserQuickActionsProps extends ISBNProps {
  onLend?: () => void;
}

export const UserQuickActions: FC<UserQuickActionsProps> = ({
  onLend,
  isbn,
}) => {
  const lend = useSetAtom(lendings);
  const onClick = useCallback(
    () => {
      lend(isbn);
      onLend?.();
    },
    [onLend, lend, isbn],
  );
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      Lend This Book
    </Button>
  );
};
