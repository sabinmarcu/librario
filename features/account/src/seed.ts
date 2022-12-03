import type { Account } from './state/account';

export const seedAccounts = [
  { id: '1', name: 'Admin User', type: 'admin' },
  { id: '2', name: 'John Smith', type: 'user' },
  { id: '3', name: 'Jane Doe', type: 'user' },
] as const satisfies Readonly<Account[]>;
