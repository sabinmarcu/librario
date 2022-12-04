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
import { books } from '@librario/book';
import { Search } from '@librario/search';
import { usePipeJotai } from '@librario/hooks';
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
  const isbns = useAtomValue(books);
  usePipeJotai(
    disabled,
    useSetAtom(disabledAtom),
  );
  return (
    <Flex direction="column">
      <Search />
      <Component
        isbnList={isbns}
        useDisabledHook={useIsDisabled}
        ActionsComponent={({ isbn }) => <div>{`Actions: ${isbn}`}</div>}
        StatusComponent={({ isbn }) => <div>{`Status: ${isbn}`}</div>}
      />
    </Flex>
  );
};

export const SearchableBookList = Template.bind({});
