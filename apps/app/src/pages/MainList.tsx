import type { AccountType } from '@librario/account';
import {
  currentUser,
} from '@librario/account';
import type { ISBNProps } from '@librario/book';
import { books } from '@librario/book';
import { BookAvailableStatus } from '@librario/lend';
import { SearchableBookList } from '@librario/searchable-book-list';
import { Typography } from '@librario/ui';
import {
  useAtomValue,
} from 'jotai';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useCardIsDisabled } from '../hooks/useCardIsDisabled';

export const Actions: FC<ISBNProps> = () => (
  <Typography variant="p" color="warning">
    TBD
  </Typography>
);

const statusMap = {
  user: ({ isbn }) => <BookAvailableStatus isbn={isbn} />,
  admin: ({ isbn }) => <BookAvailableStatus isbn={isbn} detailed />,
} as const satisfies Record<AccountType, FC<ISBNProps>>;

export const Status: FC<ISBNProps> = ({ isbn }) => {
  const { type } = useAtomValue(currentUser)!;
  const ToRender = useMemo(() => statusMap[type], [type]);
  return (
    <Typography variant="body1" color="warning">
      <ToRender isbn={isbn} />
    </Typography>
  );
};

export const MainListPage: FC = () => {
  const list = useAtomValue(books);
  return (
    <SearchableBookList
      isbnList={list}
      ActionsComponent={Actions}
      StatusComponent={Status}
      useDisabledHook={useCardIsDisabled}
    />
  );
};
