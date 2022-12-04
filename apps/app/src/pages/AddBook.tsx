import type { FC } from 'react';
import {
  useCallback,
} from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import { EditBook } from '@librario/admin-interactions';
import { useSetAtom } from 'jotai';
import type { BookType } from '@librario/book';
import {
  books,
} from '@librario/book';

export const AddBookPage: FC = () => {
  const update = useSetAtom(books);
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (data: BookType) => {
      update(data);
      navigate('/app');
    },
    [update, navigate],
  );
  return <EditBook onSubmit={onSubmit} title="Add new book" />;
};
