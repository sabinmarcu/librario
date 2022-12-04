import type { FC } from 'react';
import { useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { currentUser } from '@librario/account';
import {
  fullLendingsOfAccount,
} from '@librario/lend';
import { SearchableBookList } from '@librario/searchable-book-list';
import {
  Flex,
  Typography,
} from '@librario/ui';
import { LentListQuickActions } from './LentListQuickActions';
import { LentListStatus } from './LentListStatus';

export const LentList: FC = () => {
  const { id } = useAtomValue(currentUser)!;
  const lendings = useAtomValue(fullLendingsOfAccount(id));
  const isbnList = useMemo(
    () => lendings.map(({ isbn }) => isbn),
    [id, lendings],
  );
  return isbnList.length
    ? (
      <SearchableBookList
        isbnList={isbnList}
        ActionsComponent={LentListQuickActions}
        StatusComponent={LentListStatus}
      />
    )
    : (
      <Flex grow center direction="column" style={{ width: '100%' }}>
        <Typography variant="h1" color="error">Looks like you have no lent books!</Typography>
        <Typography variant="h2" color="info">
          How about we go find some?
        </Typography>
      </Flex>
    );
};
