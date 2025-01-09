interface StorageSaveFunction<T> {
  (value: T): Promise<void>;
}

interface StorageGetFunction<T> {
  (): Promise<T>;
}

export type { StorageSaveFunction, StorageGetFunction };
