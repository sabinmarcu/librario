import type { FC } from 'react';
import { useCallback } from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { EditBook } from '@librario/admin-interactions';
import { useSetAtom } from 'jotai';
import type { BookType } from '@librario/book';
import { book } from '@librario/book';

export const EditBookPage: FC = () => {
  const { isbn } = useParams();
  const update = useSetAtom(book(isbn!));
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (data: BookType) => {
      update(data);
      navigate('/app');
    },
    [update, navigate],
  );
  return <EditBook isbn={isbn} onSubmit={onSubmit} title="Edit Book" />;
};
