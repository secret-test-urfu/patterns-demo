interface IUser {
  id: number;
  name: string;
}

interface IReadableRepository<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

interface IWritableRepository<T> {
  create(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
}

class MockUserRepository implements IReadableRepository<IUser> {
  findAll(): Promise<IUser[]> {
    return Promise.resolve([{ id: 1, name: 'Sergey' }, { id: 2, name: 'Maxim' }]);
  }

  findOne(id: string): Promise<IUser> {
    return Promise.resolve({ id: 3, name: 'Igor' });
  }
}
