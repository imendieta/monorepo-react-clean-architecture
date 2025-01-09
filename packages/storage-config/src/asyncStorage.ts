import { StorageGetFunction, StorageSaveFunction } from "./storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AsyncStorageFunctionArgs {
  readonly storageKey: string;
}

interface AsyncStorageFunctionResult<T> {
  readonly save: StorageSaveFunction<T>;
  readonly get: StorageGetFunction<T>;
}

interface AsyncStorageFunction {
  <T>(args: AsyncStorageFunctionArgs): AsyncStorageFunctionResult<T>;
}

const asyncStorage: AsyncStorageFunction = <T>({ storageKey }: AsyncStorageFunctionArgs) => {
  const save: StorageSaveFunction<T> = async (value) => {
    await AsyncStorage.setItem(storageKey, JSON.stringify(value));
  };

  const get: StorageGetFunction<T> = async () => {
    const value = await AsyncStorage.getItem(storageKey);
    return value ? JSON.parse(value) : null;
  };

  return { save, get };
};

export type { AsyncStorageFunction, AsyncStorageFunctionResult };
export { asyncStorage };
