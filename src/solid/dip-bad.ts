class MySQLConnection {
  query(sql: string): object[] {
    // Execute SQL query

    return [];
  }
}

class DbUserRepository {
  protected dbConnection: MySQLConnection;

  constructor(dbConnection: MySQLConnection) {
    this.dbConnection = dbConnection;
  }

  findAll() {
    return this.dbConnection.query('SELECT * FROM Users;');
  }
}

export { DbUserRepository, MySQLConnection };
