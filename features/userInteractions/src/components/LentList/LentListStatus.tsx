import type { FC } from 'react';
import { useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { currentUser } from '@librario/account';
import {
  lendingOfUserAndIsbn,
  extraPrice,
  lendDate,
} from '@librario/lend';
import type { ISBNProps } from '@librario/book';
import {
  Typography,
} from '@librario/ui';
import {
  addDays,
  formatDistance,
} from 'date-fns';

export const LentListStatus: FC<ISBNProps> = ({
  isbn,
}) => {
  const { id } = useAtomValue(currentUser)!;
  const lending = useAtomValue(lendingOfUserAndIsbn(useMemo(() => [isbn, id], [isbn, id])))!;
  const penalty = useAtomValue(extraPrice(lending));
  const date = useAtomValue(lendDate(lending));
  const datePrint = useMemo(
    () => formatDistance(new Date(), addDays(date, 14)),
    [date],
  );
  if (penalty) {
    return <Typography variant="body1" color="error">OVERDUE</Typography>;
  }
  return <Typography variant="body1" color="success">{`${datePrint} days to return`}</Typography>;
};
