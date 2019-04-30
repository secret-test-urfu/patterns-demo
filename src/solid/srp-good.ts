// Good

interface IUser {
  id: number;
  name: string;
}

class UserRepository {
  getUserById(id: number): IUser {
    // SELECT id, name FROM users WHERE users.id = ${id};

    return { id: 1, name: 'Martin' };
  }
}

class UserFormatter {
  formatToHtml(user: IUser): string {
    return `<p>Name: ${user.name} </p>`;
  }
}

class UserController {
  protected repository = new UserRepository();
  protected formatter = new UserFormatter();

  getUserInfo(id: number): string {
    const user = this.repository.getUserById(id);

    return this.formatter.formatToHtml(user);
  }
}

export { UserController, UserRepository, UserFormatter, IUser };
