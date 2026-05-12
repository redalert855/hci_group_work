export function mapEntries<A, B, K extends string | number | symbol>(
   obj: Record<K, A>,
   f: (key: K, val: A) => [K, B],
): Record<K, B> {
   const result: Record<K, B> = {} as any;
   for (const key in obj) {
      const kv = f(key, obj[key]);
      result[kv[0]] = kv[1];
   }
   return result;
}
