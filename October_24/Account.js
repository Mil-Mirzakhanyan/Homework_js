class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;    
    this.balance = balance; 
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds"); 
    }
  }
}

const account = new BankAccount("Milena");

account.deposit(100);

account.withdraw(30);

console.log("Final balance:", account.balance);