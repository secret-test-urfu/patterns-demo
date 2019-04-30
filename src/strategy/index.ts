interface IAuthStrategy {
  authenticate(): void;
}

class TokenAuthStrategy implements IAuthStrategy {
  authenticate() {
    console.log('Authenticating using TokenAuthStrategy');
  }
}

class CookiesAuthStrategy implements IAuthStrategy {
  authenticate() {
    console.log('Authenticating using CookiesAuthStrategy');
  }
}

class Passport {
  protected strategy: IAuthStrategy | null = null;

  use(strategy: IAuthStrategy) {
    this.strategy = strategy;

    return this;
  }

  authenticate() {
    if (this.strategy === null) {
      throw new Error('No authentication strategy set');
    }

    this.strategy.authenticate();
  }
}

// Setup
const passport = new Passport();
const cookiesStrategy = new CookiesAuthStrategy();
passport.use(cookiesStrategy);

// Usage
passport.authenticate();
