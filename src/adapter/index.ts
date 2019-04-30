interface ILogger {
  log(message: string): void;
}

class Client {
  protected logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  doSomething() {
    this.logger.log('DEBUG 1556523689224 Client works fine');
  }
}

class ServiceAdapter implements ILogger {
  protected service = new LoggerService();

  log(message: string): void {
    const match = message.match(/(\w+) (\w+) (.*)/);

    if (match) {
      this.service.sendRecord({
        level: match[1],
        timestamp: Number(match[2]),
        message: match[3]
      });
    }
  }
}

interface ILogRecord {
  level: string;
  timestamp: number;
  message: string;
}

class LoggerService {
  sendRecord(record: ILogRecord) {
    console.log(record);
  }
}
