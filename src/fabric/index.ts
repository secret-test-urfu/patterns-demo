enum StorageType {
  Redis,
  InMemory
}

interface IStorage {
  get(key: string): string;
  set(key: string, value: string): void;
}

class RedisStorage implements IStorage {
  get(key: string): string {
    // GET ${key}

    return 'some-value-from-redis';
  }

  set(key: string, value: string): void {
    // SET ${key} ${value}
  }
}

class InMemoryStorage implements IStorage {
  protected data = {};

  get(key: string): string {
    return this.data[key];
  }

  set(key: string, value: string): void {
    this.data[key] = value;
  }
}

function createStorage(type: StorageType): IStorage {
  switch (type) {
    case StorageType.Redis:
      return new RedisStorage();
    case StorageType.InMemory:
      return new InMemoryStorage();
    default:
      throw new Error('Invalid storage type');
  }
}

export { createStorage, IStorage, StorageType, RedisStorage, InMemoryStorage };
