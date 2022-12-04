import styled from '@emotion/styled';
import { bookCopies } from '@librario/book';
import { Typography } from '@librario/ui';
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
      {detailed
        ? `Available: ${available} / ${total}`
        : `Available: ${available}`}
    </RawBookAvailableStatus>
  );
};
