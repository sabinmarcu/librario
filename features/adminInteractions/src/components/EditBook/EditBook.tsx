import styled from '@emotion/styled';
import type {
  BookType,
  ISBNProps,
} from '@librario/book';
import {
  BookStatus,
  BookTitle,
  BookCard,
  BookCardContent,
  BookCover,
  book,
} from '@librario/book';
import { theme } from '@librario/theme';
import {
  Button,
  Container,
  Flex,
  Paper,
  Typography,
} from '@librario/ui';
import {
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { nanoid } from 'nanoid';
import type { FC } from 'react';
import {
  useEffect,
  useMemo,
} from 'react';
import { editState } from '../../state/editState';
import { EditInput } from './EditInput';

export interface EditBookProps extends ISBNProps {
  onSubmit?: (value: BookType) => void;
  title: string;
}

export const EditBookWrapper = styled(Flex)(({ gap }) => `
  gap: ${gap}rem;
  padding: ${gap}rem;
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[4]};
  transition: ${theme.transition.create('boxShadow')};
  background: ${theme.colors.background.main};
  &:hover {
    box-shadow: ${theme.shadows[10]};
  }
`).withComponent(Paper);

export const EditBook: FC<EditBookProps> = ({
  isbn: input,
  onSubmit,
  title,
}) => {
  const inputIsbn = useMemo(
    () => input ?? nanoid(),
    [input],
  );
  const inputBook = useAtomValue(book(inputIsbn));
  const { field, result } = useAtomValue(editState(inputBook));
  const setIsbnField = useSetAtom(field('isbn'));
  useEffect(() => {
    if (!input) {
      setIsbnField('');
    }
  }, [input, setIsbnField]);
  const resultData = useAtomValue(result) as BookType;
  const submitHandler = useMemo(
    () => {
      if (!onSubmit) {
        return undefined;
      }
      return () => {
        onSubmit(resultData as any);
      };
    },
    [onSubmit, resultData],
  );
  const {
    isbn, name, price, copies,
  } = resultData;
  return (
    <Flex style={{ paddingTop: '5rem' }}>
      <Container>
        <Flex gap={5} align="flex-start">
          <EditBookWrapper direction="column" gap={2} grow>
            <Typography variant="h1">{title}</Typography>
            <EditInput field={field('name')} label="Book Name" />
            <EditInput field={field('isbn')} label="ISBN Number" />
            <EditInput field={field('price')} type="number" label="Price (in &euro;)" />
            <EditInput field={field('copies')} type="number" label="Copies" />
            <Flex justify="flex-end">
              <Button
                variant="contained"
                color="success"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Flex>
          </EditBookWrapper>
          <BookCard>
            <BookCardContent>
              <BookCover isbn={isbn} />
            </BookCardContent>
            <BookStatus variant="h6" elevation={10} position="left">
              &euro;
              {price}
            </BookStatus>
            <BookStatus variant="h6" elevation={10}>
              {`${copies} Copies`}
            </BookStatus>
            <BookTitle variant="h4">{name}</BookTitle>
          </BookCard>
        </Flex>
      </Container>
    </Flex>
  );
};
