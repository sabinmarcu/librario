import type { FC } from 'react';
import {
  useCallback,
  useMemo,
} from 'react';
import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { currentUser } from '@librario/account';
import {
  lendingOfUserAndIsbn,
  lendPrice,
  returnPrice,
  extraPrice,
  lendDate,
  lendStatus,
} from '@librario/lend';
import type { ISBNProps } from '@librario/book';
import {
  Button,
  Flex,
  Typography,
} from '@librario/ui';
import { formatDistance } from 'date-fns';

export const LentListQuickActions: FC<ISBNProps> = ({
  isbn,
}) => {
  const { id } = useAtomValue(currentUser)!;
  const lending = useAtomValue(lendingOfUserAndIsbn(useMemo(() => [isbn, id], [isbn, id])))!;
  const price = useAtomValue(lendPrice(lending));
  const priceOnReturn = useAtomValue(returnPrice(lending));
  const penalty = useAtomValue(extraPrice(lending));
  const date = useAtomValue(lendDate(lending));
  const datePrint = useMemo(
    () => formatDistance(date, new Date()),
    [date],
  );
  const setStatus = useSetAtom(lendStatus(lending));
  const onClick = useCallback(
    () => setStatus('returned'),
    [setStatus],
  );
  return (
    <Flex grow direction="column" gap={1}>
      <Flex justify="space-between">
        <Typography variant="body1">Date Lent</Typography>
        <Typography variant="body1" color={penalty ? 'error' : 'success'}>
          {`${datePrint} ago`}
        </Typography>
      </Flex>
      <Flex justify="space-between">
        <Typography variant="body1">Return Price</Typography>
        <Typography variant="body1" color={penalty ? 'error' : 'success'}>
          &euro;
          {priceOnReturn.toFixed(2)}
        </Typography>
      </Flex>
      {penalty ? (
        <>
          <Flex justify="space-between">
            <Typography variant="body1">Extra Price</Typography>
            <Typography variant="body1" color="warning">
              &euro;
              {penalty.toFixed(2)}
            </Typography>
          </Flex>
          <Flex justify="space-between">
            <Typography variant="body1">Price at time of lent</Typography>
            <Typography variant="body1">
              &euro;
              {price.toFixed(2)}
            </Typography>
          </Flex>
        </>
      ) : undefined}
      <Flex justify="center">
        <Button
          variant="contained"
          color="success"
          onClick={onClick}
        >
          Return
        </Button>
      </Flex>
    </Flex>
  );
};
