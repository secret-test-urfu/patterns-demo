interface IConnection {
  query(sql: string): object[];
}

class MySQLConnection implements IConnection {
  query(sql: string): object[] {
    // Execute SQL query written in MySQL dialect

    return [];
  }
}

class PostgreSQLConnection implements IConnection {
  query(sql: string): object[] {
    // Execute SQL query written in PostgreSQL dialect

    return [];
  }
}

class DbUserRepository {
  protected dbConnection: IConnection;

  constructor(dbConnection: IConnection) {
    this.dbConnection = dbConnection;
  }

  findAll() {
    return this.dbConnection.query('SELECT * FROM users;');
  }
}

const userRepositoryMySQL = new DbUserRepository(new MySQLConnection());
const userRepositoryPostgreSQL = new DbUserRepository(new PostgreSQLConnection());
