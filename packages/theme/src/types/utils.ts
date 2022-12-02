import type { UnionToIntersection } from 'type-fest';

export type KV = { key: PropertyKey, value: any };
export type KeyValue<T extends Record<PropertyKey, any>> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

export type IsKV<T> = T extends KV
  ? T
  : never;

export type PackKeyValue<T extends KV> = {
  [K in T['key']]: Extract<T, { key: K }>['value'];
};

export type Values<T extends Record<PropertyKey, PropertyKey>> = KeyValue<T>['value'];

export type OmitNeverRaw<
  T extends Record<PropertyKey, any>,
  KVs = KeyValue<T>,
> = PackKeyValue<Exclude<IsKV<KVs>, { value: never }>>;

export type OmitNever<
  T extends Record<PropertyKey, any>,
  Result = OmitNeverRaw<T>,
> = Result[keyof Result] extends never
  ? never
  : Result;

// following 3 stolen from https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type
// yes.. I know.. maybe I find a better solution later
export type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never;

export type Push<T extends any[], V> = [...T, V];

export type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;
