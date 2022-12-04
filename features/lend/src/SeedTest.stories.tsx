import styled from '@emotion/styled';
import {
  accounts,
  seedAccounts,
} from '@librario/account';
import {
  bookCopies,
  books,
} from '@librario/book';
import {
  Flex,
  Paper,
  Surface,
  Typography,
} from '@librario/ui';
import type {
  Story,
  Meta,
} from '@storybook/react';
import {
  useAtomValue,
} from 'jotai';
import type { FC } from 'react';
import { lendings } from './state/lend';
import {
  activeLendingsOfIsbn,
  availableBooksOfIsbn,
  canLend,
  fullLendingsOfAccount,
  lendingsOfIsbn,
} from './state/lendings';

type ArgsType = {
  account: string;
};

export default {
  title: 'Features/Lend/Seed Test',
  argTypes: {
    account: {
      options: seedAccounts.map((_, id) => id),
      mapping: seedAccounts.map((account) => account.id),
      control: {
        type: 'radio',
        labels: seedAccounts.map((account) => account.name),
      },
    },
  },
  args: {
    account: seedAccounts[0].id,
  },
} as Meta<ArgsType>;

const BookStatusPanel = styled(Surface)().withComponent(Flex);
const BookStatusPanelItem = styled(Paper)(`
  padding: 1rem;
`).withComponent(Flex);

const BookStatus: FC<{ isbn: string }> = ({ isbn }) => {
  const total = useAtomValue(bookCopies(isbn));
  const lended = useAtomValue(lendingsOfIsbn(isbn));
  const actives = useAtomValue(activeLendingsOfIsbn(isbn));
  const available = useAtomValue(availableBooksOfIsbn(isbn));
  const can = useAtomValue(canLend(isbn));
  return (
    <BookStatusPanelItem grow direction="column" gap={1}>
      <Typography variant="h4">{`Book: ${isbn}`}</Typography>
      <Typography variant="body1">{`Total: ${total}`}</Typography>
      <Typography variant="body1">{`Lendings: ${lended.length}`}</Typography>
      <Typography variant="body1">{`Active: ${actives.length}`}</Typography>
      <Typography variant="body1">{`Available: ${available}`}</Typography>
      <Typography variant="body1">{`Can lend: ${can}`}</Typography>
    </BookStatusPanelItem>
  );
};

const Panel = styled(Paper)`
  padding: 1rem;
`.withComponent(Flex);

const Template: Story<ArgsType> = ({ account }) => {
  const booksList = useAtomValue(books);
  useAtomValue(accounts);
  const list = useAtomValue(lendings);
  const accountLendings = useAtomValue(fullLendingsOfAccount(account));

  return (
    <Flex gap={2}>
      <Panel grow direction="column">
        <Typography variant="h4">Lend IDs</Typography>
        <pre>
          {JSON.stringify(list, null, 2)}
        </pre>
      </Panel>
      <Panel grow direction="column">
        <Typography variant="h4">{`Lends of Account ${account}`}</Typography>
        <pre>
          {JSON.stringify(accountLendings, null, 2)}
        </pre>
      </Panel>
      <BookStatusPanel grow direction="column" gap={2}>
        { booksList.map((isbn) => (
          <BookStatus key={isbn} isbn={isbn} />
        )) }
      </BookStatusPanel>
    </Flex>
  );
};

export const SeedTest = Template.bind({});
