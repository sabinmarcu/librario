import {
  Flex,
} from '@librario/ui';
import type {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  atom,
  useAtom,
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';
import { seedBooks } from '../../seed';
import { books } from '../../state/books';
import { Book as Component } from './Book';

const disabledAtom = atom(false);
const useIsDisabled = () => useAtomValue(disabledAtom);

export default {
  title: 'Features/Book/Book',
  argTypes: {
    isbn: {
      options: seedBooks.map((_, idx) => idx),
      mapping: seedBooks.map((book) => book.isbn),
      control: {
        type: 'select',
        labels: seedBooks.map((book) => book.name),
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    isbn: seedBooks[0].isbn,
    disabled: false,
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ disabled, ...props }: any) => {
  const setIsDisabled = useSetAtom(disabledAtom);
  useEffect(
    () => {
      setIsDisabled(disabled);
    },
    [disabled, setIsDisabled],
  );
  useAtom(books);
  return (
    <Flex center grow gap={5}>
      <Component
        {...props}
        useDisabledHook={useIsDisabled}
        ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
        StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
      />
    </Flex>
  );
};

export const Book = Template.bind({});
