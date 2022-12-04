import type { AccountType } from '@librario/account';
import {
  currentUser,
} from '@librario/account';
import { AdminQuickActions } from '@librario/admin-interactions';
import type { ISBNProps } from '@librario/book';
import { books } from '@librario/book';
import { BookAvailableStatus } from '@librario/lend';
import { SearchableBookList } from '@librario/searchable-book-list';
import { UserQuickActions } from '@librario/user-interactions';
import {
  useAtomValue,
} from 'jotai';
import type { FC } from 'react';
import {
  useCallback,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCardIsDisabled } from '../hooks/useCardIsDisabled';

const actionsMap = {
  user: ({ isbn }) => <UserQuickActions isbn={isbn} />,
  admin: ({ isbn }) => {
    const navigate = useNavigate();
    const onEdit = useCallback(
      () => navigate(`/app/edit/${isbn}`),
      [navigate, isbn],
    );
    return (<AdminQuickActions isbn={isbn} onEdit={onEdit} />);
  },
} as const satisfies Record<AccountType, FC<ISBNProps>>;

export const Actions: FC<ISBNProps> = ({ isbn }) => {
  const { type } = useAtomValue(currentUser)!;
  const ToRender = useMemo(() => actionsMap[type], [type]);
  return (
    <ToRender isbn={isbn} />
  );
};

const statusMap = {
  user: ({ isbn }) => <BookAvailableStatus isbn={isbn} />,
  admin: ({ isbn }) => <BookAvailableStatus isbn={isbn} detailed />,
} as const satisfies Record<AccountType, FC<ISBNProps>>;

export const Status: FC<ISBNProps> = ({ isbn }) => {
  const { type } = useAtomValue(currentUser)!;
  const ToRender = useMemo(() => statusMap[type], [type]);
  return (
    <ToRender isbn={isbn} />
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
