import fs from 'fs';

interface IUser {
  id: number;
  name: string;
}

abstract class BaseUserRepository {
  // Useful fields

  abstract getById(id: number): IUser;

  // Useful methods
}

class MockUserRepository extends BaseUserRepository {
  getById(id: number): IUser {
    return { id, name: 'Robert' };
  }
}

class FileUserRepository extends BaseUserRepository {
  getById(id: number): IUser {
    const fileContent = fs.readFileSync('users.json', 'utf-8');
    const user = JSON.parse(fileContent)[id];

    return user;
  }
}

class DbUserRepository extends BaseUserRepository {
  getById(id: number): IUser {
    // SELECT id, name FROM users WHERE users.id = ${id};

    return { id, name: 'Robert' };
  }
}

class UserFormatter {
  formatToHtml(user: IUser): string {
    return `<p>Name: ${user.name} </p>`;
  }
}

class UserController {
  protected repository: BaseUserRepository;

  constructor() {
    switch (process.env.NODE_ENV) {
      case 'development':
        this.repository = new FileUserRepository();
        break;
      case 'test':
        this.repository = new MockUserRepository();
        break;
      default:
        this.repository = new DbUserRepository();
    }
  }

  getUserInfo(id: number): IUser {
    return this.repository.getById(id);
  }
}

export {
  UserController,
  UserFormatter,
  BaseUserRepository,
  MockUserRepository,
  FileUserRepository,
  IUser
};
