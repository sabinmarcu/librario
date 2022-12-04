import type { FC } from 'react';
import { useCallback } from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
} from '@librario/ui';
import type { ISBNProps } from '@librario/book';
import { bookCopies } from '@librario/book';
import { availableBooksOfIsbn } from '@librario/lend';
import {
  useAtomValue,
  useSetAtom,
} from 'jotai';

export interface AdminQuickActionsProps extends ISBNProps {
  onEdit?: () => void;
}

export const AdminQuickActions: FC<AdminQuickActionsProps> = ({
  isbn,
  onEdit,
}) => {
  const setCopies = useSetAtom(bookCopies(isbn));
  const available = useAtomValue(availableBooksOfIsbn(isbn));
  const addOne = useCallback(() => setCopies((c) => c + 1), [setCopies]);
  const removeOne = useCallback(
    () => (available ? setCopies((c) => c - 1) : undefined),
    [setCopies, available],
  );
  return (
    <Flex grow direction="column" gap={0.5}>
      <Flex grow justify="space-between">
        <Button variant="contained" color="primary" onClick={onEdit}>Edit</Button>
        <ButtonGroup>
          <Button variant="outlined" color="success" onClick={addOne}>Add one</Button>
          <Button variant="outlined" color="warning" disabled={!available} onClick={removeOne}>
            {available ? 'Remove one' : 'Out of stock'}
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
