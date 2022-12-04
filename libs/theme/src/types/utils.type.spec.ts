import type {
  OmitNeverRaw,
  KeyValue,
  Values,
  PackKeyValue,
  IsKV,
  OmitNever,
} from './utils';

type KeyValueTest1 = KeyValue<Record<string, never>>;
//    ^? type KeyValueTest1 = {
//           key: string;
//           value: never;
//       }

type KeyValueTest2 = KeyValue<{ a: 1 }>;
//    ^? type KeyValueTest2 = {
//           key: "a";
//           value: 1;
//       }

type KeyValueTest3 = KeyValue<{ a: 1, b: 'awesome' }>;
//    ^? type KeyValueTest3 = {
//           key: "a";
//           value: 1;
//       } | {
//           key: "b";
//           value: "awesome";
//       }

type ValuesTest1 = Values<Record<string, never>>;
//    ^? type ValuesTest1 = never

type ValuesTest2 = Values<{ a: 1 }>;
//    ^? type ValuesTest2 = 1

type ValuesTest3 = Values<{ a: 1, b: 'awesome' }>;
//    ^? type ValuesTest3 = 1 | "awesome"

type IsKVTest1 = IsKV<KeyValue<Record<string, never>>>;
//    ^? type IsKVTest1 = {
//           key: string;
//           value: never;
//       }

type IsKVTest2 = IsKV<KeyValue<{ a: 1 }>>;
//    ^? type IsKVTest2 = {
//           key: "a";
//           value: 1;
//       }

type IsKVTest3 = IsKV<KeyValue<{ a: 1, b: 'awesome' }>>;
//    ^? type IsKVTest3 = {
//           key: "a";
//           value: 1;
//       } | {
//           key: "b";
//           value: "awesome";
//       }

type IsKVTest4 = IsKV<{ key: 'awesome', value: 'whatever' }>;
//    ^? type IsKVTest4 = {
//           key: 'awesome';
//           value: 'whatever';
//       }

type IsKVTest5 = IsKV<{ key: 23, value: 'whatever' }>;
//    ^? type IsKVTest5 = {
//           key: 23;
//           value: 'whatever';
//       }

const Symb = Symbol('21');
type IsKVTest6 = IsKV<{ key: typeof Symb, value: 'whatever' }>;
//    ^? type IsKVTest6 = {
//           key: typeof Symb;
//           value: 'whatever';
//       }

type PackKeyValueTest1 = PackKeyValue<KeyValue<Record<string, never>>>;
//    ^? type PackKeyValueTest1 = {
//           [x: string]: never;
//       }

type PackKeyValueTest2 = PackKeyValue<KeyValue<{ a: 1 }>>;
//    ^? type PackKeyValueTest2 = {
//           a: 1;
//       }

type PackKeyValueTest3 = PackKeyValue<KeyValue<{ a: 1, b: 'awesome', c: never }>>;
//    ^? type PackKeyValueTest3 = {
//           a: 1;
//           b: "awesome";
//           c: never;
//       }

type OmitNeverRawTest1 = OmitNeverRaw<Record<string, never>>;
//   ^? type OmitNeverRawTest1 = {}

type OmitNeverRawTest2 = OmitNeverRaw<{ a: 1, b: never }>;
//   ^? type OmitNeverRawTest2 = {
//          a: 1;
//      }

type OmitNeverRawTest3 = OmitNeverRaw<{ a: 1, b: 'awesome', c: never }>;
//   ^? type OmitNeverRawTest3 = {
//          a: 1;
//          b: "awesome";
//      }

type OmitNeverTest1 = OmitNever<Record<string, never>>;
//   ^? type OmitNeverTest1 = never

type OmitNeverTest2 = OmitNever<{ a: 1, b: never }>;
//   ^? type OmitNeverTest2 = {
//          a: 1;
//      }

type OmitNeverTest3 = OmitNever<{ a: 1, b: 'awesome', c: never }>;
//   ^? type OmitNeverTest3 = {
//          a: 1;
//          b: "awesome";
//      }
