// Bad

interface IUser {
  id: number;
  name: string;
}

interface IRegisteredUser extends IUser {
  email: string;
}

class UserFormatter {
  formatToHtml(user: IUser | IRegisteredUser): string {
    if ('email' in user) {
      return `
        <p>Name: ${user.name} </p>
        <br>
        <p>Email: ${user.email} </p>
      `;
    }

    return `<p>Name: ${user.name} </p>`;
  }
}

export { UserFormatter, IUser, IRegisteredUser };
