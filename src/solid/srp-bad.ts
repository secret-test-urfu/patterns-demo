// Bad

interface IUser {
  id: number;
  name: string;
}

class UserController {
  getUserInfo(id: number): string {
    const user = this.getUserFromDb(id);

    return this.formatToHtml(user);
  }

  protected getUserFromDb(id: number): IUser {
    // SELECT id, name FROM users WHERE users.id = ${id};

    return { id: 1, name: 'Martin' };
  }

  protected formatToHtml(user: IUser): string {
    return `<p>Name: ${user.name} </p>`;
  }
}

export { UserController, IUser };
