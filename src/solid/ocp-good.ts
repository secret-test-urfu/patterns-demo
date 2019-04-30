// Good

interface IUser {
  id: number;
  name: string;
  getDisplayFields(): string[];
}

interface IRegisteredUser extends IUser {
  email: string;
}

class UserFormatter {
  formatToHtml(user: IUser): string {
    return user
      .getDisplayFields()
      .map(field => `<p>${field}: ${user[field]}</p>`)
      .join('<br>');
  }
}

export { UserFormatter, IUser, IRegisteredUser };
