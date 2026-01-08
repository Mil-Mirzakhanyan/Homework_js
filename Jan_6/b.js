const Errors = {
  Validation: class extends Error { name = 'ValidationError' },
  Funds: class extends Error { name = 'InsufficientFundsError' },
  Auth: class extends Error { name = 'AuthorizationError' }
};

class Transaction {
  constructor(accountNumber, amount, transactionType, fromTo = null) {
    this.accountNumber = accountNumber;
    this.amount = amount;
    this.transactionType = transactionType;
    this.timestamp = Date.now();
    this.metadata = fromTo; 
  }
}

class BankAccount {
  #balance = 0;
  #txHistory = [];

  constructor(accNum, accType) {
    if (this.constructor === BankAccount) throw new Error("Abstract!");
    
    if (typeof accNum !== 'string' || accNum.length !== 10) {
      throw new Errors.Validation("Acc number error");
    }

    this.accountNumber = accNum;
    this.type = accType;
  }

  deposit() { throw "Not Implemented"; }
  withdraw() { throw "Not Implemented"; }
  transferFunds() { throw "Not Implemented"; }

  get balance() { return this.#balance; }

  _modify(amt, type, meta) {
    if (this.#balance + amt < 0) throw new Errors.Funds("No money");
    this.#balance += amt;
    this.#txHistory.push(new Transaction(this.accountNumber, Math.abs(amt), type, meta));
  }

  getHistory(limit = 10) {
    return [...this.#txHistory].reverse().slice(0, limit);
  }
}

const logAction = (fn) => function(...args) {
  console.log(`[${new Date().toLocaleString()}] Action: ${fn.name} on ${this.accountNumber}`);
  return fn.apply(this, args);
};

class IndividualAccount extends BankAccount {
  constructor(num) { super(num, "individual"); }

  deposit(amt) { this._modify(amt, 'deposit'); }
  withdraw(amt) { this._modify(-amt, 'withdraw'); }

  transferFunds(target, amt, actor) {
    if (!actor?.isAuthorized) throw new Errors.Auth();
    this.withdraw(amt);
    target.deposit(amt);
  }
}

class JointAccount extends BankAccount {
  constructor(num, owners = []) {
    super(num, "joint");
    this.owners = owners;
  }

  deposit(amt) { this._modify(amt, 'deposit'); }
  withdraw(amt) { this._modify(-amt, 'withdraw'); }

  transferFunds(target, amt, actor) {
    if (!this.owners.includes(actor)) throw new Errors.Auth("Not an owner");
    this.withdraw(amt);
    target.deposit(amt);
  }
}

class Customer {
  #name;
  #email;

  constructor(n, e) {
    this.accounts = [];
    this.isAuthorized = true;
    
    this.name = n;
    this.contactInfo = e;
  }

  set name(v) {
    if (!v || v.length < 2) throw new Errors.Validation();
    this.#name = v;
  }
  get name() { return this.#name; }

  set contactInfo(v) {
    if (!v.includes('@')) throw new Errors.Validation();
    this.#email = v;
  }
  get contactInfo() { return this.#email; }

  addAccount(acc) { this.accounts.push(acc); }
  
  showBalances() {
    this.accounts.forEach(a => console.log(`${a.accountNumber}: ${a.balance}`));
  }
}
