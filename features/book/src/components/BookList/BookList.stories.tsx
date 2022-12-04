import type {
  Meta,
  Story,
} from '@storybook/react';
import {
  atom,
  useAtomValue,
  useSetAtom,
} from 'jotai';
import { useEffect } from 'react';
import { books } from '../../state/books';
import { BookList as Component } from './BookList';

export default {
  title: 'Features/Book/Book List',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    disabled: false,
  },
} as Meta;

const disabledAtom = atom(false);
const useIsDisabled = () => useAtomValue(disabledAtom);

const Template: Story = ({ disabled }: any) => {
  const list = useAtomValue(books);
  const setIsDisabled = useSetAtom(disabledAtom);
  useEffect(
    () => { setIsDisabled(disabled); },
    [disabled, setIsDisabled],
  );
  return (
    <Component
      isbnList={list}
      useDisabledHook={useIsDisabled}
      ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
      StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
    />
  );
};

export const BookList = Template.bind({});
