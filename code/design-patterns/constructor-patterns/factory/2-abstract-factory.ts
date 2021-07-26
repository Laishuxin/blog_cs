export {}
//* 设计模式 - 抽象工厂模式
//* 抽象工厂模式主要用于创建一系列产品族，要求这些产品族是有相关性的。
interface IDBConnection {
  connect(username: string, password: string): void;
}
interface IDBReader {
  read(): string;
}
interface IDBCommand {
  setConnection(connection: IDBConnection): void;
}

class MysqlReader implements IDBReader {
  read(): string {
    return Math.random() >= 0.5 ? 'read data from mysql' : '';
  }
}

class OracleReader implements IDBReader {
  read(): string {
    return Math.random() >= 0.5 ? 'read data from oracle' : '';
  }
}

class OracleCommand implements IDBCommand {
  private connection!: IDBConnection;
  setConnection(connection: IDBConnection): void {
    this.connection = connection;
  }
}

class OracleConnection implements IDBConnection {
  connect(username: string, password: string): void {
    console.log(`${username} welcome to oracle`);
  }
}

class MysqlConnection implements IDBConnection {
  connect(username: string, password: string): void {
    console.log(`${username} connect successfully`);
  }
}
class MysqlCommand implements IDBCommand {
  private connection!: IDBConnection;
  setConnection(connection: IDBConnection): void {
    this.connection = connection;
  }
}

abstract class DBFactory {
  public abstract createConnection(): IDBConnection;
  public abstract createCommand(): IDBCommand;
  public abstract createReader(): IDBReader;
}

class MySqlDBFactory extends DBFactory {
  public createReader(): IDBReader {
    return new MysqlReader();
  }
  public createConnection(): IDBConnection {
    return new MysqlConnection();
  }
  public createCommand(): IDBCommand {
    return new MysqlCommand();
  }
}

class OracleDBFactory extends DBFactory {
  public createConnection(): IDBConnection {
    return new OracleConnection();
  }
  public createCommand(): IDBCommand {
    return new OracleCommand();
  }
  public createReader(): IDBReader {
    return new OracleReader();
  }
}

class EmployeeDAO {
  constructor(private dbFactory: DBFactory) {}
  public getEmployees() {
    const connection: IDBConnection = this.dbFactory.createConnection();
    const command: IDBCommand = this.dbFactory.createCommand();
    command.setConnection(connection);
    const reader: IDBReader = this.dbFactory.createReader();
    let data: string = '';
    while (data = reader.read()) {
      console.log('data = ', data);
    }
  }
}

function main() {
  const mysqlEmployeeDAO: EmployeeDAO = new EmployeeDAO(new MySqlDBFactory());
  const oracleEmployeeDAO: EmployeeDAO = new EmployeeDAO(new OracleDBFactory);
  mysqlEmployeeDAO.getEmployees();
  oracleEmployeeDAO.getEmployees();
}

main();
