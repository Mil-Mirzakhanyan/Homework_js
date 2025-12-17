const passwordSymbol = Symbol('password');

class User {
  constructor(name, password) {
    this.name = name;
    this[passwordSymbol] = password;
  }

  checkPassword(input) {
    return this[passwordSymbol] === input;
  }

  changePassword(newPassword) {
    this[passwordSymbol] = newPassword;
  }
}
