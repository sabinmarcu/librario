import styled from '@emotion/styled';
import { bookCopies } from '@librario/book';
import {
  Flex,
  Typography,
} from '@librario/ui';
import { useAtomValue } from 'jotai';
import type {
  ComponentProps,
  FC,
} from 'react';
import { availableBooksOfIsbn } from '../state/lendings';

export const RawBookAvailableStatus = styled(Typography)();

export type BookAvailableStatusProps =
& Partial<ComponentProps<typeof RawBookAvailableStatus>>
& {
  isbn: string;
  detailed?: boolean
};

export const BookAvailableStatus: FC<BookAvailableStatusProps> = ({
  isbn,
  detailed,
  ...props
}) => {
  const total = useAtomValue(bookCopies(isbn));
  const available = useAtomValue(availableBooksOfIsbn(isbn));
  return (
    <RawBookAvailableStatus {...props} variant="body2">
      <Flex gap={0.5}>
        <Typography variant="body2">Available:</Typography>
        <Typography
          variant="body2"
          color={
            (available < 3 && 'error')
          || (available < 5 && 'warning')
          || 'success'
          }
        >
          {detailed
            ? `${available} / ${total}`
            : `${available}`}
        </Typography>
      </Flex>
    </RawBookAvailableStatus>
  );
};
