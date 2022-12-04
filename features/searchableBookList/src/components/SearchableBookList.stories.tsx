import { Flex } from '@librario/ui';
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
import { books } from '@librario/book';
import { Search } from '@librario/search';
import { SearchableBookList as Component } from './SearchableBookList';

export default {
  title: 'Features/Searchable Book List',
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
  useAtomValue(books);
  const setIsDisabled = useSetAtom(disabledAtom);
  useEffect(
    () => { setIsDisabled(disabled); },
    [disabled, setIsDisabled],
  );
  return (
    <Flex direction="column">
      <Search />
      <Component
        useDisabledHook={useIsDisabled}
        ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
        StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
      />
    </Flex>
  );
};

export const SearchableBookList = Template.bind({});
