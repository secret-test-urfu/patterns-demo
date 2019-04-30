interface IUser {
  id: number;
  name: string;
}

interface IRepository<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  create(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
}

class MockUserRepository implements IRepository<IUser> {
  findAll(): Promise<IUser[]> {
    return Promise.resolve([{ id: 1, name: 'Sergey' }, { id: 2, name: 'Maxim' }]);
  }

  findOne(id: string): Promise<IUser> {
    return Promise.resolve({ id: 3, name: 'Igor' });
  }

  create(item: IUser): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update(id: string, item: IUser): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export { MockUserRepository, IRepository, IUser };
